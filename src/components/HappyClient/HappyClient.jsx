import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import {
  Car,
  Plane,
  MapPin,
  Calendar,
  ChevronDown,
  ArrowRight,
  Clock,
} from 'lucide-react'

// Assets
import carImg from '../../assets/Sedan_GiF.9efd9ae4.png'
import frameImg from '../../assets/frame.png'

const clientContent = {
  en: {
    carRental: 'Car Rental',
    airportRental: 'Airport Rental',
    chooseCar: 'Choose a Car',
    selectCarType: 'Select Car Type',
    pickupLocation: 'Pickup Location',
    enterPickup: 'Enter Pickup Location',
    dropoffLocation: 'Drop-off Location',
    enterDropoff: 'Enter Drop-off Location',
    pickupDateTime: 'Pickup Date & Time',
    returnDateTime: 'Return Date & Time',
    selectHours: 'Select Hours',
    hoursUnit: 'hours',
    minHoursWarning: 'Minimum 2 hours is required for an hourly trip.',
    pickupAirport: 'Pickup Airport',
    dropoffAirport: 'Drop-off Airport',
    selectAirport: 'Select Airport',
    oneWay: 'One Way',
    roundWay: 'Round Way',
    hourly: 'Hourly',
    fromAirport: 'From Airport',
    fromHome: 'From Home',
    continueBtn: 'Continue',
    heading: 'From Everyday Rides to Meaningful Journeys',
    stats: [
      { id: 1, endVal: 300000, suffix: '+', label: 'Trip Requests' },
      { id: 2, endVal: 850000, suffix: '+', label: 'Total Customers' },
      { id: 3, endVal: 35000, suffix: '+', label: 'Active Drivers' },
      { id: 4, endVal: 64, suffix: '', label: 'District Covered' },
    ],
  },
  bn: {
    carRental: 'কার রেন্টাল',
    airportRental: 'এয়ারপোর্ট রেন্টাল',
    chooseCar: 'একটি গাড়ি নির্বাচন করুন',
    selectCarType: 'গাড়ি নির্বাচন করুন',
    pickupLocation: 'পিকআপ লোকেশন',
    enterPickup: 'পিকআপ লোকেশন লিখুন',
    dropoffLocation: 'ড্রপ-অফ লোকেশন',
    enterDropoff: 'ড্রপ-অফ লোকেশন লিখুন',
    pickupDateTime: 'Pickup Date & Time',
    returnDateTime: 'Return Date & Time',
    selectHours: 'ঘণ্টা নির্বাচন করুন',
    hoursUnit: 'ঘন্টা',
    minHoursWarning: 'ঘণ্টায় ট্রিপের জন্য ন্যূনতম ২ ঘন্টা আবশ্যক।',
    pickupAirport: 'পিকআপ এয়ারপোর্ট',
    dropoffAirport: 'ড্রপ-অফ এয়ারপোর্ট',
    selectAirport: 'এয়ারপোর্ট নির্বাচন করুন',
    oneWay: 'ওয়ানওয়ে',
    roundWay: 'যাওয়া-আসা',
    hourly: 'ঘন্টায়',
    fromAirport: 'এয়ারপোর্ট থেকে',
    fromHome: 'বাসা থেকে',
    continueBtn: 'চালিয়ে যান',
    heading: 'শহরের ভেতরে কিংবা বাইরে, সারা বাংলাদেশজুড়ে',
    stats: [
      { id: 1, endVal: 300000, suffix: '+', label: 'ট্রিপ রিকোয়েস্ট' },
      { id: 2, endVal: 850000, suffix: '+', label: 'মোট কাস্টমার' },
      { id: 3, endVal: 35000, suffix: '+', label: 'সচল ড্রাইভার' },
      { id: 4, endVal: 64, suffix: '', label: 'যে সকল জেলায় আমাদের সার্ভিস রয়েছে' },
    ],
  },
}

const carOptions = [
  { id: 'noah', name: 'Noah', seats: '7 Seats', image: carImg },
  { id: 'sedan', name: 'Sedan', seats: '4 Seats', image: carImg },
  { id: 'hiace', name: 'HiAce', seats: '11 Seats', image: carImg },
  { id: 'premio', name: 'Premio / Allion', seats: '4 Seats', image: carImg },
]

const airportOptions = [
  'Hazrat Shahjalal Int. Airport, Dhaka (DAC)',
  'Shah Amanat Int. Airport, Chattogram (CGP)',
  'Osmani Int. Airport, Sylhet (ZYL)',
  'Cox’s Bazar Airport (CXB)',
]

const HappyClient = ({ language = 'en' }) => {
  const t = clientContent[language] || clientContent.en


  const [activeTab, setActiveTab] = useState('car')
  const [tripType, setTripType] = useState('one-way') 
  const [hourlyDuration, setHourlyDuration] = useState(2)
  const [airportTripType, setAirportTripType] = useState('from-airport') 

  const [selectedCarId, setSelectedCarId] = useState('noah')
  const [carDropdownOpen, setCarDropdownOpen] = useState(false)
  const carDropdownRef = useRef(null)

  const [airportCarId, setAirportCarId] = useState('')
  const [airportCarDropdownOpen, setAirportCarDropdownOpen] = useState(false)
  const airportCarDropdownRef = useRef(null)
  const [selectedPickupAirport, setSelectedPickupAirport] = useState('')
  const [selectedDropoffAirport, setSelectedDropoffAirport] = useState('')
  const [counts, setCounts] = useState([0, 0, 0, 0])
  const statsRef = useRef(null)
  const carRef = useRef(null)
  const hasAnimated = useRef(false)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (carDropdownRef.current && !carDropdownRef.current.contains(e.target)) {
        setCarDropdownOpen(false)
      }
      if (airportCarDropdownRef.current && !airportCarDropdownRef.current.contains(e.target)) {
        setAirportCarDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  /* ========================================================
     🎬 GSAP ANIMATIONS IN HAPPY CLIENT:
     1. Skyline Car Drive-In Entrance Animation
     2. Live Animated Statistics Number Counter Tween
     ======================================================== */
  useEffect(() => {
    if (hasAnimated.current) return

    // 🎬 GSAP ANIMATION 2: Skyline Car Entrance (drives in from left to road baseline)
    if (carRef.current) {
      gsap.fromTo(
        carRef.current,
        { x: -50, opacity: 0.7 },
        { x: 0, opacity: 1, duration: 1, ease: 'power2.out' }
      )
    }

    // 🎬 GSAP ANIMATION 3: Live Stats Counter Tween
    // Smoothly counts from 0 up to 300,000+, 850,000+, 35,000+, and 64
    const targets = t.stats.map(s => s.endVal)
    const animObj = { val0: 0, val1: 0, val2: 0, val3: 0 }

    gsap.to(animObj, {
      val0: targets[0],
      val1: targets[1],
      val2: targets[2],
      val3: targets[3],
      duration: 2.2,
      ease: 'power2.out',
      onUpdate: () => {
        setCounts([
          Math.floor(animObj.val0),
          Math.floor(animObj.val1),
          Math.floor(animObj.val2),
          Math.floor(animObj.val3),
        ])
      },
      onComplete: () => {
        hasAnimated.current = true
      },
    })
  }, [t.stats])

  const currentCar = carOptions.find((c) => c.id === selectedCarId) || carOptions[0]
  const currentAirportCar = carOptions.find((c) => c.id === airportCarId)

  return (
    <section className="happy-client-wrapper relative" id="homepage_happy_client_wrapper">
      
      {/* 1. Booking Details Card */}
      <div className="choose-trip-details-wrapper relative z-20 -mb-28 sm:-mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="ctd-wrap">
            
            {/* Tabs (Notch Header) */}
            <div className="flex items-end">
              <div className="bg-white rounded-t-2xl px-3 pt-2.5 pb-2 inline-flex items-center gap-1 shadow-[0_-6px_15px_rgba(0,0,0,0.03)] border-t border-l border-r border-gray-100 relative z-10">
                <button
                  type="button"
                  onClick={() => setActiveTab('car')}
                  className={`px-6 py-2.5 rounded-lg text-sm sm:text-base font-bold transition-all cursor-pointer ${
                    activeTab === 'car'
                      ? 'bg-[#18181b] text-white shadow-sm'
                      : 'text-gray-900 hover:text-blue-600 bg-transparent'
                  }`}
                >
                  <span className={language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""}>
                    {t.carRental}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('airport')}
                  className={`px-6 py-2.5 rounded-lg text-sm sm:text-base font-bold transition-all cursor-pointer ${
                    activeTab === 'airport'
                      ? 'bg-[#18181b] text-white shadow-sm'
                      : 'text-gray-900 hover:text-blue-600 bg-transparent'
                  }`}
                >
                  <span className={language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""}>
                    {t.airportRental}
                  </span>
                </button>
              </div>
            </div>

            {/* Main Card Content */}
            <div className="ctd-w-nav-contents bg-white rounded-b-2xl rounded-tr-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 p-6 sm:p-8">
              
              {activeTab === 'car' && (
                <form onSubmit={(e) => e.preventDefault()}>
                  
                  {/* 4 Form Columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 pb-7">
                    
                    {/* 1. Choose a Car */}
                    <div ref={carDropdownRef} className="relative py-3 md:py-0 md:pr-6 flex flex-col justify-center">
                      <label className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-1.5 mb-2">
                        <Car className="w-4 h-4 text-gray-800" />
                        <span className={language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""}>
                          {t.chooseCar}
                        </span>
                        <span className="text-red-500 font-bold">*</span>
                      </label>

                      {/* Dropdown Toggle */}
                      <button
                        type="button"
                        onClick={() => setCarDropdownOpen(!carDropdownOpen)}
                        className="w-full flex items-center justify-between text-left py-0.5 focus:outline-none cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={currentCar.image}
                            alt={currentCar.name}
                            className="w-10 h-6 object-contain"
                          />
                          <div className="flex flex-col leading-tight">
                            <span className="text-xs font-bold text-gray-900">{currentCar.name}</span>
                            <span className="text-[11px] text-gray-500 font-medium">{currentCar.seats}</span>
                          </div>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${carDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Dropdown Menu */}
                      {carDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-50">
                          {carOptions.map((car) => (
                            <div
                              key={car.id}
                              onClick={() => {
                                setSelectedCarId(car.id)
                                setCarDropdownOpen(false)
                              }}
                              className={`flex items-center gap-3 px-3.5 py-2 hover:bg-blue-50 cursor-pointer transition-colors ${
                                selectedCarId === car.id ? 'bg-blue-50/70' : ''
                              }`}
                            >
                              <img src={car.image} alt={car.name} className="w-8 h-5 object-contain" />
                              <div className="flex flex-col leading-tight">
                                <span className="text-xs font-bold text-gray-900">{car.name}</span>
                                <span className="text-[11px] text-gray-500 font-medium">{car.seats}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* 2. Pickup Location */}
                    <div className="py-3 md:py-0 md:px-6 flex flex-col justify-center">
                      <label className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-1.5 mb-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                        <span className={language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""}>
                          {t.pickupLocation}
                        </span>
                        <span className="text-red-500 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder={t.enterPickup}
                        className={`w-full bg-transparent text-xs sm:text-sm text-gray-700 py-1 focus:outline-none placeholder-gray-400 font-medium ${
                          language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""
                        }`}
                      />
                    </div>
                    {tripType !== 'hourly' ? (
                      <div className="py-3 md:py-0 md:px-6 flex flex-col justify-center">
                        <label className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-1.5 mb-2">
                          <MapPin className="w-4 h-4 text-blue-600" />
                          <span className={language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""}>
                            {t.dropoffLocation}
                          </span>
                          <span className="text-red-500 font-bold">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder={t.enterDropoff}
                          className={`w-full bg-transparent text-xs sm:text-sm text-gray-700 py-1 focus:outline-none placeholder-gray-400 font-medium ${
                            language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""
                          }`}
                        />
                      </div>
                    ) : (
                      <div className="py-3 md:py-0 md:px-6 flex flex-col justify-center">
                        <label className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-1.5 mb-2">
                          <Calendar className="w-4 h-4 text-gray-700" />
                          <span>Pickup Date & Time</span>
                          <span className="text-red-500 font-bold">*</span>
                        </label>
                        <input
                          type="datetime-local"
                          className="w-full bg-transparent text-xs sm:text-sm text-gray-700 py-1 focus:outline-none font-medium cursor-pointer"
                        />
                      </div>
                    )}

                    {tripType !== 'hourly' ? (
                      <div className="py-3 md:py-0 md:pl-6 flex flex-col justify-center">
                        <label className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-1.5 mb-2">
                          <Calendar className="w-4 h-4 text-gray-700" />
                          <span>Pickup Date & Time</span>
                          <span className="text-red-500 font-bold">*</span>
                        </label>
                        <input
                          type="datetime-local"
                          className="w-full bg-transparent text-xs sm:text-sm text-gray-700 py-1 focus:outline-none font-medium cursor-pointer"
                        />
                      </div>
                    ) : (
                      <div className="py-3 md:py-0 md:pl-6 flex flex-col justify-center">
                        <label className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-1.5 mb-2">
                          <Clock className="w-4 h-4 text-gray-700" />
                          <span className={language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""}>
                            {t.selectHours}
                          </span>
                          <span className="text-red-500 font-bold">*</span>
                        </label>
                        <div className="flex items-center justify-between border border-gray-200 rounded-lg px-2.5 py-1 bg-white max-w-[200px]">
                          <button
                            type="button"
                            onClick={() => setHourlyDuration((prev) => Math.max(2, prev - 1))}
                            disabled={hourlyDuration <= 2}
                            className={`w-6 h-6 rounded flex items-center justify-center border text-xs font-bold transition-colors ${
                              hourlyDuration <= 2
                                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                : 'border-gray-300 text-gray-600 hover:bg-gray-100 cursor-pointer'
                            }`}
                          >
                            -
                          </button>
                          <span className="text-xs sm:text-sm font-medium text-gray-800">
                            {hourlyDuration} {t.hoursUnit}
                          </span>
                          <button
                            type="button"
                            onClick={() => setHourlyDuration((prev) => Math.min(24, prev + 1))}
                            className="w-6 h-6 rounded flex items-center justify-center border border-gray-300 text-xs font-bold text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <p className="text-[10px] sm:text-[11px] text-red-500 mt-1 font-medium leading-tight">
                          {t.minHoursWarning}
                        </p>
                      </div>
                    )}

                  </div>

                  {/* Round Way Second Row: Return Date & Time */}
                  {tripType === 'round-way' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-5 pb-6 border-t border-gray-100">
                      <div className="py-2 md:py-0 md:pr-6 flex flex-col justify-center">
                        <label className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-1.5 mb-2">
                          <Calendar className="w-4 h-4 text-gray-700" />
                          <span>Return Date & Time</span>
                          <span className="text-red-500 font-bold">*</span>
                        </label>
                        <input
                          type="datetime-local"
                          className="w-full bg-transparent text-xs sm:text-sm text-gray-700 py-1 focus:outline-none font-medium cursor-pointer"
                        />
                      </div>
                    </div>
                  )}

                  {/* Bottom Row: Radios & Continue Button */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                      <label
                        onClick={() => setTripType('one-way')}
                        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm sm:text-base cursor-pointer transition-all ${
                          tripType === 'one-way'
                            ? 'bg-blue-50/90 text-blue-600 font-bold'
                            : 'text-gray-700 hover:text-gray-900 font-medium'
                        }`}
                      >
                        <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          tripType === 'one-way' ? 'border-blue-600' : 'border-gray-400'
                        }`}>
                          {tripType === 'one-way' && <span className="w-2 h-2 rounded-full bg-blue-600" />}
                        </span>
                        <span className={language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""}>
                          {t.oneWay}
                        </span>
                      </label>

                      <label
                        onClick={() => setTripType('round-way')}
                        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm sm:text-base cursor-pointer transition-all ${
                          tripType === 'round-way'
                            ? 'bg-blue-50/90 text-blue-600 font-bold'
                            : 'text-gray-700 hover:text-gray-900 font-medium'
                        }`}
                      >
                        <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          tripType === 'round-way' ? 'border-blue-600' : 'border-gray-400'
                        }`}>
                          {tripType === 'round-way' && <span className="w-2 h-2 rounded-full bg-blue-600" />}
                        </span>
                        <span className={language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""}>
                          {t.roundWay}
                        </span>
                      </label>

                      <label
                        onClick={() => setTripType('hourly')}
                        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm sm:text-base cursor-pointer transition-all ${
                          tripType === 'hourly'
                            ? 'bg-blue-50/90 text-blue-600 font-bold'
                            : 'text-gray-700 hover:text-gray-900 font-medium'
                        }`}
                      >
                        <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          tripType === 'hourly' ? 'border-blue-600' : 'border-gray-400'
                        }`}>
                          {tripType === 'hourly' && <span className="w-2 h-2 rounded-full bg-blue-600" />}
                        </span>
                        <span className={language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""}>
                          {t.hourly}
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3 bg-[#0d59fc] hover:bg-blue-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm transition-all cursor-pointer"
                    >
                      <span className={language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""}>
                        {t.continueBtn}
                      </span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>

                </form>
              )}

              {activeTab === 'airport' && (
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 pb-7">
                    
                    {/* 1. Choose Car */}
                    <div ref={airportCarDropdownRef} className="relative py-3 md:py-0 md:pr-6 flex flex-col justify-center">
                      <label className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-1.5 mb-2">
                        <Car className="w-4 h-4 text-gray-800" />
                        <span className={language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""}>
                          {t.chooseCar}
                        </span>
                        <span className="text-red-500 font-bold">*</span>
                      </label>

                      <button
                        type="button"
                        onClick={() => setAirportCarDropdownOpen(!airportCarDropdownOpen)}
                        className="w-full flex items-center justify-between text-left py-0.5 focus:outline-none cursor-pointer"
                      >
                        {currentAirportCar ? (
                          <div className="flex items-center gap-3">
                            <img
                              src={currentAirportCar.image}
                              alt={currentAirportCar.name}
                              className="w-10 h-6 object-contain"
                            />
                            <div className="flex flex-col leading-tight">
                              <span className="text-xs font-bold text-gray-900">{currentAirportCar.name}</span>
                              <span className="text-[11px] text-gray-500 font-medium">{currentAirportCar.seats}</span>
                            </div>
                          </div>
                        ) : (
                          <span className="text-xs sm:text-sm text-gray-400 font-medium">
                            {t.selectCarType}
                          </span>
                        )}
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${airportCarDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {airportCarDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-50">
                          {carOptions.map((car) => (
                            <div
                              key={car.id}
                              onClick={() => {
                                setAirportCarId(car.id)
                                setAirportCarDropdownOpen(false)
                              }}
                              className={`flex items-center gap-3 px-3.5 py-2 hover:bg-blue-50 cursor-pointer transition-colors ${
                                airportCarId === car.id ? 'bg-blue-50/70' : ''
                              }`}
                            >
                              <img src={car.image} alt={car.name} className="w-8 h-5 object-contain" />
                              <div className="flex flex-col leading-tight">
                                <span className="text-xs font-bold text-gray-900">{car.name}</span>
                                <span className="text-[11px] text-gray-500 font-medium">{car.seats}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* 2. From Airport: Pickup Airport | From Home: Pickup Location */}
                    {airportTripType === 'from-airport' ? (
                      <div className="py-3 md:py-0 md:px-6 flex flex-col justify-center">
                        <label className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-1.5 mb-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                          <span className={language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""}>
                            {t.pickupAirport}
                          </span>
                          <span className="text-red-500 font-bold">*</span>
                        </label>
                        <div className="relative">
                          <select
                            value={selectedPickupAirport}
                            onChange={(e) => setSelectedPickupAirport(e.target.value)}
                            className="w-full bg-transparent text-xs sm:text-sm text-gray-700 py-1 pr-6 focus:outline-none cursor-pointer appearance-none font-medium"
                          >
                            <option value="">
                              {t.selectAirport}
                            </option>
                            {airportOptions.map((airport) => (
                              <option key={airport} value={airport}>
                                {airport}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="w-4 h-4 text-gray-400 absolute right-0 top-1.5 pointer-events-none" />
                        </div>
                      </div>
                    ) : (
                      <div className="py-3 md:py-0 md:px-6 flex flex-col justify-center">
                        <label className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-1.5 mb-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                          <span className={language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""}>
                            {t.pickupLocation}
                          </span>
                          <span className="text-red-500 font-bold">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder={t.enterPickup}
                          className={`w-full bg-transparent text-xs sm:text-sm text-gray-700 py-1 focus:outline-none placeholder-gray-400 font-medium ${
                            language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""
                          }`}
                        />
                      </div>
                    )}

                    {/* 3. From Airport: Drop-off Location | From Home: Drop-off Airport */}
                    {airportTripType === 'from-airport' ? (
                      <div className="py-3 md:py-0 md:px-6 flex flex-col justify-center">
                        <label className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-1.5 mb-2">
                          <MapPin className="w-4 h-4 text-blue-600" />
                          <span className={language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""}>
                            {t.dropoffLocation}
                          </span>
                          <span className="text-red-500 font-bold">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder={t.enterDropoff}
                          className={`w-full bg-transparent text-xs sm:text-sm text-gray-700 py-1 focus:outline-none placeholder-gray-400 font-medium ${
                            language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""
                          }`}
                        />
                      </div>
                    ) : (
                      <div className="py-3 md:py-0 md:px-6 flex flex-col justify-center">
                        <label className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-1.5 mb-2">
                          <MapPin className="w-4 h-4 text-blue-600" />
                          <span className={language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""}>
                            {t.dropoffAirport}
                          </span>
                          <span className="text-red-500 font-bold">*</span>
                        </label>
                        <div className="relative">
                          <select
                            value={selectedDropoffAirport}
                            onChange={(e) => setSelectedDropoffAirport(e.target.value)}
                            className="w-full bg-transparent text-xs sm:text-sm text-gray-700 py-1 pr-6 focus:outline-none cursor-pointer appearance-none font-medium"
                          >
                            <option value="">
                              {t.selectAirport}
                            </option>
                            {airportOptions.map((airport) => (
                              <option key={airport} value={airport}>
                                {airport}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="w-4 h-4 text-gray-400 absolute right-0 top-1.5 pointer-events-none" />
                        </div>
                      </div>
                    )}

                    {/* 4. Pickup Date & Time */}
                    <div className="py-3 md:py-0 md:pl-6 flex flex-col justify-center">
                      <label className="text-xs sm:text-sm font-bold text-gray-800 flex items-center gap-1.5 mb-2">
                        <Calendar className="w-4 h-4 text-gray-700" />
                        <span>Pickup Date & Time</span>
                        <span className="text-red-500 font-bold">*</span>
                      </label>
                      <input
                        type="datetime-local"
                        className="w-full bg-transparent text-xs sm:text-sm text-gray-700 py-1 focus:outline-none font-medium cursor-pointer"
                      />
                    </div>

                  </div>

                  {/* Bottom Row */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                      <label
                        onClick={() => setAirportTripType('from-airport')}
                        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm sm:text-base cursor-pointer transition-all ${
                          airportTripType === 'from-airport'
                            ? 'bg-blue-50/90 text-blue-600 font-bold'
                            : 'text-gray-700 hover:text-gray-900 font-medium'
                        }`}
                      >
                        <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          airportTripType === 'from-airport' ? 'border-blue-600' : 'border-gray-400'
                        }`}>
                          {airportTripType === 'from-airport' && <span className="w-2 h-2 rounded-full bg-blue-600" />}
                        </span>
                        <span className={language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""}>
                          {t.fromAirport}
                        </span>
                      </label>

                      <label
                        onClick={() => setAirportTripType('from-home')}
                        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm sm:text-base cursor-pointer transition-all ${
                          airportTripType === 'from-home'
                            ? 'bg-blue-50/90 text-blue-600 font-bold'
                            : 'text-gray-700 hover:text-gray-900 font-medium'
                        }`}
                      >
                        <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          airportTripType === 'from-home' ? 'border-blue-600' : 'border-gray-400'
                        }`}>
                          {airportTripType === 'from-home' && <span className="w-2 h-2 rounded-full bg-blue-600" />}
                        </span>
                        <span className={language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""}>
                          {t.fromHome}
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3 bg-[#0d59fc] hover:bg-blue-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm transition-all cursor-pointer"
                    >
                      <span className={language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""}>
                        {t.continueBtn}
                      </span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>
        </div>
      </div>

      {/* 2. Royal Blue Stats Section */}
      <div className="happy-client-wrap-inside bg-[#0052fe] text-white pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-24 md:pb-28 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="happy-client-wrap flex flex-col gap-6 lg:gap-10">
            
            {/* Title (Left) */}
            <div className="max-w-4xl xl:max-w-5xl">
              <h2 className={`title-hcw text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-extrabold text-white leading-tight tracking-tight ${
                language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""
              }`}>
                {language === 'bn' ? (
                  <span className="lg:whitespace-nowrap">শহরের ভেতরে কিংবা বাইরে, সারা বাংলাদেশজুড়ে</span>
                ) : (
                  <>
                    From Everyday Rides to Meaningful <br className="hidden sm:inline" />
                    Journeys
                  </>
                )}
              </h2>
            </div>

            {/* 4 Animated Counter Stats (Right-aligned, single row on desktop) */}
            <div ref={statsRef} className="happy-client-count-wrap flex justify-start lg:justify-end pb-2">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-14">
                {t.stats.map((stat, idx) => (
                  <div key={stat.id} className="flex flex-col min-w-[120px] max-w-[170px]">
                    <h4 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#fbc02d] tracking-tight mb-1">
                      <span>{counts[idx].toLocaleString()}</span>
                      {stat.suffix}
                    </h4>
                    <span className={`text-white text-xs sm:text-sm font-semibold leading-snug ${
                      language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""
                    }`}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Skyline Line-Art across full width with Infinite Seamless Animation */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-0">
          <div className="animate-skyline-scroll">
            <img
              src={frameImg}
              alt=""
              className="w-[1920px] h-14 sm:h-18 md:h-20 object-cover object-bottom brightness-0 invert opacity-90 select-none shrink-0"
            />
            <img
              src={frameImg}
              alt=""
              className="w-[1920px] h-14 sm:h-18 md:h-20 object-cover object-bottom brightness-0 invert opacity-90 select-none shrink-0"
            />
          </div>
        </div>

        {/* Bottom-Left White Sedan Car Running on the skyline */}
        <div
          ref={carRef}
          className="absolute bottom-1 sm:bottom-1.5 md:bottom-2 left-6 sm:left-12 md:left-20 z-20 pointer-events-none select-none"
        >
          <div className="animate-car-running">
            <img
              src={carImg}
              alt="Garibook Car"
              className="w-36 sm:w-48 md:w-56 h-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)] select-none pointer-events-none opacity-100"
            />
          </div>
        </div>

      </div>

    </section>
  )
}

export default HappyClient

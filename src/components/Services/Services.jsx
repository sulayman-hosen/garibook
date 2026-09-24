import { useState, useEffect } from 'react'
import { ArrowRight, ArrowUp } from 'lucide-react'
import AOS from 'aos'
import intercityImg from '../../assets/intercity_car_rental.png'
import rideshareImg from '../../assets/rideshare.png'
import airportImg from '../../assets/airport_rental.png'
import hourlyImg from '../../assets/hourly_rental.png'
import businessImg from '../../assets/busines.png'
import clubImg from '../../assets/garibook_club.png'
import vmsImg from '../../assets/Frame_1000001473.png'

const servicesData = {
  en: {
    sectionTitle: 'Our Services',
    tabs: [
      { id: 'rides', label: 'Rides' },
      { id: 'business', label: 'Garibook Business' },
      { id: 'club', label: 'Garibook Club' },
      { id: 'vms', label: 'VMS' },
    ],
    ridesTitleLine1: 'Every Ride',
    ridesTitleLine2: 'One Platform',
    rideCards: [
      {
        id: 'intercity',
        title: 'Intercity Car Rental',
        desc: 'Travel between cities with comfort and confidence.',
        image: intercityImg,
      },
      {
        id: 'rideshare',
        title: 'Ride share',
        desc: 'Go anywhere in the city, quickly and easily.',
        image: rideshareImg,
      },
      {
        id: 'airport',
        title: 'Airport Rental',
        desc: "Whether you're flying abroad or returning home, enjoy a comfortable and worry-free airport journey.",
        image: airportImg,
      },
      {
        id: 'hourly',
        title: 'Hourly Rental',
        desc: 'Rent a car by the hour, tailored to your needs.',
        image: hourlyImg,
      },
    ],
    business: {
      titleLine1: 'Modern Car Rentals',
      titleLine2: 'for Business',
      desc: 'Simplify your corporate transportation, ensure on-time team mobility, and gain control with our VMS.',
      btn: 'Learn More',
      image: businessImg,
    },
    club: {
      titleLine1: 'Turn Your Car into',
      titleLine2: 'Earnings with Garibook Club',
      desc: 'Garibook Club is more than just a community. Join a vibrant network of car enthusiasts, all fueled by the same passion: the open road and the thrill of making money doing what they love.',
      btn: 'Learn More',
      image: clubImg,
    },
    vms: {
      titleLine1: 'Vehicle Management',
      titleLine2: 'System - VMS',
      desc: 'Just like Garibook Business makes traveling easy for your team, our Vehicle Management System (VMS) helps you take care of your own cars. VMS is a great tool that works with Garibook Business to make sure your vehicles are used the best way possible.',
      btn: 'Learn More',
      image: vmsImg,
    },
  },
  bn: {
    sectionTitle: 'আমাদের সেবাসমূহ',
    tabs: [
      { id: 'rides', label: 'রাইড' },
      { id: 'business', label: 'গাড়িবুক বিজনেস' },
      { id: 'club', label: 'গাড়িবুক ক্লাব' },
      { id: 'vms', label: 'VMS' },
    ],
    ridesTitleLine1: 'সব রাইড',
    ridesTitleLine2: 'এক প্ল্যাটফর্মেই',
    rideCards: [
      {
        id: 'intercity',
        title: 'ইন্টারসিটি কার রেন্টাল',
        desc: 'বাংলাদেশের যেকোনো প্রান্তে, শহর থেকে শহরে স্বাচ্ছন্দ্যে ও ঝামেলাহীন ভ্রমণ করুন বেস্ট কোয়ালিটির গাড়িতে।',
        image: intercityImg,
      },
      {
        id: 'rideshare',
        title: 'রাইডশেয়ার',
        desc: 'শহরের ভেতরে যেকোনো প্রয়োজনে ভ্রমণ হবে সহজ ও বাধাহীন।',
        image: rideshareImg,
      },
      {
        id: 'airport',
        title: 'এয়ারপোর্ট রেন্টাল',
        desc: 'দেশ থেকে বিদেশে কিংবা বিদেশ থেকে দেশে ফেরার জার্নি হবে আরামের ও নিশ্চিত।',
        image: airportImg,
      },
      {
        id: 'hourly',
        title: 'ঘণ্টায়',
        desc: 'প্রয়োজন অনুযায়ী গাড়ি ভাড়া করুন ঘণ্টা ভিত্তিতে।',
        image: hourlyImg,
      },
    ],
    business: {
      titleLine1: 'ব্যবসার জন্য',
      titleLine2: 'আধুনিক কার রেন্টাল',
      desc: 'আপনার করপোরেট পরিবহন সহজ করুন, সময়মতো টিম মোবিলিটি নিশ্চিত করুন এবং আমাদের VMS দিয়ে সম্পূর্ণ নিয়ন্ত্রণ নিন।',
      btn: 'আরও জানুন',
      image: businessImg,
    },
    club: {
      titleLine1: 'গাড়িবুক ক্লাবের সাথে নিজের গাড়ি থেকে',
      titleLine2: 'আয় করুন',
      desc: 'গাড়িবুক ক্লাব শুধুমাত্র একটি কমিউনিটি নয়। এটি গাড়িপ্রেমীদের এক সক্রিয় নেটওয়ার্ক, যেখানে ভ্রমণের আনন্দের পাশাপাশি রয়েছে উপার্জনের সুযোগ।',
      btn: 'আরও জানুন',
      image: clubImg,
    },
    vms: {
      titleLine1: 'ভেহিকেল ম্যানেজমেন্ট',
      titleLine2: 'সিস্টেম - VMS',
      desc: 'গাড়িবুক বিজনেস যেমন আপনার দলের যাতায়াত সহজ করে, তেমনি আমাদের VMS আপনার নিজস্ব গাড়িগুলোর সঠিক দেখভাল নিশ্চিত করে।',
      btn: 'আরও জানুন',
      image: vmsImg,
    },
  },
}

const Services = ({ language = 'en' }) => {
  const [activeTab, setActiveTab] = useState('rides')
  const [activeCard, setActiveCard] = useState(0)
  const [hoveredCard, setHoveredCard] = useState(null)
  const t = servicesData[language] || servicesData.en

  const currentCard = hoveredCard !== null ? hoveredCard : activeCard

  // Re-run AOS refresh when tab switches so newly mounted tab content animates smoothly
  useEffect(() => {
    AOS.refresh()
  }, [activeTab])

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10" data-aos="fade-up">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-4 ${
              language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : "font-['Roboto',sans-serif]"
            }`}
          >
            {t.sectionTitle}
          </h2>

          {/* Service Tabs */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3">
            {t.tabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 sm:px-6 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#0052fe] text-white shadow-md shadow-blue-500/20'
                      : 'bg-[#eef0f3] text-gray-800 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  <span className={language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : ""}>
                    {tab.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab 1: Rides Content */}
        {activeTab === 'rides' && (
          <div className="animate-in fade-in duration-300">
            {/* Sub-Heading */}
            <div className="mb-6 sm:mb-8" data-aos="fade-up">
              <h3
                className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight ${
                  language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : "font-['Roboto',sans-serif]"
                }`}
              >
                <span className="block">{t.ridesTitleLine1}</span>
                <span className="block">{t.ridesTitleLine2}</span>
              </h3>
            </div>

            {/* 4 Cards Grid */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              onMouseLeave={() => setHoveredCard(null)}
              data-aos="fade-up"
            >
              {t.rideCards.map((card, index) => {
                const isSelected = currentCard === index
                const isHovered = hoveredCard === index
                return (
                  <div
                    key={card.id}
                    onMouseEnter={() => setHoveredCard(index)}
                    onClick={() => setActiveCard(index)}
                    className={`cursor-pointer rounded-2xl p-6 sm:p-7 flex flex-col justify-start relative overflow-hidden min-h-[260px] h-full select-none transition-colors duration-200 ${
                      isSelected
                        ? 'bg-[#0052ff] text-white shadow-xl shadow-blue-500/20'
                        : 'bg-[#f8faff] hover:bg-[#f0f4ff] text-gray-900'
                    }`}
                  >
                    {/* Icon with white notch tab when highlighted */}
                    <div className="mb-5 -ml-8 sm:-ml-9 overflow-hidden py-1">
                      <div
                        className={`inline-flex items-center pl-8 sm:pl-9 pr-6 py-2.5 rounded-r-2xl transition-transform duration-700 ease-out ${
                          isHovered ? 'translate-x-3' : 'translate-x-0'
                        } ${
                          isSelected ? 'bg-white shadow-sm' : 'bg-transparent'
                        } transition-colors duration-200`}
                      >
                        <img
                          src={card.image}
                          alt={card.title}
                          className={`h-10 sm:h-12 w-auto object-contain pointer-events-none transition-transform duration-700 ease-out ${
                            isHovered ? 'translate-x-4 sm:translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Card Title */}
                    <h4
                      className={`text-lg sm:text-xl font-bold mb-2.5 transition-colors duration-200 ${
                        isSelected ? 'text-white' : 'text-gray-900'
                      } ${language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : "font-['Roboto',sans-serif]"}`}
                    >
                      {card.title}
                    </h4>

                    {/* Card Description */}
                    <p
                      className={`text-xs sm:text-sm leading-relaxed transition-colors duration-200 ${
                        isSelected ? 'text-white/90' : 'text-gray-500'
                      }`}
                    >
                      {card.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Business Content */}
        {activeTab === 'business' && (
          <div className="animate-in fade-in duration-300 pt-2">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6" data-aos="fade-right">
                <h3
                  className={`text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-900 mb-4 leading-tight ${
                    language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : "font-['Roboto',sans-serif]"
                  }`}
                >
                  <span className="block">{t.business.titleLine1}</span>
                  <span className="block">{t.business.titleLine2}</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl mb-8">
                  {t.business.desc}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-xl shadow-blue-500/20 cursor-pointer"
                >
                  <span>{t.business.btn}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="lg:col-span-6" data-aos="fade-left">
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                  <img
                    src={t.business.image}
                    alt={t.business.titleLine1}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Club Content */}
        {activeTab === 'club' && (
          <div className="animate-in fade-in duration-300 pt-2">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6" data-aos="fade-right">
                <h3
                  className={`text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-900 mb-4 leading-tight ${
                    language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : "font-['Roboto',sans-serif]"
                  }`}
                >
                  <span className="block">{t.club.titleLine1}</span>
                  <span className="block">{t.club.titleLine2}</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl mb-8">
                  {t.club.desc}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-xl shadow-blue-500/20 cursor-pointer"
                >
                  <span>{t.club.btn}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="lg:col-span-6" data-aos="fade-left">
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                  <img
                    src={t.club.image}
                    alt={t.club.titleLine1}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: VMS Content */}
        {activeTab === 'vms' && (
          <div className="animate-in fade-in duration-300 pt-2">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6" data-aos="fade-right">
                <h3
                  className={`text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-900 mb-4 leading-tight ${
                    language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : "font-['Roboto',sans-serif]"
                  }`}
                >
                  <span className="block">{t.vms.titleLine1}</span>
                  <span className="block">{t.vms.titleLine2}</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl mb-8">
                  {t.vms.desc}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-xl shadow-blue-500/20 cursor-pointer"
                >
                  <span>{t.vms.btn}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="lg:col-span-6" data-aos="fade-left">
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                  <img
                    src={t.vms.image}
                    alt={t.vms.titleLine1}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default Services

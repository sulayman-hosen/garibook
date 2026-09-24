import { useState, useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'

// Bento Grid Image Assets
import exploreImg from '../../assets/explore.png'
import freedomImg from '../../assets/freedom.png'
import safeTravelImg from '../../assets/safe_travel.png'
import preferredCarImg from '../../assets/prefarred_car.png'
import smoothImg from '../../assets/smooth.png'

const bookingArrivalContent = {
  en: {
    titleLine1: 'From Booking to Arrival It’s',
    titleLine2: 'All in Your Hands',
    btnText: 'Download App',
    link: 'https://onelink.to/gbweb',
  },
  bn: {
    titleLine1: 'বুকিং থেকে শুরু করে পৌঁছে',
    titleLine2: 'যাওয়া পর্যন্ত সবই হবে কয়েক',
    titleLine3: 'ক্লিকে, খুব সহজেই',
    btnText: 'অ্যাপ ডাউনলোড করুন',
    link: 'https://onelink.to/gbweb',
  },
}

const useInView = (threshold = 0.1) => {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin: '0px 0px 50px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}

const revealClass = (inView) =>
  `transition-all duration-[700ms] ease-out ${
    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`

const BookingToArrival = ({ language = 'en' }) => {
  const t = bookingArrivalContent[language] || bookingArrivalContent.en

  const [titleRef, titleIn] = useInView()
  const [btnRef, btnIn] = useInView()
  const [card1Ref, card1In] = useInView()
  const [card2DeskRef, card2DeskIn] = useInView()
  const [card2MobRef, card2MobIn] = useInView()
  const [card3Ref, card3In] = useInView()
  const [card4Ref, card4In] = useInView()
  const [card5Ref, card5In] = useInView()

  return (
    <section id="booking-to-arrival" className="py-14 sm:py-20 lg:py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header: Title and Download App Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 sm:mb-12">
          <div ref={titleRef} className={revealClass(titleIn)}>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.15] text-white">
              {t.titleLine1} <br />
              {t.titleLine2}
              {t.titleLine3 && (
                <>
                  <br /> {t.titleLine3}
                </>
              )}
            </h2>
          </div>

          <a
            ref={btnRef}
            href={t.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${revealClass(btnIn)} w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#1359fa] hover:bg-blue-700 text-white font-bold text-sm sm:text-base rounded-xl hover:scale-105 active:scale-95 shadow-md shadow-blue-500/20 whitespace-nowrap self-start md:self-center cursor-pointer`}
          >
            <span>{t.btnText}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-5 mb-3 sm:gap-y-5 sm:mb-5">

          <div
            ref={card1Ref}
            className={`${revealClass(card1In)} lg:col-span-8 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-[#0d59fc] hover:scale-[1.01] flex items-center justify-center`}
          >
            <img src={exploreImg} alt="Explore Various Ride Services" className="w-full h-auto object-cover" loading="lazy" />
          </div>

   
          <div
            ref={card2DeskRef}
            className={`${revealClass(card2DeskIn)} hidden lg:flex lg:col-span-4 rounded-3xl overflow-hidden shadow-xl bg-white hover:scale-[1.01] items-center justify-center`}
          >
            <img src={freedomImg} alt="Freedom" className="w-full h-auto object-cover" loading="lazy" />
          </div>
        </div>

   
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
      
          <div
            ref={card2MobRef}
            className={`${revealClass(card2MobIn)} lg:hidden rounded-2xl overflow-hidden shadow-xl bg-white hover:scale-[1.01] flex items-center justify-center`}
          >
            <img src={freedomImg} alt="Freedom" className="w-full h-auto object-cover" loading="lazy" />
          </div>


          <div
            ref={card3Ref}
            className={`${revealClass(card3In)} rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-white hover:scale-[1.01] flex items-center justify-center`}
          >
            <img src={safeTravelImg} alt="Safe travel" className="w-full h-auto object-cover" loading="lazy" />
          </div>


          <div
            ref={card4Ref}
            className={`${revealClass(card4In)} rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-white hover:scale-[1.01] flex items-center justify-center`}
          >
            <img src={preferredCarImg} alt="Choose Your Preferred Car" className="w-full h-auto object-cover" loading="lazy" />
          </div>


          <div
            ref={card5Ref}
            className={`${revealClass(card5In)} rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-[#fab800] hover:scale-[1.01] flex items-center justify-center`}
          >
            <img src={smoothImg} alt="Smooth Experience" className="w-full h-auto object-cover" loading="lazy" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default BookingToArrival

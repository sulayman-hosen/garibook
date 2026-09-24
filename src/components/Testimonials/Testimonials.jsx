import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'


import newsCarImg from '../../assets/241205180904_liOX1GKSQy.png'
import chanderGariImg from '../../assets/241204165747_E5W7U2wzVE.png'


import atifImg from '../../assets/passenger_atif.jpg'
import habibImg from '../../assets/passenger_habib.jpg'
import sadiaImg from '../../assets/passenger_sadia.jpg'

const mediaNewsData = {
  en: {
    title: 'We Featured by Top news Platforms',
    readArticle: 'Read Article',
    articles: [
      {
        id: 1,
        image: newsCarImg,
        date: 'December 05, 2024',
        title: 'গাড়িবুক: বাংলাদেশের ইন্টারসিটি ভ্রমণে স্বাধীনতার নতুন পথচলা',
        excerpt: 'বাংলাদেশ ইন্টারসিটি ভ্রমণ সহজ ও সাশ্রয়ী করার লক্ষ্য একটি ব্র্যান্ড উদ্যোগ নিয়ে এসেছে \'গাড়িবুক\'। কোনো কমিশন ছাড়াই ইন্টারসিটি কার রেন্টাল পরিষেবা দেওয়া গাড়িবুক দেশের প্রথম এবং একমাত্র অ্যাপ।',
        publisher: 'prothom-alo',
        publisherName: 'প্রথম আলো',
        link: 'https://www.prothomalo.com',
      },
      {
        id: 2,
        image: chanderGariImg,
        date: 'December 04, 2024',
        title: 'Digital App to offer "Chander Gari"',
        excerpt: 'For the first time in Bangladesh, tourists can now book the iconic Chander Gari through an online platform.',
        publisher: 'dhaka-tribune',
        publisherName: 'Dhaka Tribune',
        link: 'https://www.dhakatribune.com',
      },
      {
        id: 3,
        image: chanderGariImg,
        date: 'December 04, 2024',
        title: 'বাংলাদেশে প্রথমবার \'চান্দের গাড়ি\' গাড়িবুক অ্যাপে',
        excerpt: 'বাংলাদেশ পর্যটকদের জন্য জনপ্রিয় যানবাহন \'চান্দের গাড়ি\' এবার যুক্ত হলো অনলাইন অ্যাপ ভিত্তিক প্ল্যাটফর্মে। গাড়িবুক দেশের প্রথম অ্যাপ হিসেবে পর্যটকদের জন্য এই বিশেষ গাড়িটি বুকিং সুবিধা নিয়ে এলো।',
        publisher: 'kaler-kantho',
        publisherName: 'কালের কণ্ঠ',
        link: 'https://www.kalerkantho.com',
      },
    ],
  },
  bn: {
    title: 'মিডিয়া ফিচারস',
    readArticle: 'Read Article',
    articles: [
      {
        id: 1,
        image: newsCarImg,
        date: 'December 05, 2024',
        title: 'গাড়িবুক: বাংলাদেশের ইন্টারসিটি ভ্রমণে স্বাধীনতার নতুন পথচলা',
        excerpt: 'বাংলাদেশ ইন্টারসিটি ভ্রমণ সহজ ও সাশ্রয়ী করার লক্ষ্য একটি ব্র্যান্ড উদ্যোগ নিয়ে এসেছে \'গাড়িবুক\'। কোনো কমিশন ছাড়াই ইন্টারসিটি কার রেন্টাল পরিষেবা দেওয়া গাড়িবুক দেশের প্রথম এবং একমাত্র অ্যাপ।',
        publisher: 'prothom-alo',
        publisherName: 'প্রথম আলো',
        link: 'https://www.prothomalo.com',
      },
      {
        id: 2,
        image: chanderGariImg,
        date: 'December 04, 2024',
        title: 'Digital App to offer "Chander Gari"',
        excerpt: 'For the first time in Bangladesh, tourists can now book the iconic Chander Gari through an online platform.',
        publisher: 'dhaka-tribune',
        publisherName: 'Dhaka Tribune',
        link: 'https://www.dhakatribune.com',
      },
      {
        id: 3,
        image: chanderGariImg,
        date: 'December 04, 2024',
        title: 'বাংলাদেশে প্রথমবার \'চান্দের গাড়ি\' গাড়িবুক অ্যাপে',
        excerpt: 'বাংলাদেশ পর্যটকদের জন্য জনপ্রিয় যানবাহন \'চান্দের গাড়ি\' এবার যুক্ত হলো অনলাইন অ্যাপ ভিত্তিক প্ল্যাটফর্মে। গাড়িবুক দেশের প্রথম অ্যাপ হিসেবে পর্যটকদের জন্য এই বিশেষ গাড়িটি বুকিং সুবিধা নিয়ে এলো।',
        publisher: 'kaler-kantho',
        publisherName: 'কালের কণ্ঠ',
        link: 'https://www.kalerkantho.com',
      },
    ],
  },
}

const passengerStoriesData = {
  en: {
    title: 'Our Passengers Speak For Us',
    subtitle: 'Our journey was seamless and enjoyable from start to finish. The booking process was straightforward, and the staff were incredibly attentive, ensuring we felt comfortable throughout the trip.',
    videos: [
      { id: 1, thumbnail: atifImg, name: 'Atif Haider', role: 'Banker' },
      { id: 2, thumbnail: habibImg, name: 'Mohammad Habibur Rahman', role: 'Banker' },
      { id: 3, thumbnail: sadiaImg, name: 'Sadia Afrin', role: 'Service Holder' },
    ],
  },
  bn: {
    title: 'প্যাসেঞ্জারের কথা',
    subtitle: 'শুরু থেকে শেষ পর্যন্ত আমাদের যাত্রা ছিল নির্বিঘ্ন ও আনন্দদায়ক। বুকিং প্রক্রিয়াটি ছিল খুবই সহজ, এবং কর্মীরা ছিলেন অত্যন্ত মনোযোগী, যা পুরো ভ্রমণ জুড়ে আমাদের স্বাচ্ছন্দ্য নিশ্চিত করেছিল।',
    videos: [
      { id: 1, thumbnail: atifImg, name: 'Atif Haider', role: 'Banker' },
      { id: 2, thumbnail: habibImg, name: 'Mohammad Habibur Rahman', role: 'Banker' },
      { id: 3, thumbnail: sadiaImg, name: 'Sadia Afrin', role: 'Service Holder' },
    ],
  },
}


const useInfiniteSlider = (length, slidesPerView, { auto = false, intervalMs = 3500 } = {}) => {
  const clones = slidesPerView
  const [index, setIndex] = useState(clones)
  const [transition, setTransition] = useState(true)
  const isResetting = useRef(false)

  const next = () => { setTransition(true); setIndex((i) => i + 1) }
  const prev = () => { setTransition(true); setIndex((i) => i - 1) }

  const handleTransitionEnd = () => {
    if (index >= length + clones) {
      isResetting.current = true
      setTransition(false)
      setIndex(index - length)
    } else if (index < clones) {
      isResetting.current = true
      setTransition(false)
      setIndex(index + length)
    }
  }

  // Re-enable the transition one frame after a silent reset jump.
  useEffect(() => {
    if (!isResetting.current) return
    const raf = requestAnimationFrame(() => {
      setTransition(true)
      isResetting.current = false
    })
    return () => cancelAnimationFrame(raf)
  }, [index])

  useEffect(() => {
    if (!auto) return
    const timer = setInterval(next, intervalMs)
    return () => clearInterval(timer)
  
  }, [auto, intervalMs])

  return { index, next, prev, transition, clones, handleTransitionEnd }
}


const withClones = (items, clones) => [...items.slice(-clones), ...items, ...items.slice(0, clones)]


const useInView = (threshold = 0.15) => {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}

// Shared fade-up classes/style for a staggered card; pass its index for delay.
const revealClass = (inView) =>
  `transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`
const revealStyle = (index = 0) => ({ transitionDelay: `${index * 120}ms` })

const SliderArrows = ({ onPrev, onNext }) => (
  <div className="flex items-center gap-3 shrink-0">
    <button type="button" onClick={onPrev} aria-label="Previous"
      className="w-11 h-11 rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 flex items-center justify-center transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer">
      <ArrowLeft className="w-5 h-5 stroke-[2]" />
    </button>
    <button type="button" onClick={onNext} aria-label="Next"
      className="w-11 h-11 rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 flex items-center justify-center transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer">
      <ArrowRight className="w-5 h-5 stroke-[2]" />
    </button>
  </div>
)

// Publisher Logo component
const PublisherLogo = ({ publisher, name }) => {
  if (publisher === 'prothom-alo') {
    return (
      <div className="flex items-center gap-1.5">
        <svg className="w-5 h-5 text-red-600 fill-current" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m14.14-14.14l-1.41 1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="font-extrabold text-base tracking-tight text-gray-900 font-serif">প্রথম আলো</span>
      </div>
    )
  }
  if (publisher === 'dhaka-tribune') {
    return (
      <div className="flex items-center text-sm font-black tracking-tight">
        <span className="text-gray-950 font-serif">Dhaka</span>
        <span className="text-red-600 font-serif">Tribune</span>
      </div>
    )
  }
  if (publisher === 'kaler-kantho') {
    return <span className="font-black text-base tracking-tighter text-gray-950 font-serif">কালের কণ্ঠ</span>
  }
  return <span className="font-bold text-sm text-gray-700">{name}</span>
}

const NewsCard = ({ item, readArticle, className = '', style }) => (
  <article style={style} className={`layout-three-box-item group flex flex-col justify-between h-full bg-white ${className}`}>
    <div>
      <div className="overflow-hidden rounded-2xl aspect-[16/10] bg-gray-100 mb-3.5">
        <img src={item.image} alt={item.title} loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
      </div>
      <p className="text-xs text-gray-400 font-medium mb-2">{item.date}</p>
      <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
      </h3>
      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">{item.excerpt}</p>
    </div>
    <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
      <PublisherLogo publisher={item.publisher} name={item.publisherName} />
      <a href={item.link} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer group-hover:underline">
        <span>{readArticle}</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </div>
  </article>
)

const PassengerCard = ({ item, className = '', style }) => (
  <div style={style} className={`layout-three-box-item group flex flex-col cursor-pointer ${className}`}>
    <div className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-gray-200 shadow-sm group-hover:shadow-md transition-shadow">
      <img src={item.thumbnail} alt={`${item.name} - Garibook Passenger`} loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
    </div>
    <div className="mt-3.5">
      <h4 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">{item.name}</h4>
      <p className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">{item.role}</p>
    </div>
  </div>
)

// Simple swipe handler factory to avoid repeating touch state per slider
const useSwipe = (onSwipeLeft, onSwipeRight) => {
  const startX = useRef(0)
  return {
    onTouchStart: (e) => { startX.current = e.targetTouches[0].clientX },
    onTouchEnd: (e) => {
      const diff = startX.current - e.changedTouches[0].clientX
      if (diff > 50) onSwipeLeft()
      else if (diff < -50) onSwipeRight()
    },
  }
}


const SliderTrack = ({ slider, items, slidesPerView, renderItem, swipeHandlers }) => (
  <div className="overflow-hidden" {...swipeHandlers}>
    <div
      onTransitionEnd={slider.handleTransitionEnd}
      className="flex"
      style={{
        transform: `translateX(-${slider.index * (100 / slidesPerView)}%)`,
        transition: slider.transition ? 'transform 500ms ease' : 'none',
      }}
    >
      {withClones(items, slider.clones).map((item, idx) => (
        <div key={`${item.id}-${idx}`} className="shrink-0 px-1" style={{ width: `${100 / slidesPerView}%` }}>
          {renderItem(item, idx % slidesPerView)}
        </div>
      ))}
    </div>
  </div>
)

const Testimonials = ({ language = 'en' }) => {
  const news = mediaNewsData[language] || mediaNewsData.en
  const passengers = passengerStoriesData[language] || passengerStoriesData.en


  const newsDesktop = useInfiniteSlider(news.articles.length, 3)
  const newsMobile = useInfiniteSlider(news.articles.length, 1)
  const newsSwipe = useSwipe(newsMobile.next, newsMobile.prev)


  const passengerDesktop = useInfiniteSlider(passengers.videos.length, 3)


  const passengerMobile = useInfiniteSlider(passengers.videos.length, 1, { auto: true, intervalMs: 3500 })


  const [newsRef, newsInView] = useInView()
  const [passengerRef, passengerInView] = useInView()

  return (
    <div className="testimonials-section-group">

      <section className="py-14 sm:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-900 tracking-tight leading-tight max-w-2xl">
              {news.title}
            </h2>
            <SliderArrows onPrev={newsDesktop.prev} onNext={newsDesktop.next} />
          </div>


          <div ref={newsRef} className="hidden md:block">
            <SliderTrack
              slider={newsDesktop}
              items={news.articles}
              slidesPerView={3}
              renderItem={(item, pos) => (
                <NewsCard item={item} readArticle={news.readArticle} className={revealClass(newsInView)} style={revealStyle(pos)} />
              )}
            />
          </div>


          <div className="md:hidden">
            <SliderTrack
              slider={newsMobile}
              items={news.articles}
              slidesPerView={1}
              swipeHandlers={newsSwipe}
              renderItem={(item) => <NewsCard item={item} readArticle={news.readArticle} />}
            />
          </div>

        </div>
      </section>


      <section className="py-14 sm:py-20 bg-[#f4f7fc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-900 tracking-tight leading-tight mb-2.5">
                {passengers.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{passengers.subtitle}</p>
            </div>
   
            <div className="hidden md:flex self-start md:self-auto">
              <SliderArrows onPrev={passengerDesktop.prev} onNext={passengerDesktop.next} />
            </div>
          </div>

   
          <div ref={passengerRef} className="hidden md:block">
            <SliderTrack
              slider={passengerDesktop}
              items={passengers.videos}
              slidesPerView={3}
              renderItem={(item, pos) => <PassengerCard item={item} className={revealClass(passengerInView)} style={revealStyle(pos)} />}
            />
          </div>


          <div className="md:hidden">
            <SliderTrack
              slider={passengerMobile}
              items={passengers.videos}
              slidesPerView={1}
              renderItem={(item) => <PassengerCard item={item} />}
            />
          </div>

        </div>
      </section>
    </div>
  )
}

export default Testimonials

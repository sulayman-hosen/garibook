import { Car, Banknote } from 'lucide-react'
import freedomBanner from '../../assets/garibook_freedom.png'

const SteeringWheelIcon = ({ className = 'w-6 h-6 text-black' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M12 14.5V21" />
    <path d="M4.5 9.5L9.5 11" />
    <path d="M19.5 9.5L14.5 11" />
  </svg>
)

const freedomData = {
  en: {
    title: 'Freedom in Every Journey',
    features: [
      {
        id: 1,
        title: 'Choose the Car',
        desc: 'Pick what suits your comfort.',
        icon: Car,
        iconBg: 'bg-[#0052ff]',
        iconColor: 'text-white',
      },
      {
        id: 2,
        title: 'Choose the Driver',
        desc: 'Based on ratings and reviews.',
        icon: SteeringWheelIcon,
        iconBg: 'bg-[#f59e0b]',
        iconColor: 'text-black',
      },
      {
        id: 3,
        title: 'Choose the Fare',
        desc: 'Select the bid that fits your budget.',
        icon: Banknote,
        iconBg: 'bg-[#10b981]',
        iconColor: 'text-white',
      },
    ],
  },
  bn: {
    titleLine1: 'প্রতি রাইডেই নিশ্চিত হোক চলার',
    titleLine2: 'স্বাধীনতা',
    features: [
      {
        id: 1,
        title: 'গাড়ি নির্বাচন করুন',
        desc: 'আপনার পছন্দ অনুযায়ী নির্বাচন করুন.',
        icon: Car,
        iconBg: 'bg-[#0052ff]',
        iconColor: 'text-white',
      },
      {
        id: 2,
        title: 'স্মার্ট ড্রাইভার নির্বাচন করুন',
        desc: 'রেটিং এবং রিভিউ অনুসারে',
        icon: SteeringWheelIcon,
        iconBg: 'bg-[#f59e0b]',
        iconColor: 'text-black',
      },
      {
        id: 3,
        title: 'ভাড়া নির্বাচন করুন',
        desc: 'আপনার পছন্দের ভাড়ায় ট্রিপ কনফার্ম করুন।',
        icon: Banknote,
        iconBg: 'bg-[#10b981]',
        iconColor: 'text-white',
      },
    ],
  },
}

const Freedom = ({ language = 'en' }) => {
  const t = freedomData[language] || freedomData.en

  return (
    <section id="freedom" className="py-14 sm:py-18 md:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-8 sm:mb-10 md:mb-12" data-aos="fade-up">
          <h2
            className={`text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.25] ${
              language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : "font-['Roboto',sans-serif]"
            }`}
          >
            {language === 'bn' ? (
              <>
                <span className="block">{t.titleLine1}</span>
                <span className="block">{t.titleLine2}</span>
              </>
            ) : (
              <span>{t.title}</span>
            )}
          </h2>
        </div>

        {/* Panoramic Banner Image */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden mb-10 sm:mb-14 shadow-2xl bg-neutral-900 group"
        >
          <img
            src={freedomBanner}
            alt="Freedom in Every Journey"
            className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 lg:gap-10">
          {t.features.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={150 + index * 100}
                className="flex flex-col items-start"
              >
                {/* Circle Icon */}
                <div
                  className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full ${item.iconBg} flex items-center justify-center mb-4 sm:mb-5 shadow-lg shadow-black/40`}
                >
                  <Icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>

                {/* Title */}
                <h3
                  className={`text-lg sm:text-xl font-bold text-white mb-1.5 ${
                    language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : "font-['Roboto',sans-serif]"
                  }`}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Freedom

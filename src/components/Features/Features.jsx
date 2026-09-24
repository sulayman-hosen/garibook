import airportImg from '../../assets/Airport_20Rental_Webp.png'
import familyImg from '../../assets/family_trips.png'
import groupImg from '../../assets/Group_20Tour_Webp.png'

const featuresData = {
  en: {
    titleLine1: 'More Than Miles —',
    titleLine2: 'We Bring People Together',
    cards: [
      {
        id: 1,
        title: 'Airport Rentals',
        image: airportImg,
      },
      {
        id: 2,
        title: 'Family Trips',
        image: familyImg,
      },
      {
        id: 3,
        title: 'Long Tours',
        image: groupImg,
      },
    ],
  },
  bn: {
    titleLine1: 'সারাদেশ জুড়ে —',
    titleLine2: 'আমরা সবাই একসাথে',
    cards: [
      {
        id: 1,
        title: 'এয়ারপোর্ট রেন্টালস',
        image: airportImg,
      },
      {
        id: 2,
        title: 'ফ্যামিলি ট্যুর',
        image: familyImg,
      },
      {
        id: 3,
        title: 'লং ট্যুর',
        image: groupImg,
      },
    ],
  },
}

const Features = ({ language = 'en' }) => {
  const t = featuresData[language] || featuresData.en

  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-8 sm:mb-10 md:mb-12" data-aos="fade-up">
          <h2
            className={`text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#111827] tracking-tight leading-[1.25] ${
              language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : "font-['Roboto',sans-serif]"
            }`}
          >
            <span className="block">{t.titleLine1}</span>
            <span className="block">{t.titleLine2}</span>
          </h2>
        </div>

        {/* 3 Feature Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.cards.map((card, index) => (
            <div
              key={card.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group relative aspect-[483/445] w-full rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-100"
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Subtle top gradient overlay to guarantee text legibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/5 to-transparent pointer-events-none opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Title Overlay Top-Left */}
              <div className="absolute top-6 left-6 sm:top-7 sm:left-7 z-10">
                <h3
                  className={`text-white text-xl sm:text-2xl font-bold tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] ${
                    language === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : "font-['Roboto',sans-serif]"
                  }`}
                >
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

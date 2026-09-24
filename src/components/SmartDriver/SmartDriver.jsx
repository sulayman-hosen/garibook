import { ArrowRight } from 'lucide-react'
import driverImg from '../../assets/no_commission_app_screen.png'

const smartDriverContent = {
  en: {
    sectionTitle: 'Be a Smart Driver',
    title1: '0% Commission',
    title2: '100% Freedom',
    btnText: 'Download Smart Driver App',
    link: 'https://play.google.com/store/apps/details?id=com.garibook.driver',
  },
  bn: {
    sectionTitle: 'স্মার্ট ড্রাইভার হয়ে স্বাধীনভাবে ০% কমিশনে ট্রিপ নিন',
    title1: 'নো কমিশন',
    title2: '১০০% স্বাধীনতা',
    btnText: 'গাড়িবুক স্মার্ট ড্রাইভার অ্যাপ ডাউনলোড করুন',
    link: 'https://play.google.com/store/apps/details?id=com.garibook.driver',
  },
}

const SmartDriver = ({ language = 'en' }) => {
  const t = smartDriverContent[language] || smartDriverContent.en

  return (
    <section
      id="smart-driver"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay="200"
      className="py-12 sm:py-16 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading above Card */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-6 sm:mb-8">
          {t.sectionTitle}
        </h2>

        {/* Yellow Banner Card */}
        <div className="relative bg-[#fab800] rounded-3xl sm:rounded-4xl px-8 sm:px-12 lg:px-16 pt-10 sm:pt-14 pb-0 overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading and Blue Button */}
            <div className="lg:col-span-7 flex flex-col items-start pb-10 lg:pb-14 z-10">
              <h3 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#1359fa] tracking-tight leading-[1.15] mb-8">
                {t.title1} <br />
                {t.title2}
              </h3>

              <a
                href={t.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#1359fa] hover:bg-blue-700 text-white font-bold text-sm sm:text-base rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-xl cursor-pointer"
              >
                <span>{t.btnText}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>

            {/* Right Column: Driver Holding App Phone */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-end relative self-end">
              <img
                src={driverImg}
                alt="Garibook Smart Driver"
                className="w-auto h-[320px] sm:h-[400px] lg:h-[450px] object-contain drop-shadow-xl pointer-events-none"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default SmartDriver

import { ArrowRight } from 'lucide-react'
import appPhoneImg from '../../assets/app-with-logo.0f885eea.png'

const downloadAppContent = {
  en: {
    title1: 'Download',
    title2: 'Garibook Mobile App',
    subtitle: 'Download our Customer, Smart Driver and Enterprise App',
    btnText: 'Download App',
    link: '#',
  },
  bn: {
    title1: 'ডাউনলোড',
    title2: 'গাড়িবুক মোবাইল অ্যাপ',
    subtitle: 'আমাদের প্যাসেঞ্জার, স্মার্ট ড্রাইভার এবং এন্টারপ্রাইজ অ্যাপ ডাউনলোড করুন',
    btnText: 'অ্যাপ ডাউনলোড করুন',
    link: '#',
  },
}

const DownloadApp = ({ language = 'en' }) => {
  const t = downloadAppContent[language] || downloadAppContent.en

  return (
    <section className="download-app-wrapper download-customer-app-image relative py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div className="section-content relative bg-[#1359fa] rounded-3xl sm:rounded-4xl p-8 sm:p-12 lg:pl-16 lg:pr-10 lg:py-16 lg:mt-16 xl:mt-20 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.15] mb-4">
                {t.title1} <br /> {t.title2}
              </h2>

              <p className="text-base sm:text-lg text-white/95 max-w-xl leading-relaxed mb-8">
                {t.subtitle}
              </p>

              <a
                href={t.link}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-warning-btn no-commission-download-button inline-flex items-center gap-3 px-8 py-3.5 bg-[#fdb813] hover:bg-[#ffc107] text-black font-bold text-base rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-2xl cursor-pointer"
              >
                <span className="btn-label">{t.btnText}</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </a>
            </div>
            <div className="flex justify-center lg:hidden mt-2">
              <img
                src={appPhoneImg}
                alt="Garibook Mobile App"
                className="w-auto max-h-[300px] sm:max-h-[360px] object-contain drop-shadow-2xl"
              />
            </div>
            <div className="hidden lg:block lg:col-span-5" />

          </div>
        </div>

        <img
          src={appPhoneImg}
          alt="Garibook Mobile App"
          className="hidden lg:block absolute bottom-0 right-4 xl:right-8 h-[380px] xl:h-[440px] w-auto object-contain drop-shadow-2xl pointer-events-none z-30"
        />

      </div>
    </section>
  )
}

export default DownloadApp

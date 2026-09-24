import { useState, useEffect } from 'react'
import { ArrowUp, MessageSquare } from 'lucide-react'
import englishLogo from '../../assets/Garibook_Logo_White.png'
import banglaLogo from '../../assets/Garibook-Logo-Bangla_White_PNG.png'
import nrbLogo from '../../assets/nrb_no_background.png'
import link3Logo from '../../assets/link3-two.png'
import sslBanner from '../../assets/ssl (1).png'

const footerContent = {
  en: {
    aboutTitle: 'garibook',
    aboutLinks: [
      { label: 'About Us', href: '#about-us' },
      { label: 'Customer Reviews', href: '#reviews' },
      { label: 'Career', href: '#career' },
      { label: 'Newsroom', href: '#newsroom' },
      { label: 'Garibook Map', href: '#map' },
    ],
    servicesTitle: 'Services',
    serviceLinks: [
      { label: 'Intercity Rental', href: '#services' },
      { label: 'Airport Pick and Drop', href: '#services' },
      { label: 'Hourly Rental', href: '#services' },
      { label: 'Vehicle Management System (VMS)', href: '#services' },
    ],
    partnerTitle: 'Become Our Partner',
    partnerLinks: [
      { label: 'Become a Smart Driver', href: '#smart-driver' },
      { label: 'Become a member of Garibook Club', href: '#club' },
      { label: 'Garibook Business for Corporate Travel', href: '#business' },
    ],
    contactTitle: 'Contacts',
    supportEmail: 'support@garibook.com',
    addressLines: [
      'Police Plaza Concord Tower',
      '-01, 13th Floor, Plot-02, Road-',
      '144, Gulshan, Dhaka-1212',
    ],
    phone: '+88 09 678 11 22 33',
    downloadTitle1: 'Download Our',
    downloadTitle2: 'Garibook Mobile App',
    downloadBtn: 'Download App',
    productBy: 'A Product By',
    poweredBy: 'Powered By',
    nrbName: 'NRB Solution Ltd.',
    link3Name: 'Link 3 Technologies',
    visitWebsite: 'Visit Website',
    terms: 'Terms & Conditions',
    privacy: 'Privacy Policy',
    tradeLicenseLabel: 'Trade license number:',
    tradeLicenseNo: 'TRAD/DNCC/013806/2024',
    copyright: '© 2026 Garibook.com',
  },
  bn: {
    aboutTitle: 'গাড়িবুক',
    aboutLinks: [
      { label: 'আমাদের সম্পর্ক', href: '#about-us' },
      { label: 'কাস্টমার রিভিউ', href: '#reviews' },
      { label: 'ক্যারিয়ার', href: '#career' },
      { label: 'নিউজরম', href: '#newsroom' },
      { label: 'গাড়িবুক ম্যাপ', href: '#map' },
    ],
    servicesTitle: 'সেবাসমূহ',
    serviceLinks: [
      { label: 'ইন্টারসিটি রেন্টাল', href: '#services' },
      { label: 'এয়ারপোর্ট পিক এন্ড ড্রপ', href: '#services' },
      { label: 'ঘণ্টায়', href: '#services' },
      { label: 'ভেহিকেল ম্যানেজমেন্ট সিস্টেম(VMS)', href: '#services' },
    ],
    partnerTitle: 'আমাদের পার্টনার নিবন্ধন করুন',
    partnerLinks: [
      { label: 'স্মার্ট ড্রাইভার হিসেবে নিবন্ধন করুন', href: '#smart-driver' },
      { label: 'গাড়িবুক ক্লাবের সদস্য হিসাবে নিবন্ধন করুন', href: '#club' },
      { label: 'কর্পোরেট ট্যুরের জন্য গাড়িবুক বিজনেস', href: '#business' },
    ],
    contactTitle: 'যোগাযোগ',
    supportEmail: 'support@garibook.com',
    addressLines: [
      'পুলিশ প্লাজা কনকর্ড টাওয়ার -০১, ১৩',
      'তলা, প্লট -০২, রোড-১৪৪, গুলশান,',
      'ঢাকা- ১২১২',
    ],
    phone: '+৮৮০৯ ৬৭৮ ১১ ২২ ৩৩',
    downloadTitle1: 'ডাউনলোড করুন',
    downloadTitle2: 'গাড়িবুক মোবাইল অ্যাপ',
    downloadBtn: 'অ্যাপ ডাউনলোড করুন',
    productBy: 'একটি প্রোডাক্ট',
    poweredBy: 'পাওয়ার্ড বাই',
    nrbName: 'NRB Solution Ltd.',
    link3Name: 'Link 3 Technologies',
    visitWebsite: 'Visit Website',
    terms: 'শর্তাবলী',
    privacy: 'গোপনীয়তার নীতি',
    tradeLicenseLabel: 'Trade license number:',
    tradeLicenseNo: 'TRAD/DNCC/013806/2024',
    copyright: '© 2026 Garibook.com',
  },
}

const Footer = ({ language = 'en' }) => {
  const t = footerContent[language] || footerContent.en
  const currentLogo = language === 'en' ? englishLogo : banglaLogo
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-wrapper bg-black text-gray-300 pt-16 md:pt-20 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4 Widget Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 md:pb-16">
          
          {/* Column 1: About Garibook */}
          <div>
            <h4 className="text-white font-bold text-base lg:text-lg mb-4 md:mb-5">
              {t.aboutTitle}
            </h4>
            <ul className="space-y-3 text-[16px]">
              {t.aboutLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-bold text-base lg:text-lg mb-4 md:mb-5">
              {t.servicesTitle}
            </h4>
            <ul className="space-y-3 text-[16px]">
              {t.serviceLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Become Partner */}
          <div>
            <h4 className="text-white font-bold text-base lg:text-lg mb-4 md:mb-5">
              {t.partnerTitle}
            </h4>
            <ul className="space-y-3 text-[16px]">
              {t.partnerLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contacts */}
          <div>
            <h4 className="text-white font-bold text-base lg:text-lg mb-4 md:mb-5">
              {t.contactTitle}
            </h4>
            <div className="space-y-3.5 text-[16px] text-gray-300">
              <a
                href={`mailto:${t.supportEmail}`}
                className="block hover:text-white transition-colors"
              >
                {t.supportEmail}
              </a>
              <div className="leading-relaxed">
                {t.addressLines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
              <a
                href={`tel:${t.phone.replace(/\s+/g, '')}`}
                className="block hover:text-white transition-colors"
              >
                {t.phone}
              </a>
            </div>
          </div>

        </div>

        {/* Middle Section: App CTA & Corporate Partners */}
        <div className="pt-6 pb-12 md:pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 items-start">
          
          {/* Download App CTA */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl sm:text-[28px] font-bold text-white tracking-tight leading-tight mb-5">
              {t.downloadTitle1}
              <br />
              {t.downloadTitle2}
            </h3>
            <a
              href="https://onelink.to/gbweb"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#1864f7] hover:bg-blue-600 text-white font-semibold text-base rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md shadow-blue-600/30 cursor-pointer"
            >
              <span>{t.downloadBtn}</span>
              <span className="text-lg leading-none font-bold">→</span>
            </a>
          </div>

          {/* A Product By */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-4">
              {t.productBy}
            </h4>
            <div className="flex items-center gap-4">
              <img
                src={nrbLogo}
                alt="NRB Solution Ltd."
                className="h-10 w-auto object-contain flex-shrink-0"
              />
              <div>
                <p className="font-bold text-white text-base leading-tight">
                  {t.nrbName}
                </p>
                <a
                  href="https://nrb-solutions.net/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#f5a623] hover:text-[#fbbf24] hover:underline mt-1"
                >
                  <span>{t.visitWebsite}</span>
                  <span className="leading-none font-bold">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Powered By */}
          <div className="lg:col-span-3">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-4">
              {t.poweredBy}
            </h4>
            <div className="flex items-center gap-4">
              <img
                src={link3Logo}
                alt="Link 3 Technologies"
                className="h-11 w-auto object-contain rounded bg-white p-0.5 flex-shrink-0"
              />
              <div>
                <p className="font-bold text-white text-base leading-tight">
                  {t.link3Name}
                </p>
                <a
                  href="https://link3.net/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#f5a623] hover:text-[#fbbf24] hover:underline mt-1"
                >
                  <span>{t.visitWebsite}</span>
                  <span className="leading-none font-bold">→</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Logo, Policies, Trade License, Copyright with Responsive Mobile Stacking */}
        <div className="border-t border-gray-800/80 pt-8 pb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6 text-sm text-gray-300">
            
            {/* Logo & Policies: Stacks vertically centered on mobile, horizontal on desktop */}
            <div className="flex flex-col md:flex-row items-center gap-2.5 md:gap-8 text-center md:text-left">
              <a href="/" className="inline-flex items-center mb-2 md:mb-0">
                <img
                  src={currentLogo}
                  alt="Garibook"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </a>
              <a
                href="#terms"
                className="text-white md:text-gray-300 hover:text-white transition-colors text-base md:text-sm font-normal"
              >
                {t.terms}
              </a>
              <a
                href="#privacy"
                className="text-white md:text-gray-300 hover:text-white transition-colors text-base md:text-sm font-normal"
              >
                {t.privacy}
              </a>
            </div>

            {/* Trade License: Centered on mobile, left-aligned on desktop */}
            <div className="text-center md:text-left text-sm md:text-xs lg:text-sm text-gray-300 leading-snug my-2 md:my-0">
              <p>{t.tradeLicenseLabel}</p>
              <p>{t.tradeLicenseNo}</p>
            </div>

            {/* Copyright: Centered on mobile, right-aligned on desktop */}
            <div className="text-center md:text-right text-sm md:text-xs lg:text-sm text-gray-300">
              <p>{t.copyright}</p>
            </div>

          </div>
        </div>

      </div>

      {/* Full-width Edge-to-Edge Payment Strip */}
      <div className="w-full bg-white py-1 md:py-2 border-t border-gray-200 overflow-x-auto scrollbar-none">
        <img
          src={sslBanner}
          alt="Pay With - Payment Methods"
          className="w-full min-w-[750px] md:min-w-full h-8 sm:h-9 md:h-auto block"
        />
      </div>

      {/* Floating Action Buttons: Scroll to Top & Live Chat */}
      <div className="fixed bottom-12 md:bottom-6 right-4 md:right-6 z-50 flex flex-col items-center gap-2.5">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-lg bg-[#1864f7] hover:bg-blue-600 text-white flex items-center justify-center shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </button>
        )}
        
        <a
          href="https://m.me/garibook"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Garibook"
          className="w-12 h-12 rounded-full bg-[#1864f7] hover:bg-blue-600 text-white flex items-center justify-center shadow-xl transition-all duration-200 transform hover:scale-105 cursor-pointer"
        >
          <MessageSquare className="w-6 h-6 fill-white stroke-none" />
        </a>
      </div>
    </footer>
  )
}

export default Footer

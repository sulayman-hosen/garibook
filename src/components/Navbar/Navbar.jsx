import { useState, useRef } from 'react'
import { Languages, Menu, X } from 'lucide-react'
import englishLogo from '../../assets/gaibook-logo.png'
import banglaLogo from '../../assets/Garibook-Logo-Bangla_PNG.png'
import logoVector from '../../assets/logo-vector.png'

const navData = {
  en: [
    { id: 'about', label: 'About Us', href: '#about-us' },
    { id: 'earn', label: 'Earn With Garibook', href: '#smart-driver' },
    { id: 'business', label: 'Garibook Business', href: '#services' },
    { id: 'club', label: 'Garibook Club', href: '#services' },
    { id: 'campaign', label: 'Campaign', href: '#features' },
    { id: 'blogs', label: 'Blogs', href: '#blogs' },
  ],
  bn: [
    { id: 'about', label: 'আমাদের সম্পর্কে', href: '#about-us' },
    { id: 'earn', label: 'গাড়িবুক এ আয় করুন', href: '#smart-driver' },
    { id: 'business', label: 'গাড়িবুক বিজনেস', href: '#services' },
    { id: 'club', label: 'গাড়িবুক ক্লাব', href: '#services' },
    { id: 'campaign', label: 'ক্যাম্পেইন', href: '#features' },
    { id: 'blogs', label: 'ব্লগস', href: '#blogs' },
  ],
}

const Navbar = ({ language: propLanguage, setLanguage: propSetLanguage }) => {
  const [internalLanguage, setInternalLanguage] = useState('en')
  const language = propLanguage || internalLanguage
  const setLanguage = propSetLanguage || setInternalLanguage

  const [hoveredId, setHoveredId] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const navRef = useRef(null)
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0, opacity: 0 })

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'bn' : 'en'))
    setHoveredId(null)
    setUnderlineStyle(prev => ({ ...prev, opacity: 0 }))
  }

  const currentLinks = navData[language]
  const currentLogo = language === 'en' ? englishLogo : banglaLogo
  const loginText = language === 'en' ? 'login' : 'লগইন'

  const handleMouseEnter = (e, id) => {
    setHoveredId(id)
    const link = e.currentTarget
    const container = navRef.current
    if (link && container) {
      const linkRect = link.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      setUnderlineStyle({
        left: linkRect.left - containerRect.left,
        width: linkRect.width,
        opacity: 1,
      })
    }
  }

  const handleMouseLeave = () => {
    setHoveredId(null)
    setUnderlineStyle(prev => ({ ...prev, opacity: 0 }))
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-xs border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          
          {/* Logo (Switches between English and Bangla) */}
          <a href="/" className="flex items-center">
            <img
              src={currentLogo}
              alt="Garibook"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation Links with Moving Underline on Hover */}
          <div
            ref={navRef}
            onMouseLeave={handleMouseLeave}
            className="hidden lg:flex items-center gap-6 xl:gap-8 relative py-2"
          >
            {currentLinks.map((item) => {
              const isHovered = hoveredId === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onMouseEnter={(e) => handleMouseEnter(e, item.id)}
                  className={`relative py-1 text-base font-medium transition-colors duration-200 cursor-pointer ${
                    isHovered
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-800 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}

            {/* Smooth Moving Underline Bar - Only visible on hover */}
            <span
              className="absolute bottom-0 h-[2.5px] bg-blue-600 rounded-full transition-all duration-300 ease-out pointer-events-none"
              style={{
                transform: `translateX(${underlineStyle.left}px)`,
                width: `${underlineStyle.width}px`,
                opacity: underlineStyle.opacity,
              }}
            />
          </div>

          {/* Desktop Right Action: Language Switcher + Login */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              type="button"
              className="flex items-center gap-1.5 text-base font-medium text-gray-700 hover:text-blue-600 px-3 py-1.5 rounded-lg border border-gray-200 transition-colors"
              title="Toggle Language"
            >
              <Languages className="w-4 h-4 text-blue-600" />
              <span>{language === 'en' ? 'বাংলা' : 'English'}</span>
            </button>

            <a
              href="#login"
              className="bg-[#0d6efd] hover:bg-blue-700 text-white text-base font-medium px-6 py-2 rounded-[8px] transition-colors shadow-sm"
            >
              {loginText}
            </a>
          </div>

          {/* Mobile Right Controls: Login Button + Hamburger Menu */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="#login"
              className="bg-[#0d6efd] hover:bg-blue-700 text-white text-base font-medium px-4 py-1.5 rounded-[8px] transition-colors shadow-sm"
            >
              {loginText}
            </a>

            <button
              onClick={() => setIsOpen(true)}
              type="button"
              aria-label="Open menu"
              className="p-1.5 text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              <Menu className="w-6 h-6 stroke-[2.2]" />
            </button>
          </div>

        </div>
      </div>

      {/* Full-Screen Blue Mobile Menu (Matching Image 4) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#0d59fc] flex flex-col justify-between p-6 lg:hidden animate-in fade-in duration-200">
          
          {/* Top Bar: Language Toggle + Close Icon */}
          <div className="flex items-center justify-end gap-5 pt-2">
            <button
              onClick={toggleLanguage}
              type="button"
              className="flex items-center gap-2 text-base font-medium text-white hover:opacity-90"
            >
              <Languages className="w-5 h-5 text-white" />
              <span>{language === 'en' ? 'English' : 'বাংলা'}</span>
            </button>

            <button
              onClick={() => setIsOpen(false)}
              type="button"
              aria-label="Close menu"
              className="text-white hover:opacity-80 p-1"
            >
              <X className="w-7 h-7 stroke-[2.2]" />
            </button>
          </div>

          {/* Centered Navigation Links */}
          <div className="flex flex-col items-center justify-center gap-6 py-12 flex-1 relative z-10">
            {currentLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-base font-medium hover:opacity-80 transition-opacity text-center"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Watermark Vector Graphic at Bottom */}
          <div className="relative pointer-events-none flex justify-end">
            <img
              src={logoVector}
              alt=""
              className="w-32 h-auto opacity-15 brightness-200 invert"
            />
          </div>

        </div>
      )}
    </nav>
  )
}

export default Navbar
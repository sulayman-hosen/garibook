import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import HappyClient from './components/HappyClient/HappyClient'
import Services from './components/Services/Services'
import Freedom from './components/Freedom/Freedom'
import Features from './components/Features/Features'
import BookingToArrival from './components/BookingToArrival/BookingToArrival'
import SmartDriver from './components/SmartDriver/SmartDriver'
import Testimonials from './components/Testimonials/Testimonials'
import Blog from './components/Blog/Blog'
import DownloadApp from './components/DownloadApp/DownloadApp'
import Footer from './components/Footer/Footer'

const App = () => {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    AOS.init({
      duration: 600,
      delay: 200,
      once: false,
      easing: 'ease-out-cubic',
    })
  }, [])

  useEffect(() => {
    AOS.refresh()
  }, [language])

  return (
    <div className="min-h-screen bg-white text-gray-900 font-['Inter',sans-serif] selection:bg-blue-600 selection:text-white">
      <Navbar language={language} setLanguage={setLanguage} />

      <main>
        <Hero language={language} />
        <HappyClient language={language} />
        <Services language={language} />
        <Freedom language={language} />
        <Features language={language} />
        <BookingToArrival language={language} />
        <SmartDriver language={language} />
        <Testimonials language={language} />
        <Blog language={language} />
        <DownloadApp language={language} />
      </main>
      <Footer language={language} />
    </div>
  )
}

export default App
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";

const typingTexts = {
  en: [
    "Assurance of Effortless Travel",
    "Luxury Trips with Comfort",
    "Your Journey Starts Here",
  ],
  bn: [
    "সহজ ও নিরাপদ ভ্রমণের নিশ্চয়তা",
    "আরামের সাথে লাক্সারি ভ্রমণ",
    "আপনার যাত্রা শুরু এখানেই",
  ],
};

const heroContent = {
  en: {
    subtitle:
      "Choose your city, pick your car and enjoy the journey with Garibook's best drivers.",
    download: "Download App",
  },
  bn: {
    subtitle:
      "বেস্ট কোয়ালিটির গাড়ি এবং ভেরিফাইড ড্রাইভারের সাথে নিরাপদে গন্তব্যে পৌঁছান।",
    download: "অ্যাপ ডাউনলোড করুন",
  },
};

const Hero = ({ language = "en" }) => {
  const t = heroContent[language] || heroContent.en;

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const texts = typingTexts[language] || typingTexts.en;
    const currentText = texts[textIndex % texts.length];
    const speed = isDeleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentText.length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => prev + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, language]);

  /* ========================================================
     🎬 GSAP ANIMATION 1: HERO ENTRANCE FADE-UP ANIMATION
     Animates the main hero title and CTA button on initial page load
     ======================================================== */
  const heroRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Title: Fades up and rises from y: 50 with smooth easing
      gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // 2. Hero Right CTA & Text: Slides up with a slight delay
      gsap.from(".hero-right", {
        y: 40,
        opacity: 0,
        delay: 0.2,
        duration: 1,
      });
    }, heroRef);

    return () => ctx.revert(); // Clean up GSAP animation on unmount
  }, []);

  return (
    <section ref={heroRef} className="relative bg-white pt-32 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-20 lg:px-20">
        {/* HERO TOP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <h1
              className={`hero-title text-4xl sm:text-5xl lg:text-[64px] xl:text-[70px] font-extrabold leading-[1.15] tracking-tight text-gray-950 min-h-[130px] sm:min-h-[160px] ${
                language === "bn"
                  ? "font-['Hind_Siliguri',sans-serif]"
                  : "font-['Roboto',sans-serif]"
              }`}
            >
              {displayText}
              <span className="inline-block w-[3px] sm:w-[4px] h-[40px] sm:h-[55px] bg-blue-600 ml-2 animate-pulse align-middle" />
            </h1>
          </div>

          {/* RIGHT */}
          <div className="hero-right lg:col-span-5 lg:pl-4">
            <p
              className={`text-gray-500 text-base sm:text-lg leading-relaxed max-w-md ${
                language === "bn" ? "font-['Hind_Siliguri',sans-serif]" : ""
              }`}
            >
              {t.subtitle}
            </p>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-3 px-8 py-3.5 bg-[#fbc02d] hover:bg-[#f9a825] text-gray-950 font-bold text-base rounded-[10px] shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>{t.download}</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
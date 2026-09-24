import { ArrowRight } from 'lucide-react'
import blog1Img from '../../assets/6aabc714e2a79.png'
import blog2Img from '../../assets/260920175045_g3UDrxr4bz.png'
import blog3Img from '../../assets/260920175752_kbpbDIIOGX.png'

const blogContent = {
  en: {
    title: 'Beyond Destinations',
    subtitle: 'Discover travel hacks, guides, and inspirations for your next intercity trip with Garibook.',
    viewAll: 'Show All Blogs',
    viewAllLink: '#',
    posts: [
      {
        id: 1,
        image: blog1Img,
        date: 'September 15, 2026',
        title: 'রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহর পরিবহন ব্যবস্থা',
        excerpt: 'রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহর পরিবহন ব্যবস্থা',
        link: '#',
      },
      {
        id: 2,
        image: blog2Img,
        date: 'September 20, 2026',
        title: 'সিলেটের দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা',
        excerpt: 'সিলেটের দর্শনীয় স্থান',
        link: '#',
      },
      {
        id: 3,
        image: blog3Img,
        date: 'September 20, 2026',
        title: 'নওগাঁর দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা',
        excerpt: 'নওগাঁর দর্শনীয় স্থান সমূহ',
        link: '#',
      },
    ],
  },
  bn: {
    title: 'গন্তব্য ছাড়িয়ে...',
    subtitle: 'গাড়িবুক-এই খুঁজে নিন আপনার পরবর্তী ভ্রমণের টিপস এবং গাইড।',
    viewAll: 'সব ব্লগ দেখুন',
    viewAllLink: '#',
    posts: [
      {
        id: 1,
        image: blog1Img,
        date: 'September 15, 2026',
        title: 'রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহর পরিবহন ব্যবস্থা',
        excerpt: 'রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহর পরিবহন ব্যবস্থা',
        link: '#',
      },
      {
        id: 2,
        image: blog2Img,
        date: 'September 20, 2026',
        title: 'সিলেটের দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা',
        excerpt: 'সিলেটের দর্শনীয় স্থান',
        link: '#',
      },
      {
        id: 3,
        image: blog3Img,
        date: 'September 20, 2026',
        title: 'নওগাঁর দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা',
        excerpt: 'নওগাঁর দর্শনীয় স্থান সমূহ',
        link: '#',
      },
    ],
  },
}

const Blog = ({ language = 'en' }) => {
  const t = blogContent[language] || blogContent.en

  return (
    <section
      id="blogs"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay="200"
      className="layout-three-box-wrapper py-12 md:py-16 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {t.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 font-normal max-w-2xl">
              {t.subtitle}
            </p>
          </div>

          <a
            href={t.viewAllLink}
            className="inline-flex items-center gap-1 text-sm sm:text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors group cursor-pointer whitespace-nowrap"
          >
            <span>{t.viewAll}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.posts.map((post) => (
            <article
              key={post.id}
              className="layout-three-box-item group flex flex-col cursor-pointer"
            >
              <a href={post.link} className="block overflow-hidden rounded-2xl aspect-[16/10] bg-gray-100 mb-3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </a>

              <div className="flex flex-col">
                <span className="text-xs text-gray-400 font-medium mb-1.5">
                  {post.date}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug mb-1 line-clamp-2">
                  <a href={post.link}>{post.title}</a>
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 line-clamp-1">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Blog

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollUI from '@/components/layout/ScrollUI'
import Hero from '@/components/sections/Hero'
import Clients from '@/components/sections/Clients'
import Categories from '@/components/sections/Categories'
import Promo from '@/components/sections/Promo'
import Courses from '@/components/sections/Courses'
import Offer from '@/components/sections/Offer'
import Testimonials from '@/components/sections/Testimonials'
import Trending from '@/components/sections/Trending'
import WhyUs from '@/components/sections/WhyUs'

export default function App() {
  return (
    <>
      <ScrollUI />
      <Navbar />
      <main>
        <Hero /><Clients /><Categories /><Promo /><Courses />
        <Offer /><Testimonials /><Trending /><WhyUs />
      </main>
      <Footer />
    </>
  )
}

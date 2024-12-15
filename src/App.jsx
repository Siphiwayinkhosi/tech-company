import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Insights from './components/Insights'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Stats from './components/Stats'

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Insights/>
      <Stats/>
      <Pricing/>
      <Testimonials/>
      <Faq/>
      <Footer/>


    </div>
  )
}
export default App
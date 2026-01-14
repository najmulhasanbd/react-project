import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Features from './Features'
import Services from '../components/Services'
import Counter from '../components/Counter'
import Team from '../components/Team'
import Message from '../components/Message'
import CTA from '../components/CTA'
import Testimonial from '../components/Testimonial'
import Projects from '../components/Projects'
import TexSlider from '../components/TexSlider'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Features />
      <Services />
      <Counter />
      <Team />
      <Message />
      <CTA />
      <Testimonial />
      <Projects />
      <TexSlider />
    </div>
  )
}

export default Home
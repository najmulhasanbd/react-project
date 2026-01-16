import React from 'react'
import PageHeader from '../components/PageHeader'
import About from '../components/About'
import TexSlider from '../components/TexSlider'
import WhoWeAre from '../components/WhoWeAre'
import Team from '../components/Team'
import CTA from '../components/CTA'
import Pricing from '../components/Pricing'

const AboutPage = () => {
  return (
    <>
      <PageHeader title="About Us" subtitle="About Us" />
      <About />
      <TexSlider />
      <WhoWeAre />
      <Team />
      <CTA />
      <Pricing />
    </>
  )
}

export default AboutPage
import React, { useEffect, useState } from 'react'
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
import Faq from '../components/Faq'
import Blog from '../components/Blog'
import HomeSkeleton from '../components/HomeSkeleton'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Header />

      {isLoading ? (
        <HomeSkeleton />
      ) : (
        <main>
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
          <Faq />
          <Blog />
        </main>
      )}
    </div>
  )
}

export default Home
import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Features from './Features'
import Services from '../components/Services'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Features />
      <Services />
    </div>
  )
}

export default Home
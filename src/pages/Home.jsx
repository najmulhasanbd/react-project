import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Features from './Features'
import Services from '../components/Services'
import Counter from '../components/Counter'
import Team from '../components/Team'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Features />
      <Services />
      <Counter />
      <Team />
    </div>
  )
}

export default Home
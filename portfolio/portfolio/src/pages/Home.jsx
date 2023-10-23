import React from 'react'
import Hero from '../component/Hero'
import Skills from '../component/Skills'
import Projects from '../component/Projects'
import Footer from '../component/Footer'
import About from '../component/About'
const Home = () => {
  return (
    <div >
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Footer/>

    </div>
  )
}

export default Home
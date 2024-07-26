import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import Head from 'next/head'
import React from 'react'

type Props = {}

const index = (props: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white  h-screen snap-y snap-mandatory overflow-scroll z-0">
    <Head>
      <title>Palak's Portfolio</title>
    </Head>
    
    {/* Header */}
    <Header />

    {/* Hero */}
    <section id="hero" className="snap-center">
      <Hero />
    </section>

    {/* About */}
    <section id="about" className="snap-start">
      <About />
    </section>

    {/* Work Experience */}
    <section id="experience" className="snap-center">
      <WorkExperience />
    </section>

    {/* Skills */}
    <section id='skills' className='snap-start'>
      <Skills />
    </section>

    <section id="projects" className='snap-start'>
      <Projects />
    </section>

  </div>
  )
}

export default index
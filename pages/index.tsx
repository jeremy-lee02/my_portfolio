import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div className='background text-white snap-y h-screen snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin hover:scrollbar-thumb-[#00000065] scrollbar-thumb-[#0000ff6c] scrollbar-track-[#ffffffa4] scrollbar-thumb-rounded-full scrollbar-corner-white scrollbar-track-rounded-full'>
      <Head>
        <title>Jeremy's Portfolio</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* Projects */}

      {/* Contact */}
    </div>
  )
}

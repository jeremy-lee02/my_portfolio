import { GetStaticProps } from 'next'
import Head from 'next/head'
import { type } from 'os'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { PageInfo, Skill, Project, Social } from '../typing'
import { fetchInfo } from '../utils/fetchInfo'
import { fetchProject } from '../utils/fetchProject'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocial'

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

export default function Home({pageInfo, skills, projects, socials}: Props) {
  return (
    <div className='background text-white snap-y h-screen snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin hover:scrollbar-thumb-[#00000065] scrollbar-thumb-[#0000ff6c] scrollbar-track-[#ffffffa4] scrollbar-thumb-rounded-full scrollbar-corner-white scrollbar-track-rounded-full'>
      <Head>
        <title>Jeremy's Portfolio</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id='home' className='snap-start'>
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
      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      {/* Contact */}
      <section id='contact' className='snap-start'>
        <Contact />
      </section>
    
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ()=>{
  const pageInfo:PageInfo = await fetchInfo();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProject();
  const socials: Social[] = await fetchSocials();

  console.log(pageInfo.name)

  return {
    props:{
      pageInfo,
      skills,
      projects, 
      socials
    }, revalidate: 10,
  }
} 

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
import { sanityClient } from '../sanity'


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
        <Hero pageInfo={pageInfo} socials ={socials} />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About info={pageInfo} />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>

      {/* Contact */}
      <section id='contact' className='snap-start'>
        <Contact info={pageInfo} />
      </section>
    
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ()=>{

  const queryInfo = '*[_type == "pageInfo"][0]'
  const pageInfo: PageInfo = await sanityClient.fetch(queryInfo)

  const querySkills = '*[_type == "skills"]'
  const skills: Skill[] = await sanityClient.fetch(querySkills)


  const queryProject = '*[_type == "projects"]'
  const projects: Project[] = await sanityClient.fetch(queryProject)


  const querySocial = '*[_type == "socials"]'
  const socials: Social[] = await sanityClient.fetch(querySocial)

  return {
    props:{
      pageInfo,
      skills,
      projects, 
      socials
    }, revalidate: 10,
  }
} 

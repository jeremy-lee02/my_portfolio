import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typing'
import { sanityClient } from '../sanity'
import { GetStaticProps } from 'next'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

type Props = {
  projects: Project[]
}


function projects({projects}: Props) {
  return (
    <div className='text-white'>
      <h3 className='uppercase tracking-[20px] text-gray-400 text-2xl text-center pt-10'>Projects</h3>
      <Projects projects={projects} />
    </div>
  )
}

export default projects
export const getStaticProps: GetStaticProps<Props> = async ()=>{

  const queryProject = '*[_type == "projects"]'
  const projects: Project[] = await sanityClient.fetch(queryProject)

  return {
    props:{
      projects, 
    }, revalidate: 10,
  }
} 
import React from 'react'
import { Project } from '../typing'
import { sanityClient } from '../sanity'
import { GetStaticProps } from 'next'
import Projects from '../components/Projects'

type Props = {
  projects: Project[]
}


function projects({projects}: Props) {
  return (
    <div>
      <h3 className='uppercase tracking-[20px] text-white text-2xl text-center pt-10'>Projects</h3>
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
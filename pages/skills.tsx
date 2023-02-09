import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo, Skill, Project, Social } from '../typing'
import { sanityClient } from '../sanity'
import { GetStaticProps } from 'next'
import Skills from '../components/Skills'

type Props = {
  skills: Skill[]
}

function skills({skills}: Props) {
  return (
    <div className='min-h-[879px] text-white'>
      <h3 className='uppercase tracking-[20px] text-gray-400 text-2xl text-center pt-10'>Skills</h3>
      <Skills skills={skills} />
    </div>
  )
}

export default skills

export const getStaticProps: GetStaticProps<Props> = async ()=>{


  const querySkills = '*[_type == "skills"]'
  const skills: Skill[] = await sanityClient.fetch(querySkills)

  return {
    props:{
      skills,
    }, revalidate: 10,
  }
} 
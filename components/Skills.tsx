import React from 'react'
import { motion } from 'framer-motion'
import SkillComponent from './SkillComponent'
import { Skill } from '../typing'
import { urlFor } from '../sanity'

type Props = {
  skills: Skill[]
}

function Skills({skills}: Props) {
  return (
    <motion.div 
    initial = {{
      opacity:0
    }}
    whileInView={{
      opacity:1
    }}
    transition = {{
      duration:1.5
    }}
    className='min-h-screen relative flex flex-col text-center md:text-center xl:flex-col max-w-[2000px] justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>Skills</h3>
        <div className='grid grid-cols-3 gap-[8px] mt-10'>
          {skills?.map(item =>(
           <SkillComponent key={item._id} name= {item.skillName} url={urlFor(item.skillImage).url()}/> 
          ))}

        </div>
    </motion.div>
  )
}

export default Skills
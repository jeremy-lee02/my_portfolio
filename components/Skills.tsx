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
    className='relative flex flex-col text-center md:text-center xl:flex-col max-w-10xl justify-center xl:space-y-0 mx-auto items-center mt-10'>
        <div className='grid grid-cols-3 gap-8 mt-10 md:grid-cols-4'>
          {skills?.map(item =>(
           <SkillComponent key={item._id} name= {item.skillName} url={urlFor(item.skillImage).url()}/> 
          ))}
        </div>
    </motion.div>
  )
}

export default Skills
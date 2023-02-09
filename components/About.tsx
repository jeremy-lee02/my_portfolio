import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typing'
import { urlFor } from '../sanity'

type Props = {
    info: PageInfo
}

function About({info}: Props) {
  return (
    <motion.div 
    initial = {{
        opacity: 0,
    }}
    transition = {{
        duration: 1.2,
    }}
    whileInView = {{
        opacity: 1,
    }}
    className='relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center md:mt-0 mt-8'>
        <motion.img 
        initial = {{
            x: -200,
            opacity: 0.5
        }}
        transition = {{
            duration: 1.2,
            opacity: 0,
        }}
        whileInView = {{
            opacity: 1,
            x: 0
        }}
        src={urlFor(info?.profileImg).url()}
        className='-mb-20 md:mb-0 md:mt-24 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[600px]' />
        <motion.div 
        initial = {{y:-300,
        opacity:0}}
        transition = {{duration: 1.2}}
        whileInView = {{opacity: 1, y:0}}
        viewport = {{once:true}}
        className='space-y-10 px-0 md:px-10 md:mt-7 mt-[100px]'>
            <p className='text-base tracking-[2px]'>{info?.backgroundInfo}</p>
        </motion.div>
    </motion.div>
  )
}

export default About
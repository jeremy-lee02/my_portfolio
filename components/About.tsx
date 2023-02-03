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
    className='min-h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <motion.h3 
            initial = {{
                x: -200,
                opacity: 0

            }}
            transition = {{
                duration: 1.2,
                opacity: 0
            }}
            whileInView = {{
                opacity: 1,
                x: 0
            }}
        className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>About</motion.h3>
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
        className='-mb-20 md:mb-0 md:mt-24 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[700px]' />
        <motion.div 
        initial = {{y:-300,
        opacity:0}}
        transition = {{duration: 1.2}}
        whileInView = {{opacity: 1, y:0}}
        viewport = {{once:true}}
        className='space-y-10 px-0 md:px-10 sm:mt-7'>
            <h4 className='text-4xl tracking-wide font-semibold md:hidden'>Background</h4>
            <p className='text-base tracking-[2px]'>{info?.backgroundInfo}</p>
        </motion.div>
    </motion.div>
  )
}

export default About
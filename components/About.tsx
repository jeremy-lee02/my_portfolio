import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
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
        src='https://cdn.discordapp.com/attachments/864506672259792949/1055931563977736192/321565899_993401265381480_1019542828412345852_n.jpg'
        className='-mb-20 md:mb-0 md:mt-24 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[700px]' />
        <div className='space-y-10 px-0 md:px-10 sm:mt-7'>
            <h4 className='text-4xl tracking-wide font-semibold md:hidden'>Background</h4>
            <p className='text-base tracking-[2px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel praesentium explicabo corrupti ab sequi modi quo dolor 
                officia consequuntur quae, tempore ut iure odio nihil veritatis fuga eaque unde! Cum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel praesentium explicabo corrupti ab sequi modiquo dolor 
                officia consequuntur quae, tempore ut iure odio nihil veritatis fuga eaque unde! Cum!
            </p>
        </div>
    </motion.div>
  )
}

export default About
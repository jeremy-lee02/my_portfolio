import React from 'react'
import { motion } from 'framer-motion'
type Props = {
    name: string;
    url: string
}

function SkillComponent({ name, url}: Props) {
  return (
    <motion.div 
    className='group relative flex cursor-pointer'
    initial = {{
        y: -200,
        opacity: 0
    }}
    transition = {{
        duration: .75,
    }}
    whileInView = {{
        opacity: 1,
        x: 0,
        y: 0
    }}>
        <img
        className = 'rounded-full w-24 h-24 border border-gray-400 xl:w-32 xl:h-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-200 ease-in-out'
        src= {url} />

        <div className='absolute opacity-0 group-hover:opacity-75 group-hover:bg-white transition duration-200 ease-in-out w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-[14px] font-semibold text-black opacity-100'>{name}</p>
            </div>
        </div>
    </motion.div>
  )
}

export default SkillComponent
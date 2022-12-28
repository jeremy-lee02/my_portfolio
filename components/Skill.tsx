import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean
}

function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
        initial = {{
            x: directionLeft? -200: 200,
            opacity: 0
        }}
        transition = {{
            duration: .75,
        }}
        whileInView = {{
            opacity: 1,
            x: 0
        }}
        className = 'rounded-full w-24 h-24 border border-gray-400 xl:w-32 xl:h-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-200 ease-in-out'
        src= 'https://cdn.discordapp.com/attachments/864506672259792949/1057743355490074684/react.png' />

        <div className='absolute opacity-0 group-hover:opacity-75 group-hover:bg-white transition duration-200 ease-in-out w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill
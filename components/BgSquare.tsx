import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BgSquare({}: Props) {
  return (
    <motion.div
    initial={{
      opacity: 0
    }}
    animate={{
      scale:[1,1.5,1,1.5,1],
      opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      borderRadius: ["20%", "30%", "50%", "30%", "20%"]
    }}
    transition={{
      duration: 2.0
    }}
    className='relative flex justify-center items-center'>
      <div className='absolute border border-slate-300 rounded-md h-[250px] w-[600px] mt-52 animate-ping' />
    </motion.div>

  )
}

export default BgSquare
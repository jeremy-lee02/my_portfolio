import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {EnvelopeIcon } from '@heroicons/react/24/solid';

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky p-5 top-0 flex items-start justify-between max-w-7xl z-20 mx-auto xl:items-center'>
        <motion.div
        initial = {{
            x:-500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition = {{
            duration: 1.2,
        }}
         className='flex flex-row items-center pt-3'>
            {/* Links */}
            <Link href={'/'}><button className='navButton'>Home</button></Link>
            <Link href={'/about'}><button className='navButton'>About</button></Link>
            <Link href={'/skills'}><button className='navButton'>Skills</button></Link>
            <Link href={'/projects'}><button className='navButton'>Projects</button></Link>

        </motion.div>
        <motion.div
        initial= {{
            x:500,
            opacity: 0,
            scale: 0.5
        }}
        animate= {{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition = {{
            duration: 1.2,
        }}
        className='flex flex-row gap-3 items-center text-gray-300 cursor-pointer'>
            <Link href={'/contact'}>
                <EnvelopeIcon className='text-gray w-7 h-7 hover:text-white' />
            </Link>
            <Link href={'/contact'}>
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400 hover:text-white'>Send Me An Email</p>
            </Link>
        </motion.div>
    </header>
  )
}

export default Header
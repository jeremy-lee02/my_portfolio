import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {EnvelopeIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

type Props = {}

function Header({}: Props) {
    const router = useRouter()
    const [home, setHome] = useState('')
    const [about, setAbout] = useState('')
    const [skills, setSkills] = useState('')
    const [projects, setProjects] = useState('')
    const [contact, setContact] = useState('')
    
    useEffect(()=>{
        switch (router.asPath.split('/')[1]) {
            case '':
                setHome('text-white')
                setAbout('')
                setSkills('')
                setProjects('')
                setContact('')
                break;
            case 'about':
                setHome('')
                setAbout('text-white')
                setSkills('')
                setProjects('')
                setContact('')
                break;
            case 'skills':
                setHome('')
                setAbout('')
                setSkills('text-white')
                setProjects('')
                setContact('')
                break;
            case 'projects':
                setHome('')
                setAbout('')
                setSkills('')
                setProjects('text-white')
                setContact('')
                break;
            case 'contact':
                setHome('')
                setAbout('')
                setSkills('')
                setProjects('')
                setContact('text-white')
                break;
        }
  
    },[router.asPath])
  return (
    <header className='p-5 top-0 flex items-start justify-between max-w-7xl mx-auto xl:items-center'>
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
            <Link href={'/'}><button className={`navButton ${home}`}>Home</button></Link>
            <Link href={'/about'}><button className={`navButton ${about}`}>About</button></Link>
            <Link href={'/skills'}><button className={`navButton ${skills}`}>Skills</button></Link>
            <Link href={'/projects'}><button className={`navButton ${projects}`}>Projects</button></Link>

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
        className='flex flex-row gap-3 items-center text-gray-300 cursor-pointer pt-4 '>
            <Link href={'/contact'}>
                <EnvelopeIcon className={`text-gray-400 w-5 h-5 ${contact} hover:text-white`} />
            </Link>
            <Link href={'/contact'}>
                <p className={`uppercase hidden md:inline-flex text-sm text-gray-400  ${contact} hover:text-white`}>Send Me An Email</p>
            </Link>
        </motion.div>
    </header>
  )
}

export default Header
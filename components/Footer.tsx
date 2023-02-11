import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon, ClipboardIcon } from '@heroicons/react/24/solid';
import { PageInfo } from '../typing';
import useCopy from '../hook/useCopy';
import { motion } from 'framer-motion';

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
}

type Props = {
    info: PageInfo
}

function Footer({info}: Props) {
    const [value, copy] = useCopy();
  return (
    <motion.footer 
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
    className='flex lg:justify-evenly lg:items-center items-center justify-center text-white text-left mx-auto z-0 py-[30px] px-[32px] flex-wrap'>
        <div className='flex lg:flex-row lg:gap-10 flex-col gap-5 '>
            <div className='flex items-center gap-3 justify-center'>
                <PhoneIcon className='h-7 w-7 animate-pulse text-gray-700' />
                <p className='tracking-[2px]'>{info?.phone}</p>
            </div>
            <div className='flex items-center space-x-5 justify-center '>
                <MapPinIcon className='h-7 w-7 animate-pulse text-gray-700 '  />
                <p className='tracking-[2px]'>{info?.address}</p>
            </div>
            <div className='flex items-center space-x-2 justify-center '>
                <EnvelopeIcon className='h-7 w-7 animate-pulse text-gray-700'  />
                <p className='tracking-[2px]'>{info?.email}</p>
                <ClipboardIcon className='h-4 w-4 cursor-pointer hover:text-white text-gray-700' onClick={()=> copy(info?.email)} />
            </div>
        </div>
    </motion.footer>
  )
}

export default Footer
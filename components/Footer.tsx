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
    className='flex lg:justify-evenly lg:items-center items-start text-white text-left mx-auto z-0 py-[30px]'>
        <div className='flex lg:flex-row lg:gap-10 flex-col gap-5'>
            <div className='flex items-center gap-5 justify-start px-8'>
                <PhoneIcon className='h-7 w-7 animate-pulse text-gray-500' />
                <p className='tracking-[3px]'>{info?.phone}</p>
            </div>
            <div className='flex items-center space-x-5 justify-start px-8'>
                <MapPinIcon className='h-7 w-7 animate-pulse text-gray-500 '  />
                <p className='tracking-[3px]'>{info?.address}</p>
            </div>
            <div className='flex items-center space-x-2 justify-start px-8'>
                <EnvelopeIcon className='h-7 w-7 animate-pulse text-gray-500'  />
                <p className='tracking-[3px]'>{info?.email}</p>
                <ClipboardIcon className='h-4 w-4 cursor-pointer hover:text-white text-gray-500' onClick={()=> copy(info?.email)} />
            </div>
        </div>
    </motion.div>
  )
}

export default Footer
import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon, ClipboardIcon } from '@heroicons/react/24/solid';
import { PageInfo } from '../typing';
import useCopy from '../hook/useCopy';

type Props = {
    info: PageInfo
}

function Contact({info}: Props) {

    const [value, copy] = useCopy();
  return (
    <div className='flex justify-center items-center text-white mx-auto pt-[30px]'>
        <div className='flex flex-col gap-20'>
            <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='md:h-9 md:w-9 h-7 w-7 animate-pulse text-gray-500' />
                <p className='tracking-[3px] md:text-xl'>{info?.phone}</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='md:h-9 md:w-9 h-7 w-7 animate-pulse text-gray-500 '  />
                <p className='tracking-[3px] md:text-xl'>{info?.address}</p>
            </div>
            <div className='flex items-center space-x-2 justify-center'>
                <EnvelopeIcon className='md:h-9 md:w-9 h-7 w-7 animate-pulse text-gray-500'  />
                <p className='tracking-[3px] md:text-xl'>{info?.email}</p>
                <ClipboardIcon className='h-5 w-5 cursor-pointer hover:text-white text-gray-500' onClick={()=> copy(info?.email)} />
            </div>
        </div>
    </div>

  )
}

export default Contact
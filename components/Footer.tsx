import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon, ClipboardIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PageInfo } from '../typing';
import useCopy from '../hook/useCopy';



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
    <div className='flex justify-evenly items-center text-white text-left mx-auto z-0 py-[30px]'>
        <div className='flex md:flex-row md:gap-10 flex-col gap-5'>
            <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='h-7 w-7 animate-pulse text-gray-500' />
                <p className='tracking-[3px]'>{info?.phone}</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='h-7 w-7 animate-pulse text-gray-500 '  />
                <p className='tracking-[3px]'>{info?.address}</p>
            </div>
            <div className='flex items-center space-x-2 justify-center'>
                <EnvelopeIcon className='h-7 w-7 animate-pulse text-gray-500'  />
                <p className='tracking-[3px]'>{info?.email}</p>
                <ClipboardIcon className='h-4 w-4 cursor-pointer hover:text-white text-gray-500' onClick={()=> copy(info?.email)} />
            </div>
        </div>
    </div>
  )
}

export default Footer
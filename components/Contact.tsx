import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon, ClipboardIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PageInfo } from '../typing';


type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
}

type Props = {
    info: PageInfo
}

function Contact({info}: Props) {
    const {register,handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:letrungtin2712@gmail.com?subject=${formData.subject}&body=Hello, my name is ${formData.name}. ${formData.message}`

    }
  return (
    <div className='h-screen relative flex overflow-x-scroll lg:overflow-x-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl text-center'>Contact</h3>
        <div className='flex flex-col space-y-10 absolute top-40'>
            <h4 className='text-4xl font-semibold text-center'>Contact me for any information.</h4>
            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='h-7 w-7 animate-pulse text-gray-400' />
                    <p className='tracking-[3px]'>{info?.phone}</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='h-7 w-7 animate-pulse text-gray-400 '  />
                    <p className='tracking-[3px]'>{info?.address}</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='h-7 w-7 animate-pulse text-gray-400' />
                    <p className='tracking-[3px]'>{info?.email}</p>
                    {/* <ClipboardIcon className='h-4 w-4 cursor-pointer hover:text-white text-gray-400' /> */}
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} className='contactInput' placeholder='Name'  type='text' />
                    <input {...register('email')} className='contactInput' placeholder='Email' type='email' />
                </div>
                <input {...register('subject')} type='text' placeholder='Subject' className='contactInput'/>
                <textarea {...register('message')} className='contactInput' placeholder='Message' />
                <button type='submit' className='bg-[#00d5ff98] py-5 px-10 rounded text-white font-semibold text-lg'>Send Email</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
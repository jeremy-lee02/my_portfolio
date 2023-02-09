import React from 'react'
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
    <div className='flex items-start justify-center mt-24 '>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit'>
            <div className='flex space-x-2'>
                <input {...register('name')} className='contactInput' placeholder='Name'  type='text' />
                <input {...register('email')} className='contactInput' placeholder='Email' type='email' />
            </div>
            <input {...register('subject')} type='text' placeholder='Subject' className='contactInput'/>
            <textarea {...register('message')} className='contactInput' placeholder='Message' />
            <button type='submit' className='bg-[#00d5ff98] py-5 px-10 rounded text-white font-semibold text-lg'>Send Email</button>
        </form>
    </div>
  )
}

export default Contact
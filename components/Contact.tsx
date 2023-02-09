import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { PageInfo } from '../typing';


type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
}

function Contact() {
    const {register,handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:letrungtin2712@gmail.com?subject=${formData.subject}&body=Hello, my name is ${formData.name}. ${formData.message}`

    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 px-6 mt-20'>
        <div className='flex justify-evenly gap-3'>
            <input {...register('name')} className='contactInput w-full' placeholder='Name'  type='text' />
            <input {...register('email')} className='contactInput w-full' placeholder='Email' type='email' />
        </div>
        <input {...register('subject')} type='text' placeholder='Subject' className='contactInput'/>
        <textarea {...register('message')} className='contactInput' placeholder='Message' />
        <button type='submit' className='bg-[#00d5ff98] py-5 rounded text-white font-semibold text-lg'>Send Email</button>
    </form>

  )
}

export default Contact
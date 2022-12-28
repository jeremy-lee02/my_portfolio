import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hello, My name is Le Trung Tin (Jeremy Lee) 🥳",
        "Fresher Developer 💻, Business Analyst 👨‍💼",
        "In Love With Mechanical Keyboards 🤍"],
        loop: true,
        delaySpeed: 1500

    })
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
    className='min-h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <img
            className='relative rounded-full h-40 w-40 mx-auto object-cover'
            src= 'https://cdn.discordapp.com/attachments/864506672259792949/1055911154871967824/321394832_1305281850256003_4876388957952401212_n.jpg' />
        
        <div className='z-20'>
            <h2 className='text-2xl uppercase text-gray-400 tracking-[20px] pb-5'>Jeremy Lee</h2>
            <h1 className='text-4xl lg:text-5xl font-semibold'>
                <span className='tracking-[3px]'>{text}</span>
                <Cursor cursorColor='#FFFFFF' />
            </h1>
            <div className='pt-10 flex justify-center gap-10'>
                <SocialIcon 
                    url='https://www.facebook.com/trungtin.le.7946/' 
                    fgColor='gray'
                    bgColor='transparent' />
                <SocialIcon 
                    url='https://www.instagram.com/tin_jeremy/' 
                    fgColor='gray'
                    bgColor='transparent'/>
                <SocialIcon 
                    url='https://github.com/jeremy-lee02' 
                    fgColor='gray'
                    bgColor='transparent'
                    className='cursor-pointer'/>
            </div>
        </div>
    </motion.div>
  )
}

export default Hero
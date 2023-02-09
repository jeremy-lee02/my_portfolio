import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { PageInfo, Social } from '../typing'
import { urlFor } from '../sanity'

type Props = {
    pageInfo: PageInfo;
    socials: Social[];
}

function Hero({pageInfo, socials}: Props) {
    const [text, count] = useTypewriter({
        words: [`Hello, My name is ${pageInfo?.name} (${pageInfo?.nickName}) 🥳`,
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
    className='flex flex-col space-y-8 text-center overflow-hidden'>
        <img className='relative rounded-full h-40 w-40 mx-auto object-cover'
            src={urlFor(pageInfo?.heroImage).url()} />
        <div className='z-20'>
            <h2 className='text-2xl uppercase text-gray-400 tracking-[20px] pb-5'>{pageInfo?.name}</h2>
            <h1 className='text-4xl lg:text-5xl font-semibold'>
                <span className='tracking-[3px]'>{text}</span>
                <Cursor cursorColor='#FFFFFF' />
            </h1>
            <div className='pt-10 flex justify-center gap-10'>
                {socials?.map(item =>(
                    <SocialIcon 
                    key={item._id}
                    url= {item.url} 
                    fgColor='gray'
                    bgColor='transparent' />
                ))}
            </div>
        </div>
    </motion.div>
  )
}

export default Hero
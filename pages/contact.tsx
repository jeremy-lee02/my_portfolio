import React from 'react'
import Contact from '../components/Contact'
import { PageInfo } from '../typing';
import { GetStaticProps } from 'next'
import { sanityClient } from '../sanity'
import { motion } from 'framer-motion';


type Props = {
  result: PageInfo
}

export default function contact({result}:Props) {
  return (
    <motion.div
      initial = {{
      opacity: 0,
      }}
      transition = {{
      duration: 1.2,
      }}
      whileInView = {{
      opacity: 1,
      }}>
        <h3 className='uppercase tracking-[20px] text-2xl text-center pt-10'>Contact</h3>
        <div className='flex flex-col items-center justify-center md:mt-[100px] mt-[70px] flex-wrap'>
          <Contact info={result} /> 
        </div>
    </motion.div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ()=>{
  const queryInfo = '*[_type == "pageInfo"][0]'
  const result: PageInfo = await sanityClient.fetch(queryInfo)
  return {
    props:{
      result,
    }, revalidate: 10,
  }
} 



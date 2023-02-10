import React from 'react'
import About from '../components/About'
import { motion } from 'framer-motion'
import { PageInfo } from '../typing'
import { sanityClient } from '../sanity'
import { GetStaticProps } from 'next'

type Props = {
    pageInfo: PageInfo;
  }

function about({pageInfo}: Props) {
  return (
    <div>
        <motion.h3 
            initial = {{
                x: -200,
                opacity: 0
            }}
            transition = {{
                duration: 1.2,
                opacity: 0
            }}
            whileInView = {{
                opacity: 1,
                x: 0
            }}
        className='uppercase tracking-[20px] text-gray-400 text-2xl text-center pt-10'>About</motion.h3>
        <About info = {pageInfo} />
    </div>
  )
}

export default about

export const getStaticProps: GetStaticProps<Props> = async ()=>{
    const queryInfo = '*[_type == "pageInfo"][0]'
    const pageInfo: PageInfo = await sanityClient.fetch(queryInfo)

    return {
      props:{
        pageInfo,
      }, revalidate: 10,
    }
}
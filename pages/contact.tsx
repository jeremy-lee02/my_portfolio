import React from 'react'
import Contact from '../components/Contact'
import { PageInfo } from '../typing'
import { sanityClient } from '../sanity'
import { GetStaticProps } from 'next'
type Props = {
  pageInfo: PageInfo;

}



function contact({pageInfo}: Props) {
  return (
    <div className='min-h-[879px] h-screen text-white'>
      <h3 className='pt-10 uppercase tracking-[20px] text-gray-400 text-2xl text-center'>Contact</h3>
      <h4 className='text-4xl font-semibold text-center text-white'>Contact me for any information.</h4>
      <Contact info={pageInfo} />
    </div>
  )
}

export default contact

export const getStaticProps: GetStaticProps<Props> = async ()=>{
  const queryInfo = '*[_type == "pageInfo"][0]'
  const pageInfo: PageInfo = await sanityClient.fetch(queryInfo)
  return {
    props:{
      pageInfo,
    }, revalidate: 10,
  }
} 
import { GetStaticProps } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { PageInfo, Social } from '../typing'
import { sanityClient } from '../sanity'


type Props = {
  pageInfo: PageInfo;
  socials: Social[];
}

export default function Home({pageInfo, socials}: Props) {
  return (
    <div className='min-h-[879px] flex items-center justify-center text-white scrollbar-thin hover:scrollbar-thumb-[#00000065] scrollbar-thumb-[#0000ffb6] scrollbar-track-[#ffffffa4] scrollbar-thumb scrollbar-corner-white scrollbar-track'>
      <Hero pageInfo={pageInfo} socials = {socials} />
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ()=>{

  const queryInfo = '*[_type == "pageInfo"][0]'
  const pageInfo: PageInfo = await sanityClient.fetch(queryInfo)

  const querySocial = '*[_type == "social"]'
  const socials: Social[] = await sanityClient.fetch(querySocial)
  return {
    props:{
      pageInfo,
      socials
    }, revalidate: 10,
  }
} 

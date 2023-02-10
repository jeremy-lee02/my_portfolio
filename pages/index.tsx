import { GetStaticProps } from 'next'
import Hero from '../components/Hero'
import { PageInfo, Social } from '../typing'
import { sanityClient } from '../sanity'


type Props = {
  pageInfo: PageInfo;
  socials: Social[];
}

export default function Home({pageInfo, socials}: Props) {
  return (
    <div className='my-[150px]'>
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

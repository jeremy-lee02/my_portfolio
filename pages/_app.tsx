import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Open_Sans, Roboto_Serif} from '@next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { PageInfo } from '../typing'
import { Toaster } from 'react-hot-toast';
import { sanityClient } from '../sanity'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


const open_sans = Open_Sans({subsets:['latin']})
const roboto_serif= Roboto_Serif({subsets:['latin']})

type Props = AppProps & {
  result: PageInfo
}


export default function App({ Component, pageProps, result }: Props) {
  const [isFooter, setIsFooter] = useState(true);
  const router = useRouter()

  useEffect(()=>{
    if(router.asPath.split('/')[1] === "contact"){
      setIsFooter(false)
    }else{setIsFooter(true)}
  },[router.asPath])
  
  return(
    <div className='background'>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Jeremy's Portfolio</title>
      </Head>
      <Header />
      <main className={`${roboto_serif.className} text-white min-h-screen `}>
        <Toaster />
        <Component {...pageProps} />
      </main>
      {isFooter?<Footer info={result} />: null}
      
    </div>
  ) 
}

App.getInitialProps = async () => {
  const queryInfo = '*[_type == "pageInfo"][0]'
  const result:PageInfo = await sanityClient.fetch(queryInfo)
  return {result}
}

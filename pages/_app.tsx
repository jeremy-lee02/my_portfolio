import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Open_Sans, Roboto_Serif} from '@next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { PageInfo } from '../typing'
import { fetchInfo } from '../utils/fetchInfo'
import toast, { Toaster } from 'react-hot-toast';



const open_sans = Open_Sans({subsets:['latin']})
const roboto_serif= Roboto_Serif({subsets:['latin']})

type Props = AppProps & {
  result: PageInfo
}


export default function App({ Component, pageProps, result }: Props) {
  
  const info = fetchInfo();
  return(
    <div className='background'>
      <Head>
        <title>Jeremy's Portfolio</title>
      </Head>
      <Header />
      <main className={roboto_serif.className}>
        <Toaster />
        <Component {...pageProps} />
      </main>
      <Footer info={result}  />
    </div>
  ) 
}

App.getInitialProps = async () => {
  const result = await fetchInfo();
  return {result}
}

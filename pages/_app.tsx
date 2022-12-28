import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Open_Sans, Roboto_Serif} from '@next/font/google'

const open_sans = Open_Sans({subsets:['latin']})
const roboto_serif= Roboto_Serif({subsets:['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return(
    <main className={roboto_serif.className}>
      <Component {...pageProps} />
    </main>
  ) 
  
}

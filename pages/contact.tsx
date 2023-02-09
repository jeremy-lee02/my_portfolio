import React from 'react'
import Contact from '../components/Contact'


type Props = {
}

const contact = () => {
  return (
    <>
    
    <div className='min-h-[879px] text-white'>
        <h3 className='uppercase tracking-[20px] text-gray-400 text-2xl text-center pt-10'>Contact</h3>
        <h4 className='text-4xl font-semibold text-center text-white mt-6'>Contact me for any information.</h4>
        <Contact /> 
    </div>

    </>
  )
}

export default contact

import React from 'react'

type Props = {}

function Skills({}: Props) {
  return (
    <div className='min-h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>Skills</h3>
    </div>
  )
}

export default Skills
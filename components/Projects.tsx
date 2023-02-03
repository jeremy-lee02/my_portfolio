import React from 'react'
import {motion} from "framer-motion"
import { Project } from '../typing';
import Link from 'next/link';
import { urlFor } from '../sanity';

type Props = {
    projects: Project[]
}

function Projects({projects}: Props) {

  return (
    <motion.div 
    initial = {{opacity:0}}
    whileInView={{opacity:1}}
    transition = {{duration:1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>Projects</h3>
        <div className='relative w-full mt-[200px] sm:mt-0 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin hover:scrollbar-thumb-[#00000065] scrollbar-thumb-[#0000ff6c] scrollbar-track-[#ffffffa4] scrollbar-thumb scrollbar-corner-white scrollbar-track'>
            {projects?.map((project , i) => (
                <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20  pt-0 md:p-44 h-screen'>
                    <img 
                    src= {urlFor(project.skillImage).url()} alt="" width={600} height={375}  />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl overflow-y-scroll lg:overflow-y-hidden'>
                        <h4 className='text-3xl font-semibold text-center'>
                            <span className='underline decoration-[#00d5ff]'>Project {i + 1} of {projects.length}:</span>
                            <Link href={project.url}>
                                <span className='cursor-pointer hover:text-[#00d5ff]'> {project.projectName}</span> 
                            </Link>
                        </h4>
                        <p className='text-[18px]'>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#00d5ff34] left-0 h-[500px] -skew-y-12 ' />
    </motion.div>
  )
}

export default Projects
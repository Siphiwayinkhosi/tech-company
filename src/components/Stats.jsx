import React from 'react'
import { FaChartLine } from 'react-icons/fa'
import {motion} from "framer-motion"

export const Stats = () => {
  const imageVariant ={
    hidden:{opacity:0, x:-80},
    visible:{
        opacity:1,
        x:0,
        transition:{
            delay:0.2,
            duration:0.8,
            ease: "easeInOut",
        },
    },
};



  return (
    <div className='py-20 bg-white/50'>
      <div className='w-4/5 m-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0'>
        <div className='w-full md:w-1/3'>
          <motion.img
           initial="hidden"
           whileInView="visible"
           viewport={{amount:0.5}}
           variants={imageVariant}
          src="/b.png" alt="stats image" className='w-full'/>
          
        </div>
        <div className='md:w-1/2 space-y-8'>
          <h1 className='text-4xl md:text-6xl font-bold'>
            over 20 000
          </h1>
          <p className='md:text-4xl font-bold'>{""} Remote professionals provide essential services to businesses globally, delivering support from any location.
          </p>
          <div className='flex'>
            <div className='space-y-5'>
              <div className='flex items-center space-x-2'>
              <span className='p-3 rounded-full bg-violet-300 text-violet-800'>
                <FaChartLine/>
              </span>
              <h1>Data Validation</h1>
            </div>
            <p>{""}
              Ask your ai powered assistant anything. Your virtual companion is here to help you stay ahead.
            </p>
          </div>
          <div className='space-y-5'>
            <div className='flex items-center space-x-2'>
              <span className='p-3 rounded-full bg-violet-300 text-violet-800'><FaChartLine/>  </span>
                <h1>optimize efficiency</h1>
              
            </div>
            <p>{""}Get assistance for technical or performance-related challenges, all managed remotely.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Stats
import React from 'react'
import {motion} from "framer-motion"

export const Pricing = () => {

  const imageVariant ={
    hidden:{opacity:0, x:-20},
    visible:{
        opacity:1,
        x:0,
        transition:{
          
            duration:0.8,
            ease: "easeInOut",
        },
    },
};


  return (
    <div className='py-20 w-4/5 m-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0'>
      <div className='md:w-1/2 space-y-8'>
        <h1 className='text-4xl md:text-6xl font-bold'>
          Maximize your efficiency with Epic
        </h1>
          <h3 className='text-3xl md:text-5xl font-bold'>E50,99.99
          
          </h3>
        <p className='md:text-2xl leading-8'>{""}
          we offer tailoured virtual services for your business, supporting your team remotely so they can thrive.
        </p>
      </div>
      <div className='w-full md:w-1/3'>
        <motion.img 
        initial="hidden"
        whileInView="visible"
        variants={imageVariant}
        viewport={{amount:0.5}}
        src="50.png"alt="" className='w-full'/>
      </div>
    </div>
  )
}
export default Pricing
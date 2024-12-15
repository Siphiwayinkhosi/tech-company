import React from 'react'
import { IoPlay } from "react-icons/io5"
import { motion } from "framer-motion"

export const Hero = () => {

    const textVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1, x: 0, transition: {
                duration: 0.2,
                ease: "easeInOut",
            },
        },
    };

    const buttonVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1, transition: {
                delay: 0.2,
                duration: 0.8,
            },
        },
    };

    const imageVariant = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1, x: 0, transition: {
                duration: 0.2,
                ease: "easeInOut",
            },
        },
    };

    return (
        <div className='w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0'>
            {/* Text Section */}
            <motion.div
                className='md:w-1/2 space-y-6'
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
            >
                <p>____Innovation Requires Quality</p>
                <h1 className='text-5xl md:text-7xl font-bold'>Being innovators requires courage</h1>
                <p className='md:text-lg'>
                    Understanding the capacity of your professional risk-taking skills can help you get more opportunities, helping you navigate growth.
                </p>
                <div className='flex space-x-5'>
                  
                 
                </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
                className='w-full md:w-1/3'
                variants={imageVariant}
                initial="hidden"
                whileInView="visible"
            >
                <img src="/55.png" alt="Hero Image" className="w-full rounded-3xl" />
            </motion.div>
        </div>
    );
}

export default Hero;

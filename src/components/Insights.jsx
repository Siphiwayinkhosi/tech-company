import React from 'react'
import {motion} from "framer-motion"
import { FaGoogle, FaAssistiveListeningSystems } from "react-icons/fa"; // example icons

export const Insights = () => {
    const InsightData = [
        {
            title: "Productivity Enhancer",
            date: "July 2024",
            icon: FaGoogle, // Replace with the correct icon if available
            description: "Enhances productivity through advanced AI tools.",
        },
        {
            title: "Remote Assistance",
            date: "November 2024",
            icon: FaAssistiveListeningSystems, // Replace with the correct icon if available
            description: "Professional support from teams operating from remote locations.",
        },
    ];
    const cardVariant ={
        hidden:{opacity:0, scale:0.8},
        visible:(i)=>({
            opacity:1,
            scale:1,
            transition:{
                delay:i *0.2,
                duration:0.5,
                ease: "easeInOut",
            },
        }),
    };

    return (
        <div className='w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between space-y-10 md:space-y-0'>
            <div className='md:w-1/3 space-y-4'>
                <motion.h2 
                initial={{opacity:0,y:-50}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.5}}
                className='text-2xl font-bold'>Industry Insights</motion.h2>
                <motion.p
                  initial={{opacity:0,y:-50}}
                  whileInView={{opacity:1,y:0}}
                  transition={{duration:0.5}}
                
                >Siphiwo's tech is one of the most promising technology companies, with sales rising. In the next 5 years, its revenue is estimated to reach around $500 million.</motion.p>
                <div className='flex items-center space-x-4'>
                    <img src="/50.png" alt="insights image" className='w-12 h-12 rounded-full border-4' />
                    <div>
                        <h1 className='font-bold text-lg'>Siphiwayinkhosi Mahlalela</h1>
                        <p className='text-sm text-purple-500'>CEO, Founder</p>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2 flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0'>
                {InsightData.map((insight, index) => (
                    <motion.div
                        className='w-full p-4 border-4 border-white/50 rounded-xl space-y-4'
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{amount:0.5}}
                        variants={cardVariant}
                    >
                        <div className='flex justify-between items-start'>
                            <div className='space-y-2'>
                                <button className='p-3 rounded-full bg-violet-300 text-violet-800'>
                                    <insight.icon size={24} />
                                </button>
                                <h1 className='text-xl font-bold'>{insight.title}</h1>
                                <p className='text-sm text-gray-500'>{insight.date}</p>
                            </div>
                        </div>
                        <p className='text-lg leading-loose'>{insight.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Insights;

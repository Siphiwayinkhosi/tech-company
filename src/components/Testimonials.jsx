import React from 'react';
import { motion } from "framer-motion";

export const Testimonials = () => {
  const testimonialsData = [
    {
      image: "/b.png",
      name: "Sibongiseni Mahlalela",
      position: "Founder",
      feedback: "Their assistance has streamlined our operations, offering technical assistance whenever we needed it.",
    },
    {
      image: "/55.png",
      name: "Siphiwa Mahlalela",
      position: "Operations Manager",
      feedback: "Their assistance has streamlined our operations, offering technical assistance whenever we needed it.",
    },
    {
      image: "/50.png",
      name: "Mark Jobels",
      position: "Operations Manager",
      feedback: "Their assistance has streamlined our operations, offering technical assistance whenever we needed it.",
    },
  ];

  return (
    <div className='py-10 bg-white/50'>
      <div className='w-4/5 m-auto space-y-8'>
        <h1 className='text-center text-lg'>_____Client Reviews</h1>
        <h2 className='text-sm md:text-xl md:font-semibold text-center'>
          Web development (Full stack developer) - Highly enthusiastic and I am dedicated to creating good websites and web applications.
        </h2>
        <div className='grid md:grid-cols-3 gap-4 py-10'>
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true, margin: "-100px" }}
              className='p-5 space-y-5 border border-black rounded-lg flex flex-col items-center'
            >
              <div className='flex items-center space-x-2'>
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='w-16 h-16 rounded-full border-2'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.3, duration: 1 }}
                  viewport={{ once: true }}
                />
                <div>
                  <h1 className='font-bold text-lg'>{testimonial.name}</h1>
                  <p className='text-sm text-gray-400'>{testimonial.position}</p>
                </div>
              </div>
              <motion.p
                className='text-center text-lg'
                whileHover={{ scale: 1.1, color: "#ff8c00" }}
                transition={{ duration: 1 }}
              >
                {testimonial.feedback}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

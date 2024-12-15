import React from 'react';
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      className='py-20'
    >
      <div className='w-4/5 m-auto grid md:grid-cols-4 gap-6 px-4'>
        <div>
          <h1 className='text-xl font-bold mb-2'>About Us</h1>
          <p className='text-gray-400'>
            Tech company is one of the best companies you can rely on in terms of technology
          </p>
        </div>
        <div>
          <h2 className='font-bold mb-2'>Customer Services</h2>
          <ul>
            <li>
              <a href="#" className='text-gray-400 hover:text-white'>Contact Us</a>
            </li>
            <li>
              <a href="#" className='text-gray-400 hover:text-white'>FAQs</a>
            </li>
            <li>
              <a href="#" className='text-gray-400 hover:text-white'>Refunds</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='font-bold mb-2'>Follow Us</h2>
          <ul>
            <li>
              <a href="#" className='text-gray-400 hover:text-white'>Facebook</a>
            </li>
            <li>
              <a href="#" className='text-gray-400 hover:text-white'>Instagram</a>
            </li>
            <li>
              <a href="#" className='text-gray-400 hover:text-white'>YouTube</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Newsletter</h3>
          <p>Enter your email to get the latest news and updates</p>
          <form className='mt-4'>
            <input 
              type="email" 
              placeholder='Your email address' 
              className='p-2 w-full rounded-md text-gray-600 border'
            />
            <button className='mt-2 w-full p-2 bg-stone-800 rounded-md font-semibold text-white'>
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className='text-center text-gray-500 mt-8 text-sm'>
        <p>&copy; {new Date().getFullYear()} Tech. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;

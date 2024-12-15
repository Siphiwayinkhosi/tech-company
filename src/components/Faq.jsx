import React, { useState } from 'react'
const FaqData=[
  {
    question:"what is your return policy for subscription-based services?",
    answer:"as a startup focused on delivering value",
  },
  {
    question:"what is your return policy for subscription-based services?",
    answer:"as a startup focused on delivering value",
  },

  {
    question:"what is your return policy for subscription-based services?",
    answer:"as a startup focused on delivering value",
  },
  {
    question:"what is your return policy for subscription-based services?",
    answer:"as a startup focused on delivering value",
  },
]


export const Faq = () => {
  const [OpenFaq, setOpenFaq]=useState();

  const toggleFaq=(index)=>{
    setOpenFaq(OpenFaq===index? null:index);

  };


  return (
    <div className='w-4/5 m-auto my-20 p-4'>
      <h1 className='text-2xl font-semibold text-gray-600 mb-6'>
        Frequently asked questions

      </h1>
      {FaqData.map((Faq,index)=>(
        <div className='mb-4'>
          <div onClick={()=>toggleFaq(index)} className='flex justify-between items-center
           bg-white/50 px-4 py-3 rounded-lg cursor-pointer'>
        <h2 className='text-lg font-medium text-gray-700'>{Faq.question}</h2>
        <span className='text-xl text-gray-500'>{OpenFaq===index ?"_" :"+"}</span>
        </div>
        <div className={`overflow-hidden transition-all duration-300 ${OpenFaq===index? "max-h-40":"max-h-0"}`}>
          <p className='p-4 text-gray-400'>{Faq.answer}</p>
        </div>
        </div>
      ))}
    </div>
  )
}
export default Faq
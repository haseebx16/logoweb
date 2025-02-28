import React from 'react'
import { font } from './font/font'

const Contact = () => {
  return (
    <div className={`${font.className} flex p-20 text-white w-full flex-col justify-start items-start bg-zinc-900`}>
        <h1 className='text-2xl md:text-5xl mt-12 font-bold'>We're Ready To Listen...</h1>
        <p className='max-w-2xl text-white text-md mt-4 md:text-xl'>Leave your details below or call us on <span className='text-red-600'>+ (512) 387 2951 </span> and let's chat about your business, your goals, and how we can help you grow. No obligation. No cost.</p>
        <form action="submit" className='w-full'>
            <div className='grid md:grid-cols-2 grid-cols-1 mt-12 gap-8'>        
                    <input type='text' placeholder='Your Name' className='w-full p-4 border border-gray-700 bg-zinc-800 text-white rounded-md'/>
                    <input type='text' placeholder='Your Email' className='w-full p-4 border border-gray-700 bg-zinc-800 text-white rounded-md'/>
                    <input type='text' placeholder='Your Phone Number' className='w-full p-4 border border-gray-700 bg-zinc-800 text-white rounded-md'/>
                    <select className='w-full p-4 border border-gray-700 bg-zinc-800 text-white rounded-md'>
                        <option value="" disabled>Select a Service</option>
                        <option value="web_dev">Web Development</option>
                        <option value="marketing">Marketing</option>
                        <option value="seo">SEO Optimization</option>
                        <option value="branding">Branding</option>
                        <option value="consulting">Consulting</option>
                    </select>
                    
                    <div className='col-span-2 w-full'>
                        <textarea placeholder="Your Message" rows="5" className="w-full p-4 border border-gray-700 bg-zinc-800 text-white rounded-md"></textarea>
                    </div>
                    <div className='col-span-2 w-full'>
                        <button className='w-full text-2xl py-4 text-white rounded-md bg-red-600'>
                            Submit
                        </button>
                    </div>
            </div>
        </form>
    </div>
  )
}

export default Contact
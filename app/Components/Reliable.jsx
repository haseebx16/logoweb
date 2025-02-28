import React from 'react'
import { font } from './font/font'

const Reliable = () => {
  return (
    <div className={`${font.className} md:p-20 p-8 overflow-hidden space-y-8 md:space-y-0 md:space-x-8 text-white w-full flex justify-between items-center flex-col md:flex-row bg-zinc-900`}>
        <div>
            <h1 className='font-extrabold max-w-xl text-red-600 text-5xl'>WE ARE RELIABLE BY LEADING BUSINESS VENTURES AND ENTREPRENEURS</h1>
            <p className='max-w-2xl mt-4'>We at Team LogoWeb USA have a wide range of partners who have used our data-driven approaches to digital design and development to support their company goals.</p>
            <p className='max-w-2xl mt-4'>Since they ensure that our respected partners outperform both local and international competitors, our prominent data scientists have won the unshakable trust of our partners. Over time, our “High-Performance Analytical Application” helps businesses expand enormously.</p>
        </div>
        <div>
            <img src='/entrepreneurs.jpg' className='h-80 w-auto'/>
        </div>
    </div>
  )
}

export default Reliable
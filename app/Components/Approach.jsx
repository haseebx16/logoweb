import React from 'react'
import { font } from './font/font'

const Approach = () => {
  return (
    <div className={`${font.className} md:p-20 p-8 overflow-hidden space-y-8 md:space-y-0 md:space-x-8 text-white w-full flex justify-between items-center flex-col md:flex-row bg-zinc-900`}>
            <div>
                <img src='/approach.png' className='h-80 w-auto'/>
            </div>
            <div>
                <h1 className='font-extrabold text-red-600 text-5xl'>Our Approach</h1>
                <p className='max-w-2xl mt-4'>Our firm specializes in building unique websites and provides maintenance and update services. Web developers with experience will build new features, repair newly discovered flaws, and update APIs provided by third parties. Construct a web application that provides solutions to the issues faced by end users and is helpful for your business. The ability to check out in a quick and risk-free manner is essential to the success of any e-commerce application.</p>
            </div>
        </div>
  )
}

export default Approach
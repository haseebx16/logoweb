import React from 'react'
import { font } from './font/font'

const LeadingFirmWeb = () => {
  return (
    <div className={`${font.className} flex flex-col justify-center items-center p-20 bg-background`}>
        <h1 className='md:text-5xl text-center font-extrabold text-white text-3xl'>Why LogoWeb USA is the Leading Web Development Firm</h1>
        <div className='md:flex-row flex mt-8 text-white flex-col md:space-y-0 space-y-8 md:space-x-16'>
            <div className='flex flex-col md:border-l-0 border-l border-l-cyan-300 px-4 md:border-r border-r-cyan-300  md:px-12 whitespace-nowrap'>
                <span className='font-extrabold text-cyan-300 text-3xl'>300+</span>
                <p className='text-xl  border-r-cyan-300'> Projects Done</p>
            </div>    
            <div className='flex flex-col md:border-l-0 border-l border-l-cyan-300 px-4 md:border-r border-r-cyan-300 md:px-12 whitespace-nowrap'>
                <span className='font-extrabold text-cyan-300 text-3xl'>100+</span>
                <p className='text-xl  border-r-cyan-300'> Development Staff</p>
            </div>     
            <div className='flex flex-col md:border-l-0 border-l border-l-cyan-300 px-4 md:border-r border-r-cyan-300 md:px-12 whitespace-nowrap'>
                <span className='font-extrabold text-cyan-300 text-3xl'>250+</span>
                <p className='text-xl  border-r-cyan-300'>Satisfied Clients</p>
            </div> 
            <div className='flex border-l md:border-l-0 border-l-cyan-300 px-4 flex-col'>
                <span className='font-extrabold text-cyan-300 text-3xl'>7+</span>
                <p className='text-xl  border-r-cyan-300'>Years Of Experience</p>
            </div>    
        </div>
    </div>
  )
}

export default LeadingFirmWeb
import React from 'react'
import { font } from './font/font'

const Core = () => {
  return (
    <div className={`${font.className} p-12 flex flex-col space-x-0 space-y-8 md:space-y-0 md:space-x-12 md:flex-row bg-zinc-900 text-white justify-center items-center`}>
        <div className='flex flex-col md:w-[50%]'>
            <h1 className='text-xl max-w-2xl font-bold'>Core Descernments</h1>
            <div className='flex'>
                    <img src='/men-icon.webp' className='h-14 w-14 mt-4 border-2 border-gray-700 p-2 rounded-full'/>
                <div className='flex flex-col'>
                    <h2 className='text-2xl mt-2 ml-4 font-bold'>DISCOVER YOUR BUSINESS POTENTIAL</h2>
                    <p className='mt-2 ml-4'>To maximize the potential of your business, use digital technology and methods.</p>
                </div>
            </div>
            <div className='flex'>
                    <img src='/men-icon.webp' className='h-14 w-14 mt-4 border-2 border-gray-700 p-2 rounded-full'/>
                <div className='flex flex-col'>
                    <h2 className='text-2xl mt-4 ml-4 font-bold'>ENVISION YOUR LONG-TERM SUCCESS</h2>
                    <p className='mt-2 ml-4'>Create an environment where users face no difficulties while navigating using digital innovation.</p>
                </div>
            </div>
            <div className='flex'>
                    <img src='/men-icon.webp' className='h-14 w-14 mt-4 border-2 border-gray-700 p-2 rounded-full'/>
                <div className='flex flex-col'>
                    <h2 className='text-2xl mt-4 ml-4 font-bold'>STRONG DIGITAL FOUNDATIONS FOR YOU</h2>
                    <p className='mt-2 ml-4'>Raise the productivity of your business by collaborating with a responsive web design company.</p>
                </div>
            </div>
        </div>
        <div className='md:w-[50%]'>
            <img src='/core-descernment.png' className='w-full'/>
        </div>
    </div>
  )
}

export default Core
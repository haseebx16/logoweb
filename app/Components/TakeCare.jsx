import React from 'react'
import { font } from './font/font'

const TakeCare = () => {
  return (
    <div className={`${font.className} bg-zinc-900 text-white overflow-hidden flex flex-col items-center justify-center py-20`}>
        <div className='p-20 flex flex-col justify-center items-center'>
            <h1 className='font-extrabold text-center text-2xl md:text-5xl'>To lend expression to our digital brand philosophy, J. Willard Marriott says:</h1>
            <h1 className='font-extrabold text-cyan-500 text-center mt-8 text-3xl md:text-5xl'>“Take care of your people, and they will take care of your partners.”</h1>
        </div>
        <div className='p-12 pt-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-evenly items-center'>
            <div className='bg-zinc-800 w-60 h-60 p-4'>
                <div className='flex flex-col justify-start items-start'>
                    <h1 className='text-zinc-400'>01</h1>
                </div>
                <div className='p-4'>
                    <h1 className='text-3xl text-red-600 font-extrabold'>Outshine With Us</h1>
                    <p className='pt-4 text-xl font-extralight'>With Creative Performance</p>
                </div>
            </div>
            <div className='bg-zinc-800 w-60 h-60 p-4'>
                <div className=' flex flex-col justify-start items-start'>
                    <h1 className='text-zinc-400'>02</h1>
                </div>
                <div className='p-4'>
                    <h1 className='text-3xl text-red-600 font-extrabold'>Gratify Partners</h1>
                    <p className='pt-4 text-xl font-extralight'>With Data-Driven Strats</p>
                </div>
            </div>
            <div className='bg-zinc-800 w-60 h-60 p-4'>
                <div className=' flex flex-col justify-start items-start'>
                    <h1 className='text-zinc-400'>03</h1>
                </div>
                <div className='p-4'>
                    <h1 className='text-3xl text-red-600 font-extrabold'>Regular Upgrade</h1>
                    <p className='pt-4 text-xl font-extralight'>With Newer SOP</p>
                </div>
            </div>
            <div className='bg-zinc-800 w-60 h-60 p-4'>
                <div className=' flex flex-col justify-start items-start'>
                    <h1 className='text-zinc-400'>04</h1>
                </div>
                <div className='p-4'>
                    <h1 className='text-3xl text-red-600 font-extrabold'>Support Peers</h1>
                    <p className='pt-4 text-xl font-extralight'>Through Thick & Thin</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TakeCare
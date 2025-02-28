import React from 'react'
import { font } from './font/font'

const Footer = () => {
  return (
    <>
        <div className={`${font.className} md:p-20 p-8 text-white w-full flex justify-between items-center flex-col md:flex-row bg-zinc-950`}>
            <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 justify-between w-full items-center'>
                <div className='flex flex-col'>
                    <img src='/dmca.webp'/>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-2xl text-center md:text-left font-bold'>Quick Links</h1>
                    <p className='pt-4 text-center md:text-left'>About</p>
                    <p className='pt-1 text-center md:text-left'>Our Work</p>
                    <p className='pt-1 text-center md:text-left'>Contact</p>
                    <p className='pt-1 text-center md:text-left'>Portfolio</p>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-2xl font-bold md:text-left text-center'>Services</h1>
                    <p className='pt-4 md:text-left text-center'>Website Development</p>
                    <p className='pt-1 md:text-left text-center'>Web Applications</p>
                    <p className='pt-1 md:text-left text-center'>Branding</p>
                    <p className='pt-1 md:text-left text-center'>Wordpress</p>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-2xl font-bold md:text-left text-center'>Address</h1>
                    <h1 className='text-lg font-bold md:text-left text-center'>US Office</h1>
                    <p className='md:text-left text-center'>401 Park Avenue South.
                    New York, NY 10016, USA</p>
                    <p className='md:text-left text-center'>+ (512) 387-2951</p>
                    <h1 className='text-lg pt-2 font-bold md:text-left text-center'>Canada Office</h1>
                    <p className='md:text-left text-center'>144 4 Avenue South West Suite 1600,
                    Calgary, AB T2P 3N4, Canada</p>
                </div>
            </div>
        </div>
            <div className={` ${font.className} flex text-white bg-zinc-950 pt-12 p-20 flex-col md:flex-row justify-center items-center md:justify-between`}>
                <p><span>©</span>&nbsp;2025 LogoWeb USA</p>
                <div>
                    <p>Privacy Policy</p>
                </div>
            </div>
    </>
  )
}

export default Footer
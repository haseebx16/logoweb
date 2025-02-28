import React from 'react'
import { font } from './font/font'

const WebSpecial = () => {
  return (
    <div className={`${font.className} flex bg-background flex-col justify-center items-center p-12`}>
            <h1 className='md:text-5xl text-red-600 text-2xl font-bold text-center'>Services We Offer</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 mt-8 gap-8'>
                <div className='p-12 flex hover:bg-white text-white hover:text-black duration-300 flex-col justify-center items-center border-2 border-zinc-600 rounded-sm'>
                    <h1 className='text-red-600 text-center text-3xl'>Responsiveness</h1>
                    <p className='text-center pt-2'>Your brand's exposure may increase by using responsive websites on several platforms.</p>
                </div>
                <div className='p-12 flex hover:bg-white text-white hover:text-black duration-300 flex-col justify-center items-center border-2 border-zinc-600 rounded-sm'>
                    <h1 className='text-red-600 text-3xl'>Unique Design</h1>
                    <p className='text-center pt-2'>We build our online apps in a way that encourages lead conversion.</p>
                </div>
                <div className='p-12 flex hover:bg-white text-white hover:text-black duration-300 flex-col justify-center items-center border-2 border-zinc-600 rounded-sm'>
                    <h1 className='text-red-600 text-center text-3xl'>SEO</h1>
                    <p className='text-center pt-2'>Professionals at LogoWeb USA provide optimized and keyword-rich web apps for our clients.</p>
                </div>
                <div className='p-12 flex hover:bg-white text-white hover:text-black duration-300 flex-col justify-center items-center border-2 border-zinc-600 rounded-sm'>
                    <h1 className='text-red-600 text-center text-3xl'>Security</h1>
                    <p className='text-center pt-2'>Our company develops secure and SSL-certified web applications.</p>
                </div>
                <div className='p-12 flex hover:bg-white text-white hover:text-black duration-300 flex-col justify-center items-center border-2 border-zinc-600 rounded-sm'>
                    <h1 className='text-red-600 text-center text-3xl'>UI/UX</h1>
                    <p className='text-center pt-2'>A captivating user experience should be presented effectively for any online application to benefit your business.</p>
                </div>
                <div className='p-12 flex hover:bg-white text-white hover:text-black duration-300 flex-col justify-center items-center border-2 border-zinc-600 rounded-sm'>
                    <h1 className='text-red-600 text-center text-3xl'>Speed</h1>
                    <p className='text-center pt-2'>Search engine algorithms prefer websites with quick and simple loading times. Thankfully, our web developers have a wide range of skills to increase web performance.</p>
                </div>
            </div>
        </div>
  )
}

export default WebSpecial
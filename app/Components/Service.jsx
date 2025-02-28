import React from 'react'
import { font } from './font/font'

const Service = () => {
  return (
    <div className={`${font.className} flex bg-zinc-900 flex-col justify-center items-center p-12`}>
        <h1 className='md:text-5xl text-white text-2xl font-bold text-center'>Services We Offer</h1>
        <div className='grid md:grid-cols-3 grid-cols-1 mt-8 gap-8'>
            <div className='p-12 flex hover:bg-white text-white hover:text-black duration-300 flex-col justify-center items-center border-2 border-zinc-600 rounded-sm'>
                <h1 className='text-red-600 text-center text-3xl'>Website Development</h1>
                <p className='text-center pt-2'>Online web presence is crucial since it enables companies to interact with billions of web servers. Company websites are essential contact points for lead generation and closing sales.</p>
            </div>
            <div className='p-12 flex hover:bg-white text-white hover:text-black duration-300 flex-col justify-center items-center border-2 border-zinc-600 rounded-sm'>
                <h1 className='text-red-600 text-3xl'>Ecommerce</h1>
                <p className='text-center pt-2'>According to our e-commerce website designers, the foundation of online retail sales is a reliable e-commerce application. LogoWeb USA Experts work diligently to provide your online business with reliable e-commerce solutions.</p>
            </div>
            <div className='p-12 flex hover:bg-white text-white hover:text-black duration-300 flex-col justify-center items-center border-2 border-zinc-600 rounded-sm'>
                <h1 className='text-red-600 text-center text-3xl'>Web Apps</h1>
                <p className='text-center pt-2'>A lack of online apps causes ineffective digital marketing. Experience has taught us that websites are essential for capturing the online or worldwide market.</p>
            </div>
            <div className='p-12 flex hover:bg-white text-white hover:text-black duration-300 flex-col justify-center items-center border-2 border-zinc-600 rounded-sm'>
                <h1 className='text-red-600 text-center text-3xl'>Branding</h1>
                <p className='text-center pt-2'>Businesses must brand themselves as it influences how their target market perceives them, boosting brand image and sales.</p>
            </div>
            <div className='p-12 flex hover:bg-white text-white hover:text-black duration-300 flex-col justify-center items-center border-2 border-zinc-600 rounded-sm'>
                <h1 className='text-red-600 text-center text-3xl'>Animations</h1>
                <p className='text-center pt-2'>We acknowledge and emphasize the value of animated videos. For this reason, customers become interested and purchase goods and services as a result.</p>
            </div>
            <div className='p-12 flex hover:bg-white text-white hover:text-black duration-300 flex-col justify-center items-center border-2 border-zinc-600 rounded-sm'>
                <h1 className='text-red-600 text-center text-3xl'>Mobile Apps</h1>
                <p className='text-center pt-2'>Mobile apps are essential in the world of digital marketing. They support the customer experience, loyalty, and customer journey.</p>
            </div>
        </div>
    </div>  
  )
}

export default Service
import React from 'react'
import { font } from '@/app/Components/font/font'

const EcomSpecial = () => {
  return (
    <div className={`${font.className} flex bg-background flex-col justify-center items-center p-12`}>
            <h1 className='md:text-5xl text-red-600 text-2xl font-bold text-center'>Services</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 mt-8 gap-8'>
                <div className='p-12 flex hover:bg-white text-white hover:text-black duration-300 flex-col justify-center items-center border-2 border-zinc-600 rounded-sm'>
                    <h1 className='text-red-600 text-center text-3xl'>Mobile Compatible</h1>
                    <p className='text-center pt-2'>Make your e-commerce website responsive to mobile, tablet, and desktop devices. Our team creates responsive and user-friendly e-commerce websites for new and existing businesses.</p>
                </div>
                <div className='p-12 flex hover:bg-white text-white hover:text-black duration-300 flex-col justify-center items-center border-2 border-zinc-600 rounded-sm'>
                    <h1 className='text-red-600 text-center text-3xl'>Logistics Integration</h1>
                    <p className='text-center pt-2'>Our e-commerce website enables businesses to connect logistic operations, allowing you to focus on sales rather than integration complexity.</p>
                </div>
                <div className='p-12 flex hover:bg-white text-white hover:text-black duration-300 flex-col justify-center items-center border-2 border-zinc-600 rounded-sm'>
                    <h1 className='text-red-600 text-center text-3xl'>Check-Out Features</h1>
                    <p className='text-center pt-2'>Our team offers convenient check-out alternatives. Our user-friendly and responsive technology makes it simple for your customers to check out.</p>
                </div>
                <div className='p-12 flex hover:bg-white text-white hover:text-black duration-300 flex-col justify-center items-center border-2 border-zinc-600 rounded-sm'>
                    <h1 className='text-red-600 text-center text-3xl'>Payment Gateway</h1>
                    <p className='text-center pt-2'>Our e-commerce website designers use impenetrable payment modules to establish secure payment gateways. Integrate 50+ payment methods to reach the maximum number of clients.</p>
                </div>
                <div className='p-12 flex hover:bg-white text-white hover:text-black duration-300 flex-col justify-center items-center border-2 border-zinc-600 rounded-sm'>
                    <h1 className='text-red-600 text-center text-3xl'>Robust Showcasing</h1>
                    <p className='text-center pt-2'>
                    Convertible and mobile-ready apps are beneficial for our customers to create.</p>
                </div>
                <div className='p-12 flex hover:bg-white text-white hover:text-black duration-300 flex-col justify-center items-center border-2 border-zinc-600 rounded-sm'>
                    <h1 className='text-red-600 text-center text-3xl'>Shopping Cart</h1>
                    <p className='text-center pt-2'>Customers can purchase online swiftly thanks to our shopping cart function, which is supported by the most cutting-edge technology.</p>
                </div>
            </div>
        </div>
  )
}

export default EcomSpecial
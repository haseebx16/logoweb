import React from 'react'
import { font } from '@/app/Components/font/font'

const AppApproach = () => {
  return (
    <div className={`${font.className} md:p-20 p-8 overflow-hidden space-y-8 md:space-y-0 md:space-x-8 text-white w-full flex justify-between items-center flex-col md:flex-row bg-zinc-900`}>
            <div>
                <img src='/approach3.png' className='h-80 w-[100%]'/>
            </div>
            <div>
                <h1 className='font-extrabold text-red-600 text-5xl'>Custom Web Application Development Company</h1>
                <p className='max-w-2xl mt-4'>LogoWeb USA is a custom web application development company specializing in delivering innovative and scalable solutions that meet the unique needs of businesses. Our team of experienced developers leverages the latest technologies to create custom web applications that are secure, reliable, and user-friendly. From concept to deployment, LogoWeb USA works closely with companies to understand their goals and deliver custom web applications that drive business success and provide a competitive edge. With a focus on quality and customer satisfaction, LogoWeb USA is the partner of choice for companies looking to enhance their online presence and streamline their operations.</p>
            </div>
        </div>
  )
}

export default AppApproach
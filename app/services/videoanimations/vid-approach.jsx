import React from 'react'
import { font } from '@/app/Components/font/font'

const EApproach = () => {
  return (
    <div className={`${font.className} md:p-20 p-8 overflow-hidden space-y-8 md:space-y-0 md:space-x-8 text-white w-full flex justify-between items-center flex-col md:flex-row bg-zinc-900`}>
            <div>
                <img src='/approachlogo.png' className='h-auto w-full'/>
            </div>
            <div>
                <h1 className='font-extrabold text-red-600 text-4xl'>
                Corporate Video Production Services</h1>
                <p className='max-w-xl mt-4'>LogoWeb USA offers Corporate Video Production Services that specialize in creating professional and engaging video content for businesses of all sizes. Our team of experienced videographers and editors can work with you to develop a concept, script, and storyboard that effectively communicates your message and resonates with your target audience. We offer comprehensive services, including marketing videos, product demos, employee training videos, and more. Our state-of-the-art equipment and editing software allow us to produce high-quality videos in various formats, including 4K, HD, and 360-degree. Our team is also experienced in animation and motion graphics to add an extra layer of visual interest to the videos. So whether you need a video to promote a new product, train employees, or tell your company's story, we can help you achieve your goals and create videos that can help you to boost your brand and increase your ROI.</p>
            </div>
        </div>
  )
}

export default EApproach
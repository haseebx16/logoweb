import React from 'react'
import { font } from '@/app/Components/font/font'

const WhyChoose = () => {
  return (
    <div className={`${font.className} bg-background text-white p-12 flex flex-col justify-center items-center`}>
        <h1 className='text-3xl text-red-600 font-extrabold md:text-5xl'>Animations</h1>
        <p className='md:text-xl text-sm max-w-3xl pt-6 text-center'>LogoWeb USA emphasizes the value of animated videos. Since it draws customers' curiosity and encourages them to buy products and services, Our animators combine imaginative design, 3D special effects, live action, and visual effects with helping our clients by giving their concepts life.</p>
        <p className='md:text-xl text-sm max-w-3xl pt-6 text-center'>The animation selection includes motion graphics, explainer videos, 2D and 3D character animation, and whiteboard videos. As a result, your brand must use animated effects to make your clients pay for your services or products.</p>
        <hr className='border-2 w-full border-blue-800 mt-20'/>
    </div>  
  )
}

export default WhyChoose
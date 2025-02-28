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
                Custom Logo Design Company in New York</h1>
                <p className='max-w-xl mt-4'>LogoWeb USA is the premier custom logo design company in New York. Our team of skilled designers specializes in crafting unique and notable logos that perfectly capture the essence of a brand. Whether you're a small start-up or a large corporation, LogoWeb USA has the experience and expertise to create a logo that stands out in a crowded market. They work closely with their clients to understand their needs and goals and use that knowledge to create a logo that is aesthetically pleasing and effectively communicates the brand's message. With LogoWeb USA, you can be sure that your logo will represent your business and leave a lasting impression on your target audience.</p>
            </div>
        </div>
  )
}

export default EApproach
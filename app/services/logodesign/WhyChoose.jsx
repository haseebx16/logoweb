import React from 'react'
import { font } from '@/app/Components/font/font'

const WhyChoose = () => {
  return (
    <div className={`${font.className} bg-background text-white p-12 flex flex-col justify-center items-center`}>
        <h1 className='text-3xl font-extrabold md:text-5xl'>Why Choose Us</h1>
        <p className='md:text-xl text-sm max-w-3xl pt-6 text-center'>At LogoWeb USA, we have expert logo designers with a creative mindset & vast experience in the design industry. Our experts in logo design and all of the origination that comes with attractive illustrations and designs. Professionally skilled inventive logo developers and logo designers encompass our logo development team.</p>
        <p className='md:text-xl text-sm max-w-3xl pt-6 text-center'>LogoWeb USA identifies the importance of different brand identities and the influence a corporation, company, or Business logo could have on how the audience observes a company.</p>
        <h1 className='text-3xl font-extrabold pt-8 md:text-5xl'>Are You Ready To Upgrade?</h1>
        <p className='md:text-xl text-sm max-w-3xl pt-6 text-center'>Let our professional developers and designers at LogoWeb USA assist you. They are proficient in problem-solving and creating appropriate solutions for an improved tomorrow for your business. Reach us and learn more about how we can support your business in achieving its goals.</p>
        <hr className='border-2 w-full border-blue-800 mt-20'/>
    </div>  
  )
}

export default WhyChoose
import React from 'react'
import { font } from './font/font'

const Building = () => {
  return (
    <div className={`${font.className} p-12 flex flex-col  md:flex-row bg-zinc-900 text-white justify-center items-center`}>
        <div className='md:w-[50%]'>
            <img src='/building-website.png'/>
        </div>
        <div className='flex flex-col md:w-[50%]'>
            <h1 className='text-7xl text-red-600 max-w-2xl font-bold'>Building Websites For Years</h1>
            <p className='mt-4'>LogoWeb USA can make your great ideas a reality!! We push ourselves to create attractive websites that connect with your brand identity using our substantial industry knowledge. To achieve maximum reach today, we analyze your target audience to your business needs.</p>
            <p className='mt-4'>LogoWeb USA offers custom website solutions to make your business successfully reach the sky! Furthermore, our strategists focus on customized solutions to make your brand competitive in every way possible. But, more importantly, to provide perfect digital services like Web design & development, Digital marketing, website apps, e-commerce development, animations, and others, our digital specialists put great emphasis while listening to you, studying your brand data, and analyzing your audience.</p>
        </div>
    </div>
  )
}

export default Building
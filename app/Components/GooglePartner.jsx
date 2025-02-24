import React from 'react'
import { font } from './font/font'

const GooglePartner = () => {
  return (
    <div className={`${font.className} md:p-20 p-8 overflow-hidden space-y-8 md:space-y-0 md:space-x-8 text-white w-full flex justify-between items-center flex-col md:flex-row bg-zinc-950`}>
            <div>
                <img src='/google-logo.png' className='h-80 w-auto'/>
            </div>
            <div>
                <h1 className='font-extrabold text-5xl'>Google Premier Partnership</h1>
                <p className='max-w-2xl mt-4'>LogoWeB USA is a leading independent partner of Google. Strict quality control, innovation, data use, advanced methods, happy customer reviews, and clientele size are used to get remarkable recognition.</p>
                <p className='max-w-2xl mt-4'>Interestingly, our collaboration with Google gives our customers exclusive access to data insights, help with digital campaigns, and other beneficial features.</p>
            </div>
        </div>
  )
}

export default GooglePartner
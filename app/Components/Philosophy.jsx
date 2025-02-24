import React from 'react'
import { font } from './font/font'

const Philosophy = () => {
  return (
    <div className={`${font.className} md:p-20 p-8 overflow-hidden space-y-8 md:space-y-0 md:space-x-8 text-white w-full flex justify-between items-center flex-col md:flex-row bg-zinc-900`}>
        <div>
            <img src='/our-philosophy.jpg' className='h-80 w-auto'/>
        </div>
        <div>
            <h1 className='font-extrabold text-5xl'>Our Philosophy</h1>
            <p className='max-w-2xl mt-4'>“It all begins with the right team.” We think big things can happen when you bring together people from different experiences who are strategic, compassionate, enthusiastic, open-minded, and naturally curious. Diversity, cooperation, competition, professional advancement, environmental improvement, and mutual prosperity are encouraged by our brand. Additionally, our digital team goes above and above to remove obstacles on the way to success for our partners. Website Bravo values data-driven financial development, practical work environments, and strategic relationships.</p>
        </div>
    </div>
  )
}

export default Philosophy
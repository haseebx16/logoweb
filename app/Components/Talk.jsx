import React from 'react'
import { font } from './font/font'

const Talk = () => {
  return (
    <section className={`${font.className} relative`}>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10"></div>
        <div 
          className="w-full h-96 bg-cover bg-center"
          style={{
            backgroundImage: `url('/talkBG.jpg')`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 flex pt-20 flex-col justify-center items-center relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-white max-w-2xl">
            <h1 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide">
             Let’s Talk Right Away
            </h1>
            <p className='text-white'>Looking forward to enhancing the financial success of your business? Look no further and work with our digital design, development, and marketing experts.</p>
            <a href='/about'><button className="bg-black px-12 py-4 rounded-md text-cyan-300 text-lg mt-4 uppercase tracking-wider">
              +(888) 598-4094
            </button></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Talk
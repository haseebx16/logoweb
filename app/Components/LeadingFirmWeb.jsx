import React from 'react'
import { font } from './font/font'

const LeadingFirmWeb = () => {
  return (
    <div className={`${font.className} flex flex-col justify-center items-center p-20 bg-background`}>
        <h1 className='md:text-5xl text-center font-extrabold text-white text-3xl'>Why Website Bravo is the Leading Web Development Firm</h1>
    </div>
  )
}

export default LeadingFirmWeb
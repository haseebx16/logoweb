import React from 'react'
import { font } from './font/font'

const Service = () => {
  return (
    <div className={`${font.className} flex bg-zinc-900 flex-col justify-center items-center p-12`}>
        <h1 className='md:text-5xl text-2xl font-bold text-center'>Services We Offer</h1>
    </div>  
  )
}

export default Service
import React from 'react'
import { font } from './font/font'

const Portfolio = () => {
  return (
    <section className={`${font.className}  flex flex-col text-white justify-center items-center p-12 bg-background`}>
        <h1 className='text-5xl'>Our Portfolio</h1>
    </section>
  )
}

export default Portfolio
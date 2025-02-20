import React from 'react'
import { font } from './font/font'

const Partners = () => {
  return (
    <div className={`${font.className} flex flex-col md:flex-row space-x-0 md:space-y-0 space-y-4 md:space-x-4 py-4 justify-center items-center p-2 bg-background`}>
        <img src='partner2.webp'/>
        <img src='partner3.webp'/>
        <img src='partner7.webp'/>
        <img src='partner5.webp'/>
        <img src='partner6.webp'/>
    </div>
  )
}

export default Partners
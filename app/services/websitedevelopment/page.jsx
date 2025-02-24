"use client";

import { font } from '@/app/Components/font/font';
import React from 'react'
import Header from '@/app/Components/Header';

const page = () => {
  return (
    <div className={`${font.className} `}>
        <Header/>
    </div>
  )
}

export default page
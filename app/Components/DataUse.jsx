import React from 'react'
import { font } from './font/font'

const DataUse = () => {
  return (
    <div className={`${font.className} md:p-20 p-8 overflow-hidden space-y-8 md:space-y-0 md:space-x-8 text-white w-full flex justify-between items-center flex-col md:flex-row bg-zinc-900`}>
        <div>
            <img src='/usefulness-of-data.jpg' className='h-80 w-auto'/>
        </div>
        <div>
            <h1 className='font-extrabold text-red-600 text-5xl'>Usefulness Of Data</h1>
            <p className='max-w-2xl mt-4'>Our data analysts employ statistical summaries and microdata to improve the effectiveness of our digital services, such as SEO, Google Ad Words, site construction, digital advertising, and others. In addition, our data experts never stop studying Google’s algorithms. Finally, our digital performance team uses both structured and unstructured data to create business-smart e-marketing.</p>
        </div>
    </div>
  )
}

export default DataUse
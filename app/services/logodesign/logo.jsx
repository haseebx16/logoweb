import React from 'react';
import { font } from '@/app/Components/font/font';
import { FaLaptopCode, FaCode, FaRocket, FaChartLine, FaSearch, FaFileAlt } from 'react-icons/fa';

const services = [
  {
    title: 'Wordmarks/logotypes.',
    description: "We design wordmarks for your brands and companies and create different and appealing logotypes with our service.",
    icon: <FaLaptopCode className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Letterforms.',
    description: 'Our highly imaginative and creative designers design appealing letterforms for your brands.',
    icon: <FaCode className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Combination marks.',
    description: "We offer a combination mark logo design that combines a logotype and a logomark to strengthen the brand's message; we blend text with an image or iconography.",
    icon: <FaRocket className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Sale Slideshow',
    description: "We create videos that show analytics of your brand’s or company’s sales growth.",
    icon: <FaChartLine className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Letter marks/monogram logos.',
    description: "We are here to assist you in designing a monogram from your brand and getting your company off the ground by developing a stunning custom-made logo.",
    icon: <FaChartLine className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Logo symbols/brand marks/pictorial marks.',
    description: "Our professional services as a logo designer will ensure your logo project is completed to a high standard.",
    icon: <FaChartLine className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Abstract logo marks.',
    description: "Get tailor-made logos for your brand or company and make a distinction with appealing logo marks.",
    icon: <FaChartLine className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Mascots.',
    description: "Take advantage of our outlandish mascot logo-creating services to take your company's identity to the next level.",
    icon: <FaChartLine className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Emblems.',
    description: "Our team of emblem logo designers has created a wide variety of designs for emblem logos that are right on target.",
    icon: <FaChartLine className="text-cyan-400 text-3xl" />
  },
];

const Ecom = () => {
  return (
    <div className={`${font.className} bg-background text-white py-20 px-6 md:px-20`}>
      <h1 className='text-2xl md:text-4xl text-center text-red-600 font-extrabold mb-10'>
      Creating High-quality Custom Logo Designs for your brand
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        <div className="space-y-8">
          <img src='/multifaceted.png' className='w-full md:w-96 mx-auto' alt="Development Process" />
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className="flex space-x-4 items-start">
              <div className="p-3 bg-gray-800 rounded-lg">{service.icon}</div>
              <div>
                <h2 className="text-xl text-red-600 font-bold">{service.title}</h2>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {services.slice(3, 9).map((service, index) => (
            <div key={index} className="flex space-x-4 items-start">
              <div className="p-3 bg-gray-800 rounded-lg">{service.icon}</div>
              <div>
                <h2 className="text-xl text-red-600 font-bold">{service.title}</h2>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Ecom;

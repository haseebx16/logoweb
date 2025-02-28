import React from 'react';
import { font } from '@/app/Components/font/font';
import { FaLaptopCode, FaCode, FaRocket, FaChartLine, FaSearch, FaFileAlt } from 'react-icons/fa';

const services = [
  {
    title: 'SaaS Apps Development Services',
    description: 'Our SaaS development service includes the planning, design, and coding of cutting-edge products for usage through a subscription model and cloud hosting.',
    icon: <FaLaptopCode className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Front-end Development Services',
    description: 'As web development experts, our front-end developers are indispensable for creating web-based products like progressive web apps or implementing other ideas that rely on web technology.',
    icon: <FaCode className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Progressive Web Apps Development Services',
    description: 'Our web developers develop Progress Web Apps (PWA) that are responsive and work smoothly on mobile devices.',
    icon: <FaRocket className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Backend Development Services',
    description: 'Working with our developers will provide you with back-end services that help your company grow and evolve.',
    icon: <FaChartLine className="text-cyan-400 text-3xl" />
  },
  {
    title: 'E-commerce Web Apps Development Services',
    description: 'Our developers offer e-commerce web app development services that are aesthetically pleasing for customers and function smoothly',
    icon: <FaSearch className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Custom Web Apps Development for Enterprises',
    description: 'LogoWeb USA professionals offer custom web app development for enterprises that are tailor-made to clients’ requirements.',
    icon: <FaFileAlt className="text-cyan-400 text-3xl" />
  },
  
];

const WebApp = () => {
  return (
    <div className={`${font.className} bg-background text-white py-20 px-6 md:px-20`}>
      <h1 className='text-2xl md:text-4xl text-red-600 text-center font-extrabold mb-10'>
        Our Custom Web App Development Services Process
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        <div className="space-y-8">
          <img src='/multifaceted.png' className='w-full md:w-96 mx-auto' alt="Development Process" />
          {services.slice(0, 2).map((service, index) => (
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
          {services.slice(2, 6).map((service, index) => (
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

export default WebApp;

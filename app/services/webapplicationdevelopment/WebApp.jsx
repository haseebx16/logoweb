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
    title: 'Website Launch',
    description: 'When the site testing is complete, it will be ready for launch. Your website will be live on the internet and be accessible to users from all over the world.',
    icon: <FaRocket className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Monitoring & Optimizing',
    description: 'Website monitoring optimizes page loading, reduces fault time, and improves user experience. Our developers ensure that company websites are up and running smoothly.',
    icon: <FaChartLine className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Information Architecture',
    description: 'The information architecture of a website or application describes several characteristics, including structure, navigation, functionality, and interactions.',
    icon: <FaSearch className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Website Content Development',
    description: 'It includes material on your website that is pertinent to your business and meets your description. Our specialists will optimize your website so that it attracts a more significant number of visitors.',
    icon: <FaFileAlt className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Website Launch',
    description: 'When the site testing is complete, it will be ready for launch. Your website will be live on the internet and be accessible to users from all over the world.',
    icon: <FaFileAlt className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Monitoring & Optimizing',
    description: 'Website monitoring optimizes page loading, reduces fault time, and improves user experience. Our developers ensure that company websites are up and running smoothly.',
    icon: <FaFileAlt className="text-cyan-400 text-3xl" />
  },
  {
    title: 'Discovery',
    description: "Website Bravo knows how to create customized solutions and apps to meet your company's requirements.",
    icon: <FaFileAlt className="text-cyan-400 text-3xl" />
  },
];

const WebApp = () => {
  return (
    <div className={`${font.className} bg-background text-white py-20 px-6 md:px-20`}>
      <h1 className='text-2xl md:text-4xl text-center font-extrabold mb-10'>
        Our Custom Web App Development Services Process
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        <div className="space-y-8">
          <img src='/multifaceted.png' className='w-full md:w-96 mx-auto' alt="Development Process" />
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className="flex space-x-4 items-start">
              <div className="p-3 bg-gray-800 rounded-lg">{service.icon}</div>
              <div>
                <h2 className="text-xl font-bold">{service.title}</h2>
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
                <h2 className="text-xl font-bold">{service.title}</h2>
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

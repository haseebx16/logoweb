'use client';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { font } from './font/font';

export default function Hero() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, phone, message } = formData;

    // Validate required fields
    if (!fullName || !email || !phone || !message) {
      setError('All fields are required.');
      return;
    }

    // Reset error state
    setError('');

    // Send email using EmailJS
    emailjs
      .send(
        'service_r0ex0cl', // Replace with your service ID
        'template_4vtfjk5', // Replace with your template ID
        {
          to_email: 'support@amazonlegacypress.com',
          from_name: fullName,
          from_email: email,
          phone,
          message,
        },
        'TihDoLxcsdR_sDnwT' // Replace with your EmailJS user ID
      )
      .then(() => {
        alert('Your message has been sent successfully!');
        setFormData({ fullName: '', email: '', phone: '', message: '' }); // Reset form fields
      })
      .catch((err) => {
        setError('Failed to send your message. Please try again later.');
        console.error('EmailJS Error:', err);
      });
      }

  return (
    <section className={` ${font.className} relative min-h-screen px-20  bg-background`}>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="text-white max-w-xl">
            
            <h1 className="font-oswald text-4xl max-w-xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-wide">
              BRAND.DESIGN.<br/>PRODUCT. IN-HOUSE
                DEVELOPMENT
                & MORE
            </h1>
            <a href='/about'><button className="btn-primary text-cyan-300 text-lg uppercase tracking-wider">
               Discover Our Data-Driven Strategies
            </button></a>
          </div>
          <div className='flex items-center justify-center'>
            <img src='homeBanner-img.png' className='w-full h-full '/>
          </div>
        </div>
    </div>
    </section>
  );
}
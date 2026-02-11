// pages/book-demo.tsx
'use client' // only needed if using App Router inside /app directory (skip for /pages)

import { useEffect } from 'react';

export default function BookDemo() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black ">
        <h1 className='text-white text-4xl lg:text-9xl font-semibold text-center pb-10'>Thank You!</h1>
        <p className='text-white text-[16px] font-semibold text-center'>Your meeting has been booked. I look forward to connecting with you soon.</p>
    </div>
  );
}

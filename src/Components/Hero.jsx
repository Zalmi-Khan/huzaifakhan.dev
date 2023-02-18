import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-5xl sm:text-6xl text-4xl font-bold md:py-6 text-[#39B54A]'>
        YOUR DIGITAL EXPERIENCES — PERSONIFIED!
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Awesome Platform
          </p>
          <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
          strings={['ReactJS', 'AngularJs', 'Laravel', 'WordPress', 'NodeJS', 'ReactNative']} typeSpeed={120} backSpeed={140}
          loop/>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Embrace Digital Transformation with Axis Coding Solutions. We Provide Digital Solutions By Integrating State-Of-The-Art Technologies and Ensure Seamless User-Experience.</p>
        <button className='hover:bg-[#39B54A] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#39B54A] hover:text-black border-2 border-[#39B54A] '>Contact Us</button>
      </div>
    </div>
  )
}

export default Hero
import React from 'react'
import laptop from '../Images/laptop.jpg'

const Aboutus = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={laptop} alt='/'/>
            <div className='flex flex-col justify-center'> 
            <h1 className='md:text-5xl text-4xl font-bold'> About Us </h1>
            <p className='py-2 text-xl font-bold text-[#39b54a]'>Embrace Digital Transformation</p>
            <p className='font-normal md:text-lg sm:text-sm'>At Axis Coding Solutions, we love to deliver digital solutions for refining your web technologies, developing great relationships along the way. We take pride in building strong capabilities for designing and engineering web software, mobile apps, and robust web solutions for your business. Other than designing innovative web solutions, Axis Coding Solutions also offers state-of-the-art marketing and promotion for your websites, facilitating your access to the global audience.</p>
            </div>
        </div>
    </div>
  )
}

export default Aboutus
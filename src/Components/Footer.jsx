import React from 'react'

const Footer = () => {
  return (
    <section className='bg-[#39B54A]'>
        <div className='mx-auto max-w-screen-xl pt-16 lg:pb-16 md:pb-16 sm:pb-16 lg:grid lg:grid-cols-2 sm:grid-rows-1 sm:grid '>
          <div className='justify-center items-center'>
            <div className='px-5'>
              <p className='text-white font-normal text-lg'>
              Digital Transformation is made easy with the Axis Coding Solutions. We aspire to provide you with a hassle-free experience and offer a one-stop solution to all your digital design and development needs!
              </p>
              <button className='mt-5 py-3 px-5 bg-[#39B54A] border-2 text-white rounded-lg border-white font-medium hover:text-black hover:bg-white hover:border-[#39B54A] '>Want To Know More?</button>
            </div>
          </div>
          <div className='lg:px-24 sm:px-2'>
            <div className='lg:grid lg:grid-cols-2 sm:grid-cols-1 sm:grid'>
              <div className='px-5 lg:mt-0 sm:mt-5 md:mt-0'>
                <h3 className='text-xl text-white font-semibold'>Quick Link</h3>
                <ul className='mt-5 space-y-2 text-white font-normal text'>
                  <li><a href='#'>Work</a></li>
                  <li><a href='#'>Hire Dedicated Developers</a></li>
                  <li><a href='#'>Let's Talk</a></li>
                </ul>
              </div>
              <div className='px-5 lg:mt-0 sm:mt-5 md:mt-0'>
                <h3 className='text-xl text-white font-semibold'>Say Hello</h3>
                <ul className='mt-5 space-y-2 text-white font-normal text'>
                  <li><a href='mailto:contact@axiscodingsolutions.com'>contact@axiscodingsolutions.com</a></li>
                  <li><a href='mailto:career@axiscodingsolutions.com'>career@axiscodingsolutions.com</a></li>
                </ul>
              </div>
            </div>
            <h2 className='text-left mt-10 text-white font-medium text-base px-5'>
              Copyright © 2020 Axis Coding Solution. All Rights Reserved.
              </h2>
          </div>
          
        </div>
    </section>
  )
}

export default Footer
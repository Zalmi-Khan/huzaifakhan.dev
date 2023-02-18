import React from 'react'
import CountUp1 from 'react-countup'
import CountUp2 from 'react-countup'
import CountUp3 from 'react-countup'
const Counter = () => {
  return (
    <div className='bg-white'>
       <section className="bg-white text-white mx-auto max-w-screen-xl pt-10 ">
          <div className='text-center pt-10 '>
            <h3 className='lg:text-3xl font-semibold sm:text-2xl text-black'>FIGURES WE HAVE ON BOARD</h3>
          </div>
          <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 '>
            <div className='text-center py-5'>
                <CountUp1 end={12} suffix='+' className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#39B54A]'/>
               
                <p className='text-gray-600 font-semibold text-xl pb-5 pt-2'>
                Years Of Experience
                </p>
            </div>
            <div className='text-center py-5'>
                <CountUp2 end={23} suffix='+' className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#39B54A]'/>
                <p className='text-gray-600 font-semibold text-xl pb-5 pt-2'>
                Professionals In Our Team
                </p>
            </div>
            <div className='text-center py-5'>
                <CountUp3 end={34} suffix='+' className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#39B54A]'/>
                <p className='text-gray-600 font-semibold text-xl pb-5 pt-2'>
                Successfully Developed Projects
                </p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Counter
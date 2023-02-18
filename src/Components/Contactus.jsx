import React from 'react'
import pic1 from '../Assets/Images/contact-1.jpg'

const Contactus = () => {
  return (
<div className='bg-[#f6f6f6]'>
<section class=" lg:flex  lg:flex-row sm:flex sm:flex-col  bg-[#f6f6f6] mx-auto max-w-screen-xl">
  <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 mx-auto max-w-screen-xl">
    <div class="mx-auto max-w-lg px-3">
      <h1 class="text-5xl font-bold sm:text-3xl">Let's Get Connect!</h1>

      <p class="mt-4 text-lg text-gray-500">
      Have any questions? Fill out the form and hit the submit button, we will get back to you shortly!
For urgent queries, you can connect with us via phone:
<a href='tel:+923334140241' className='hover:text-[#39B54A] font-medium'>+923334140241</a> or email:<a href='contact@axiscodingsolutions.com'className='hover:text-[#39B54A] font-medium'>contact@axiscodingsolutions.com</a>
      </p>
    </div>

    <form action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4">

        <div class="">
          <input type="text" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm focus:border-[#39B54A]" placeholder="Enter Name"/>
        <span class=" inset-y-0 right-4 inline-flex items-center"></span>
        </div>
        <div class="">
          <input type="email" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm focus:border-[#39B54A]" placeholder="Enter Email"/>
        <span class=" inset-y-0 right-4 inline-flex items-center"></span>
        </div>
        <div class="">
          <input type="tel" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm focus:border-[#39B54A]" placeholder="Enter Phone Number"/>
        <span class=" inset-y-0 right-4 inline-flex items-center"></span>
        </div>
        <div class="">
          <input type="text" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm focus:border-[#39B54A]" placeholder="Say Something Here!"/>
        <span class=" inset-y-0 right-4 inline-flex items-center"></span>
        </div>

      <div class="">
        <button
          type="submit"
          class=" w-full inline-block rounded-lg bg-[#39B54A] border-2 border-[#39B54A] px-5 py-3 text-sm font-medium text-white "
        >
          Sign in
        </button>
      </div>
    </form>
  </div>

  <div class="  w-full  lg:h-full lg:w-1/2 ">
    <img
      alt="Welcome"
      src={pic1}
    />
  </div>
</section>
</div>
  )
}

export default Contactus
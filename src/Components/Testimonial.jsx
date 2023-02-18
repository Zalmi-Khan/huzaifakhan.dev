import React, { useState } from 'react'
import Testimonialcards from './Testimonialcards'
import pic1 from '../Assets/Images/user-1.jpg'
import pic2 from '../Assets/Images/user-2.jpeg'

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState(<Testimonialcards image={pic2} 
    detail="We are very happy with the software that Axis Coding Solutions has created for us. They perfectly meets our requirements and helps us to deal with the problems we face. The Axis Coding Solutions team supports the software promptly and precisely to our demand. I am sure that our collaboration will stay like this."
    name="Huzaifa Khan" title="ReactJS - Developer"/>) ;
  const userTestimonial = () => {
    setTestimonial(<Testimonialcards image={pic2} 
      detail="We are very happy with the software that Axis Coding Solutions has created for us. They perfectly meets our requirements and helps us to deal with the problems we face. The Axis Coding Solutions team supports the software promptly and precisely to our demand. I am sure that our collaboration will stay like this." 
      name="Huzaifa Khan" title="ReactJS - Developer"/>)
  }
  const userTestimonial1 = () => {
    setTestimonial((<Testimonialcards image={pic2} 
      detail="The quality and speed of Axis Coding Solutions’s response was excellent. Above all, we were very impressed by the technical abilities of the Axis Coding Solutions team. We strongly recommend the Axis Coding Solutions and for sure work with them again." 
      name="Faizan Arif" title="ReactJS - Developer"/>))
  }
  const userTestimonial2 = () => {
    setTestimonial((<Testimonialcards image={pic2} 
      detail="The application needed to be user friendly, simple to upgrade and easy to maintain. Axis Coding Solutions done all this in a very brilliant way." 
      name="Sohaib Khan" title="BDM Of Company"/>))
  }
  const userTestimonial3 = () => {
    setTestimonial((<Testimonialcards image={pic2} 
      detail="The developers who worked on my project were more than friends and always ready to provide help and assistance, sometimes beyond the scope of the project. We are so delighted with Axis Coding Solution’s work that we have decided to complete all of our projects with them. All services are appreciated" 
      name="Hassan Matlob" title="Php/Laravel - Developer"/>))
  }
  const userTestimonial4 = () => {
    setTestimonial((<Testimonialcards image={pic2} 
      detail="Hi! We could not have found a better and this much energetic team. We would recommend Axis Coding Solution to any company requiring web application development." 
      name="Fahad Altab" title="CEO Of Company"/>))
  }
  
  return (
    <section className='  sm:px-2 pt-10 pb-14 bg-white  '>
      <div className='lg:flex-row lg:justify-center lg:items-center md:justify-center md:items-center  sm:flex sm:flex-col sm:justify-center sm:items-center lg:gap-10 md:flex-row sm:gap-2 md:-5 mx-auto max-w-screen-xl px-4 pb-10 sm:px-6 lg:px-8 '>
        <div className='lg:w-1/4 sm:w-full md:w-1/4 '>
          <ul className='pr-[20px]'>
            <li onClick={userTestimonial} className="mt-2 mb-1 hover:border-r-8 hover:border-[#39B54A] rounded-md ">
                  <button className=" text-gray-800 font-medium px-10 py-2 rounded inline-flex justify-center items-center"><img src={pic1} alt="User-Images" className='rounded-[50%] h-[40px]' /><span className='ml-3 text-base'>Huzaifa Khan</span>
                  </button>
              </li>
            <li onClick={userTestimonial1} className="my-1 hover:border-r-8 hover:border-[#39B54A] rounded-md">
                  <button className=" text-gray-800 font-medium px-10 py-2 rounded inline-flex justify-center items-center"><img src={pic1} alt="User-Images" className='rounded-[50%] h-[40px]' /><span className='ml-3 text-base'>Faizan Arif</span>
                  </button> 
              </li>
            <li onClick={userTestimonial2} className="my-1 hover:border-r-8 hover:border-[#39B54A] rounded-md">
                  <button className=" text-gray-800 font-medium px-10 py-2 rounded inline-flex justify-center items-center"><img src={pic1} alt="User-Images" className='rounded-[50%] h-[40px]' /><span className='ml-3 text-base'>Sohaib Khan</span>
                  </button>
              </li>
            <li onClick={userTestimonial3} className="my-1 hover:border-r-8 hover:border-[#39B54A] rounded-md">
                  <button className=" text-gray-800 font-medium px-10 py-2 rounded inline-flex justify-center items-center "><img src={pic1} alt="User-Images" className='rounded-[50%] h-[40px]' /><span className='ml-3 text-base'>Hassan Matlob</span>
                  </button>
              </li>
            <li onClick={userTestimonial4} className="my-1 hover:border-r-8 hover:border-[#39B54A] rounded-md">
                  <button className=" text-gray-800 font-medium px-10 py-2 rounded inline-flex justify-center items-center "><img src={pic1} alt="User-Images" className='rounded-[50%] h-[40px]' /><span className='ml-3 text-base'>Fahad Altaf</span>
                  </button>
              </li>
          </ul>
        </div>
        <div className='lg:w-9/12 sm:w-full md:w-9/12'>
          {testimonial}
        </div>
      </div>
    </section>
  )
}


export default Testimonial;
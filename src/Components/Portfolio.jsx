import React from 'react'
import PortfolioCard from './PortfolioCard'
import pic1 from '../Assets/Images/web-project-1.jpg'
import pic2 from '../Assets/Images/mobile-project-1.jpg'
import pic3 from '../Assets/Images/ui-project-1.jpg'
import pic4 from '../Assets/Images/ui-project-2.jpg'
import pic5 from '../Assets/Images/web-project-2.jpg'
import pic6 from '../Assets/Images/mobile-project-2.jpg'

const Portfolio = () => {
  return (
    <div>
        
        <section className="bg-[#F6F6F6] text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-4xl font-bold sm:text-4xl text-[#39B54A]">Our Portfolio</h2>
              <p className="mt-4 text-gray-500 text-xl font-semibold">
                  With years of experience and in-depth industry knowledge, we are your go-to choice for the best digital solutions. Take a look at how we have helped several clients.
              </p>
            </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <PortfolioCard image={pic1} filter="Web Development" name="Expert Advice Project"/>
            <PortfolioCard image={pic2} filter="App Development" name="Dairy Products App"/>
            <PortfolioCard image={pic3} filter="UI/UX Design" name="Delivery App Design"/>
            <PortfolioCard image={pic4} filter="UI/UX Design" name="School Web Design"/>
            <PortfolioCard image={pic5} filter="Web Development" name="Solutions Website"/>
            <PortfolioCard image={pic6} filter="App Development" name="Car Wash Services App"/>
          </div>
          <div className='text-center mt-5'>
          <button className='hover:bg-[#39B54A] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#39B54A] hover:text-black border-2 border-[#39B54A] '>View More</button>
          </div>
    </div>
  </section>

    </div>
  )
}

export default Portfolio;
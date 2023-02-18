import React from 'react'
import ServiceCard from './ServiceCard'
import { BiCast } from 'react-icons/bi';
import { ImStack } from 'react-icons/im';
import { AiOutlineMobile } from 'react-icons/ai';
import { BiLineChart } from 'react-icons/bi';
import { BsLaptop } from 'react-icons/bs';
import { FaWordpressSimple } from 'react-icons/fa';

const Service = () => {
  return (
<div>

  <section class="bg-[#F6F6F6] text-white">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg text-center">
        <h2 class="text-4xl font-bold sm:text-4xl text-[#39B54A]">WHAT WE DO</h2>
        <p class="mt-4 text-gray-500 text-xl font-semibold">
          Axis Coding Solutions provides a whole range of digital solutions under one roof.
        </p>
      </div>
      <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard icon={<BiCast size={50}/>} title="Web Design" detail="Create your own web design tailored to suit your target market with seamless navigation and multimedia support for maximum impact."/>
        <ServiceCard icon={<ImStack size={50}/>} title="Web Development" detail="Gear up to build polished and robust websites and web applications for high-performing, feature-packed and digitally transformative experiences."/>
        <ServiceCard icon={<AiOutlineMobile size={50}/>} title="App Development" detail="Avail end-to-end support for building secure and scalable mobile applications with the compatibility to work on any device or platform."/>
        <ServiceCard icon={<BiLineChart size={50}/>} title="Digital Marketing" detail="Ensure maximum reach of your web and mobile applications to the digital world with our marketing support tailored to suit your preferences"/>
        <ServiceCard icon={<BsLaptop size={50}/>} title="Hire Dedicated Developers" detail="Hire top-rated dedicated resources to interpret your bespoke requirements. Proven experience and integration of the latest technological solutions."/>
        <ServiceCard icon={<FaWordpressSimple size={50}/>} title="(CMS) Content Management System" detail="We provide many CMS (Content Manangement System) like WordPress, Shopify, Wix, Magento, and Other."/>
      </div>
    </div>
  </section>


</div>
  )
}

export default Service
import React from 'react'
import './ServiceCard.css'
const ServiceCard = (props) => {
  return (
<div> 
  
<a
        className="block rounded-xl p-8 shadow-xl transition bg-gray-200 cursor-pointer hover:shadow-xl hover:shadow-gray-300  servicecard "
        href="#"
      >
        <span className='text-[#39B54A] cursor-pointer child'>{props.icon}</span>

        <h2 className="mt-4 text-2xl font-bold text-black cursor-pointer child">{props.title}</h2>

        <p className="mt-1 text-lg text-gray-600 font-normal cursor-pointer child">
          {props.detail}
        </p>
      </a>


</div>
  )
}

export default ServiceCard
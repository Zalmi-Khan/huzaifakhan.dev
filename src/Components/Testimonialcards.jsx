import React from 'react'

const Testimonialcards = (props) => {
  return (
  <section className="rounded-lg bg-[#f6f6f6] p-8">
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
      <img
        alt="Man"
        src={props.image}
        classnName="aspect-square w-full rounded-lg object-cover"/>
        <div className="sm:col-span-2">
        <p className="text-xl font-medium sm:text-xl">
          {props.detail}
        </p>
        <div className="mt-8 inline-flex items-center not-italic">
            <span className="hidden h-[2px] w-6 bg-gray-600 sm:inline-block"></span>
            <span className="text-lg text-black sm:ml-5 inline-flex justify-center items-center">
            <h2 className='text-2xl font-semibold'>{props.name}</h2>
            <h3 className='ml-3 text-[#39B54A] font-medium mt-1'>{props.title}</h3>
          </span>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonialcards
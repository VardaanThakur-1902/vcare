import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Our Office</p>
          <p className='text-gray-500'>123 Healthcare Street</p>
          <p className='text-gray-500'>City, State 12345</p>
          <p className='font-semibold text-lg text-gray-600'>Phone: (123) 456-7890</p>
          <p className='text-gray-500' >Learn more about our opportunities</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transti duration-500'>Explore Jobs</button>
        </div>
      
      </div>
    </div>
  )
}

export default Contact

import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[-360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Vacre, your trusted healthcare partner!</p>
          <p>Vcare is committed to providing the highest quality healthcare services to our patients.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To improve the health and well-being of our community through compassionate care and innovation.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
          <b>Efficiency</b>
          <p>Streamlined processes and efficient resource allocation ensure that our patients receive timely and effective care.</p>

        </div>
        <div className='border px-10 md:px-16 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
          <b>Convenience</b>
          <p>Our convenient locations and flexible scheduling options make it easy for our patients to access the care they need.</p>

        </div>
        <div className='border px-10 md:px-16 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
          <b>Personalized Care</b>
          <p>Tailored treatment plans and individualized attention ensure that each patient receives the care they need.</p>

        </div>
      </div>

    </div>
  )
}

export default About

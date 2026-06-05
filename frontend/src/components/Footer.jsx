import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*---------Left---------*/}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6' >
                VCare is a healthcare platform that connects patients with healthcare providers, allowing them to book appointments, access medical records, and receive personalized care.
            </p>
        </div>

        {/*---------center---------*/}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        {/*---------right---------*/}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91 876876876</li>
                <li>info@vcare.com</li>
            </ul>
        </div>

      </div>
      {/*---------copyright---------*/}
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>copyright @2026 VCare. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer

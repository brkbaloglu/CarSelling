import React from 'react'
import {AiFillCar} from 'react-icons/ai'
import {FaScrewdriver, FaCarCrash, FaOilCan} from 'react-icons/fa'
import { BiSolidBatteryCharging} from 'react-icons/bi'
import { TfiHeadphoneAlt} from 'react-icons/tfi'
function Services() {
  return (
    <div className='my-20 flex items-center justify-between flex-col'>
      <h5 className='text-center text-5xl font-bold mb-20'>Our <span className='border-b-8 border-black'>Services</span></h5>
      <div className='grid grid-cols-3 mx-20'>
        <div className='flex items-center justify-center flex-col border-2 border-black m-2 p-4 rounded-2xl hover:bg-black duration-300 hover:text-white'>
          <AiFillCar size={40} className='my-6'/>
          <h5 className='font-bold text-2xl mb-4'>Car Selling</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae reprehenderit at nemo quae labore. Ea temporibus eum nam blanditiis hic.</p>
        </div>
        <div className='flex items-center justify-center flex-col border-2 border-black m-2 p-4 rounded-2xl hover:bg-black duration-300 hover:text-white'>
          <FaScrewdriver size={40} className='my-6'/>
          <h5 className='font-bold text-2xl mb-4'>Parts Repair</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae reprehenderit at nemo quae labore. Ea temporibus eum nam blanditiis hic.</p>
        </div>
        <div className='flex items-center justify-center flex-col border-2 border-black m-2 p-4 rounded-2xl hover:bg-black duration-300 hover:text-white'>
          <FaCarCrash size={40} className='my-6'/>
          <h5 className='font-bold text-2xl mb-4'>Car Insurance</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae reprehenderit at nemo quae labore. Ea temporibus eum nam blanditiis hic.</p>
        </div>
        <div className='flex items-center justify-center flex-col border-2 border-black m-2 p-4 rounded-2xl hover:bg-black duration-300 hover:text-white'>
          <TfiHeadphoneAlt size={40} className='my-6'/>
          <h5 className='font-bold text-2xl mb-4'>Battery Replacement</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae reprehenderit at nemo quae labore. Ea temporibus eum nam blanditiis hic.</p>
        </div>
        <div className='flex items-center justify-center flex-col border-2 border-black m-2 p-4 rounded-2xl hover:bg-black duration-300 hover:text-white'>
          <FaOilCan size={40} className='my-6'/>
          <h5 className='font-bold text-2xl mb-4'>Oil Change</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae reprehenderit at nemo quae labore. Ea temporibus eum nam blanditiis hic.</p>
        </div>
        <div className='flex items-center justify-center flex-col border-2 border-black m-2 p-4 rounded-2xl hover:bg-black duration-300 hover:text-white'>
          <BiSolidBatteryCharging size={40} className='my-6'/>
          <h5 className='font-bold text-2xl mb-4'>7/24 Support</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae reprehenderit at nemo quae labore. Ea temporibus eum nam blanditiis hic.</p>
        </div>
      </div>
    </div>
  )
}

export default Services
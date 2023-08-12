import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillCar, AiOutlineHome} from 'react-icons/ai'
function Home() {
  return (
    <div>
      <div className='bg-[url("https://images.pexels.com/photos/12989553/pexels-photo-12989553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] w-full h-[100vh] bg-center bg-cover'></div>
      <div className='flex items-center justify-center mt-10 flex-col'>
        <h5 className='text-4xl font-bold'>Find Your <span className='border-b-8 border-black'>Next Car</span></h5>
        <Link to="cars" className='border-2 border-black py-4 px-6 mt-10 rounded-2xl hover:bg-black hover:text-white'>Get Started</Link>
      </div>
      <div className='grid grid-cols-3 mt-10'>
        <div className=' text-black border-2 border-black  px-20 flex items-center justify-center flex-col text-center mx-20 rounded-3xl hover:bg-black hover:text-white cursor-pointer'>
          <AiFillCar size={50} className='my-4'/>
          <div>
          <h5 className='text-2xl font-bold mb-2'>1000+</h5>
          <p className='text-sm mb-4 opacity-70'>Cars Sold</p>
          </div>
        </div>
        <div className=' text-black border-2 border-black  px-20 flex items-center justify-center flex-col text-center mx-20 rounded-3xl hover:bg-black hover:text-white cursor-pointer'>
          <AiOutlineHome size={50} className='my-4'/>
          <div>
          <h5 className='text-2xl font-bold mb-2'>50+</h5>
          <p className='text-sm mb-4 opacity-70'>Branches</p>
          </div>
        </div>
        <div className=' text-black border-2 border-black  px-20 flex items-center justify-center flex-col text-center mx-20 rounded-3xl hover:bg-black hover:text-white cursor-pointer'>
          <AiFillCar size={50} className='my-4'/>
          <div>
          <h5 className='text-2xl font-bold mb-2'>50+</h5>
          <p className='text-sm mb-4 opacity-70'>Models</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
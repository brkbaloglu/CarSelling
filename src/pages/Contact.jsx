import React from 'react'
import {AiOutlinePhone} from 'react-icons/ai'
import {BsEnvelopeAt} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'
function Contact() {
  return (
    <div className='my-20 flex items-center justify-between flex-col'>
      <h5 className='text-center text-5xl font-bold mb-20'>Contact <span className='border-b-8 border-black'>Us</span></h5>
      <div className='grid grid-cols-3 my-10'>
          <div className='flex items-center justify-center flex-col mx-10 hover:bg-black hover:text-white border-2 border-black p-4 rounded-xl'>
          <BsEnvelopeAt size={40} className='mr-4 mb-4'/>
          <p>mehmetburakbaloglu@gmail.com</p>
          </div>
          <div className='flex items-center justify-center flex-col mx-10 hover:bg-black hover:text-white border-2 border-black p-4 rounded-xl'>
          <AiOutlinePhone size={40} className='mr-4 mb-4'/>
          <p>+111 222 33 44</p>
          </div>
          <div className='flex items-center justify-center flex-col mx-10 hover:bg-black hover:text-white border-2 border-black p-4 rounded-xl'>
          <HiOutlineLocationMarker size={40} className='mr-4 mb-4'/>
          <p>Bozuyuk, Bilecik, Turkey</p>
          </div>
      </div>
      <form action="" className='flex items-center justify-center flex-col'>
        <input type="text" placeholder='Enter your name' className='w-[500px] border-2 p-2 border-black mb-4 rounded-xl placeholder:text-black' name="" id="" />
        <input type="email" placeholder='Enter your email' className='w-[500px] border-2 p-2 border-black mb-4 rounded-xl placeholder:text-black' name="" id="" />
        <input type="number" placeholder='Enter your number' className='w-[500px] border-2 p-2 border-black mb-4 rounded-xl placeholder:text-black' name="" id="" />
        <textarea name="" id="" placeholder='Enter your message' className='w-[500px] border-2 p-2 border-black mb-4 rounded-xl placeholder:text-black resize-none' cols="30" rows="10"></textarea>
        <button type="submit" className='text-black border-2 border-black py-2 px-6 rounded-xl hover:bg-black hover:text-white'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
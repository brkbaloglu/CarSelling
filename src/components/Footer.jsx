import React from 'react'
import {AiOutlineArrowRight, AiOutlineCopyrightCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
      <div className='grid grid-cols-3 mx-20 '>
        <div className='flex items-center justify-center flex-col mr-20'>
        <img className='w-[150px] py-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Mercedes-Benz_Star_2022.svg/800px-Mercedes-Benz_Star_2022.svg.png" alt="" />
        <h3 className='text-4xl border-t-8 border-black font-bold'>Mercedes</h3>
        </div>
        <ul className='flex flex-col px-20 my-20 border-x-2 border-black'>
          <Link to="/" className='flex items-center cursor-pointer hover:translate-x-4 duration-300 text-lg my-4 hover:underline underline-offset-4'><AiOutlineArrowRight/>Data Protection</Link>
          <Link to="/" className='flex items-center cursor-pointer hover:translate-x-4 duration-300 text-lg my-4 hover:underline underline-offset-4'><AiOutlineArrowRight/>Data Privacy</Link>
          <Link to="/" className='flex items-center cursor-pointer hover:translate-x-4 duration-300 text-lg my-4 hover:underline underline-offset-4'><AiOutlineArrowRight/>About Us</Link>
        </ul>
        <ul className='flex flex-col px-20 py-20'>
          <Link to="/" className='flex items-center cursor-pointer hover:translate-x-4 duration-300 text-lg my-2 hover:underline underline-offset-4'><AiOutlineArrowRight/>Home</Link>
          <Link to="about" className='flex items-center cursor-pointer hover:translate-x-4 duration-300 text-lg my-2 hover:underline underline-offset-4'><AiOutlineArrowRight/>About</Link>
          <Link to="cars" className='flex items-center cursor-pointer hover:translate-x-4 duration-300 text-lg my-2 hover:underline underline-offset-4'><AiOutlineArrowRight/>Cars</Link>
          <Link to="services" className='flex items-center cursor-pointer hover:translate-x-4 duration-300 text-lg my-2 hover:underline underline-offset-4'><AiOutlineArrowRight/>Services</Link>
          <Link to="reviews" className='flex items-center cursor-pointer hover:translate-x-4 duration-300 text-lg my-2 hover:underline underline-offset-4'><AiOutlineArrowRight/>Reviews</Link>
          <Link to="contact" className='flex items-center cursor-pointer hover:translate-x-4 duration-300 text-lg my-2 hover:underline underline-offset-4'><AiOutlineArrowRight/>Contact</Link>
        </ul>
      </div>
      <div className='flex items-center px-20 py-4 my-4 bg-black text-white font-bold'>
        <AiOutlineCopyrightCircle size={25} className='mr-4'/>
        <p>Copyright 2023 | All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
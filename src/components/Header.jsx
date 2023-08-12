import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex items-center justify-between py-10 px-20 border-b-2 bg-white sticky top-0 border-black z-50'>
        <img className='w-[50px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Mercedes-Benz_Star_2022.svg/800px-Mercedes-Benz_Star_2022.svg.png" alt="" />
        <div >
          <Link className='px-4 py-2 rounded-xl duration-300 font-semibold underline-offset-4 text-lg hover:bg-black hover:text-white' to="/">Home</Link>
          <Link className='px-4 py-2 rounded-xl duration-300 font-semibold underline-offset-4 text-lg hover:bg-black hover:text-white' to="about">About</Link>
          <Link className='px-4 py-2 rounded-xl duration-300 font-semibold underline-offset-4 text-lg hover:bg-black hover:text-white' to="cars">Cars</Link>
          <Link className='px-4 py-2 rounded-xl duration-300 font-semibold underline-offset-4 text-lg hover:bg-black hover:text-white' to="services">Services</Link>
          <Link className='px-4 py-2 rounded-xl duration-300 font-semibold underline-offset-4 text-lg hover:bg-black hover:text-white' to="reviews">Reviews</Link>
          <Link className='px-4 py-2 rounded-xl duration-300 font-semibold underline-offset-4 text-lg hover:bg-black hover:text-white' to="contact">Contact</Link>
        </div>
    </div>
  )
}

export default Header
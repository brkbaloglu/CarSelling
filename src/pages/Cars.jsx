import React, { useState } from 'react'
import { ProductsData } from '../data/products'
import {useAutoAnimate} from '@formkit/auto-animate/react'
import { Link } from 'react-router-dom'

function Cars() {
  const [products, setProducts] = useState(ProductsData)

    const filter = (type) => {
        setProducts(ProductsData.filter((product => product.type === type)))
    }

    const [parent] = useAutoAnimate()
  return (
    <div>
      <h1 className='text-center text-4xl font-bold my-10'>Our <span className='border-b-8 border-black'>Cars</span></h1>
        <div className='flex items-center justify-center'>
            <div>
                <ul className='flex items-center justify-center my-10'>
                    <li className='p-2 mx-4 border-2 border-black rounded-xl hover:bg-black hover:text-white cursor-pointer' onClick={() => setProducts(ProductsData)}>All</li>
                    <li className='p-2 mx-4 border-2 border-black rounded-xl hover:bg-black hover:text-white cursor-pointer' onClick={() => filter("sedan")}>Sedan</li>
                    <li className='p-2 mx-4 border-2 border-black rounded-xl hover:bg-black hover:text-white cursor-pointer' onClick={() => filter("suv")}>SUV</li>
                    <li className='p-2 mx-4 border-2 border-black rounded-xl hover:bg-black hover:text-white cursor-pointer' onClick={() => filter("coupé")}>Coupé</li>
                    <li className='p-2 mx-4 border-2 border-black rounded-xl hover:bg-black hover:text-white cursor-pointer' onClick={() => filter("cabriolet")}>Cabriolet</li>
                </ul>
                <div className='grid grid-cols-2' ref={parent}>
                    {
                        products.map((product, i) => (
                            <div className='w-[600px] flex items-center justify-between px-10 mx-10 my-5 rounded-3xl py-5 border-2 border-black'>
                                <div >
                                    <div className="flex flex-col">
                                        <span className='text-2xl font-bold'>{product.name}</span>
                                        <span className='mt-2 text-lg'>{product.price}</span>   
                                        <div className='my-5 text-left'>
                                          <span className='mr-4 text-sm opacity-70'>{product.rated_power}</span>                
                                          <span className='mr-4 text-sm opacity-70'>{product.consumption}</span>                
                                          <span className=' text-sm opacity-70'>{product.acceleration_100}</span>  
                                        </div>              
                                        <Link className='text-black border-2 py-2 px-4 rounded-xl border-black text-center hover:bg-black hover:text-white max-w-[115px]' to="/">Show Now</Link>
                                                       
                                    </div>
                                </div>
                                <img src={product.img} className='w-[200px]' alt="" />

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cars
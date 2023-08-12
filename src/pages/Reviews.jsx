import React from 'react'
import {ReviewsData} from '../data/reviews'

function Reviews() {
  return (
    <div className='m-20'>
        <h5 className='text-center text-5xl font-bold mb-20'>Customer <span className='border-b-8 border-black'>Review</span></h5>
      {ReviewsData.map((review, i) => (
        <div className='flex items-center justify-center'>
            <div className='flex items-center justify-between py-10 border-b-2 border-black' >
            <img className='w-[300px]' src={review.image} alt="" />

                <div className='flex items-center justify-center flex-col mx-20'>
                <span>
                    {review.name}
                </span>
                <span>
                    {review.comment}
                </span>
                </div>

            </div>
        </div>
                    
      ))}
            
        
    </div>
  )
}

export default Reviews
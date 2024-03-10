import React from 'react'

function CarouselItem({ciudad}) {
  return (
    
    <section className='flex flex-wrap flex-col items-center border bg-black text-white p-1 w-[45%] rounded-xl'>
        <img className='w-[90%] h-[40%] md:h-[70%] py-1 rounded-lg' src={ciudad.image} alt="" />
        <h4 className='text-sm grow md:text-xl'>{ciudad.name} | {ciudad.country}</h4>
        <button className='text-sm md:text-xl xl:mb-5 bg-white text-black p-1 rounded'>View More</button>
    </section>

  )
}

export default CarouselItem
import React from 'react'

function CarouselItem({ciudad}) {
  return (
    
    <section className='flex flex-wrap flex-col items-center border bg-black text-white p-1 w-[120px] h-[190px] md:w-[280px] md:h-[320px] lg:w-[400px] lg:h-[420px] xl:w-[540px] xl:h-[580px] 2xl:w-[800px] 2xl:h-[580px] rounded-xl'>
        <img className='w-[90%] h-[40%] md:h-[70%] py-1 rounded-lg' src={ciudad.image} alt={`Imagen de ${ciudad.name}`} />
        <h4 className='text-sm grow md:text-xl'>{ciudad.name} | {ciudad.country}</h4>
        <button className='text-sm md:text-xl xl:mb-5 bg-white text-black p-1 rounded'>View More</button>
    </section>

  )
}

export default CarouselItem
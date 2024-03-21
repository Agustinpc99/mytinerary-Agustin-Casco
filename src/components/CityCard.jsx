import React from 'react'
import {Link as Anchor} from "react-router-dom"

function CityCard({ciudad}) {
  return (
    
    <section className='flex flex-wrap flex-col items-center border bg-black text-white pb-4 p-1 md:w-[45%] xl:w-[30%] rounded-xl'>
        <img className='w-[90%] md:h-[70%] py-1 rounded-lg' src={ciudad.image} alt={`imagen de ${ciudad.name}`} />
        <h4 className='grow md:text-xl'>{ciudad.name} | {ciudad.country}</h4>
        <Anchor to={"/cities/" + ciudad._id}><button className='text-sm md:text-xl xl:mb-5 bg-white text-black p-1 rounded hover:scale-105'>Details</button></Anchor>
    </section>

  )
}

export default CityCard
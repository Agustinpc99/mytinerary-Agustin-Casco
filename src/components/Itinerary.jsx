import React from 'react'

function Itinerary({itinerario}) {
    function precio(cantidad){
        let final = ""
        for(let i = 0; i<cantidad; i++){
          final += "💲"
        }
        return final
      }
  return (
        <div className=' flex flex-col flex-wrap my-5 bg-gray-950 text-gray-200 items-center'>
          <h2 className='text-center text-xl font-semibold py-2 underline md:text-2xl xl:text-5xl'>{itinerario.title}</h2>
          <section className='self-center w-2/4 py-5 flex flex-col'><img className='rounded-full md:w-[256px] self-center' src={itinerario.guide_image} alt={itinerario.guide} />
          <h5 className='text-center text-xl font-semibold xl:text-3xl'>{itinerario.guide}</h5></section>
          <p className='text-lg pb-5 md:text-xl xl:text-2xl lg:w-[80ch]'>{itinerario.description}</p>
          <p className='text-center font-semibold text-xl'>Price: {precio(itinerario.price)}</p>
          <p className='text-center font-semibold text-xl'>Duration: {itinerario.duration} Hours</p>
          <section>
            <h3 className='text-center font-semibold text-xl underline py-5'>ACTIVITIES</h3>
            <div className='flex flex-col items-center'>
              {itinerario.activities.map((e) => <img key={Math.random()} className='w-full my-2 lg:w-[1024px]' src={e}></img>)}
            </div>
          </section>
          <p className='text-lg p-3 font-semibold md:texl-xl'>{itinerario.hashtags.join(" ")}</p>
        </div>
  )
}

export default Itinerary
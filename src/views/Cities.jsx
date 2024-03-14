import React,{useEffect,useState,useRef} from 'react'
import { getCities } from '../services/cities'
import CityCard from '../components/CityCard'
import { useDispatch, useSelector } from 'react-redux'
import { filtredCities, loadCities } from '../redux/actions/citiesActions'

function Cities() {
  let inputCiudades = useRef(null)
  let dispatch = useDispatch()
  let ciudades = useSelector((store) => store.ciudadesStore.citiesFiltred)

  useEffect(()=> {
    getCities().then((data)=> {
      dispatch(loadCities(data))
    })
  },[])

  function filtroCiudades(){
    dispatch(filtredCities(inputCiudades.current.value))
  }

  let cityCards = ciudades.map((ciudad) => <CityCard key={ciudad._id} ciudad={ciudad}></CityCard>)

  return (
    <>
            <main className="grow flex flex-wrap justify-center gap-5">
                <div className='flex items-center w-full h-96 justify-center xl:h-[500px] flex-wrap'>
                    <img src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQWz3mfrE0TpNrF-Y6aeZ6cPkBAvkAVIuE-VOB4ZXZw2z2My5J6PUnSv7VN6tHwTkXT" className='xl:h-[500px] w-full h-96 object-cover' alt="Imagen de New York" />
                    <section className='flex flex-col gap-5  justify-center mx-2 bg-black text-white rounded px-1 absolute opacity-90'>
                        <h2 className='self-center text-2xl font-bold lg:text-5xl'>Cities</h2>
                        <p className="lg:text-xl">Collection of the most beautiful places and experience</p>
                    </section>
                </div>
                <input placeholder='Search...' className='w-2/4 h-7' type='text' onInput={filtroCiudades} ref={inputCiudades}></input>
                <div className='flex flex-wrap justify-evenly gap-5 pb-5 w-full'>
                {cityCards.length ? cityCards : <h3 className='text-xl font-bold'>Not Found</h3>}
                </div>
            </main>
    </>
  )
}

export default Cities

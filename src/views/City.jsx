import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import {Link as Anchor} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { cityId, loadCities } from '../redux/actions/citiesActions'
import { getCities, getItenerary } from '../services/cities'
import Itinerary from '../components/Itinerary'

function City() {
    const [itinerarios,setItinerarios] = useState([{}])
    let parametro = useParams()
    let dispatch = useDispatch()
    let ciudad = useSelector((store) => store.ciudadesStore.cityById[0])
    useEffect(()=>{
        getCities().then((data)=> {
        dispatch(loadCities(data))
        dispatch(cityId(parametro.id))
        getItenerary(parametro.id).then((e) => setItinerarios(e))
        })
    },[])
    
    
    let ItinerariosSeccion = itinerarios.map((e) => <Itinerary key={Math.random()} itinerario={e}></Itinerary>)
    

  return (
    <section className='grow flex flex-col justify-evenly items-center md:mt-20'>
        <div className='flex flex-col items-center w-full bg-black'>
            <Anchor className='self-start' to={"/cities"}><button className='self-start text-sm md:text-xl bg-white text-black p-2 mb-1 rounded-e'>Back cities</button></Anchor>
            <img className='lg:w-[1024px] object-cover' src={ciudad.image} alt={"Imagen de "+ciudad.name} />
            <h2 className='py-5 text-xl font-semibold underline font-serif text-white md:text-3xl'>{ciudad.name}</h2>
        </div>
        <p className='text-xl font-semibold pt-5'>Ours Itinerarys</p>
        {itinerarios.length > 1 ? ItinerariosSeccion : <p className='text-lg font-bold'>Under construction</p>}
    </section>
  )
}

export default City
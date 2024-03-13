import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { getCityById } from '../services/cities'
import {Link as Anchor} from "react-router-dom"

function City() {
    const [ciudad,setCiudad] = useState({})
    let parametro = useParams()
    useEffect(()=>{
        getCityById(parametro.id).then((e)=> setCiudad(e))
    },[])


  return (
    <section className='grow flex flex-col justify-evenly items-center md:mt-20'>
        <div className='flex flex-col items-center'>
            <Anchor className='self-start' to={"/cities"}><button className='self-start text-sm md:text-xl bg-black text-white p-2 mb-1 rounded-e'>Back cities</button></Anchor>
            <img src={ciudad.image} alt={"Imagen de "+ciudad.name} />
            <h2 className='py-5 text-xl font-semibold underline font-serif'>{ciudad.name}</h2>
        </div>
        <p className='text-lg font-bold'>Under construction</p>
    </section>
  )
}

export default City
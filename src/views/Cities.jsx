import React,{useEffect,useState,useRef} from 'react'
import { getCities } from '../services/cities'
import CityCard from '../components/CityCard'

function Cities() {
  const [ciudades,setCiudades] = useState([])
  const [filtrado,setFiltrado] = useState([])

  useEffect(()=> {
    getCities().then((data)=> {
      setCiudades(data)
      setFiltrado(data)
    })
  },[])

  let inputCiudades = useRef(null)

  function filtroCiudades(){
    let filtrados = filtroName(ciudades,inputCiudades.current.value)
    setFiltrado(filtrados)
  }

  function filtroName(ciudades,valor){
    let filtrado = ciudades.filter( (ciudad) => ciudad.name.toLowerCase().startsWith(valor.toLowerCase().trim()) )
    return filtrado
  }

  let cityCards = filtrado.map((ciudad) => <CityCard key={ciudad._id} ciudad={ciudad}></CityCard>)

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

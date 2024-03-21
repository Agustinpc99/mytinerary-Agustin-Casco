import React,{useState} from 'react'
import {cities} from "../../data/data"
import CarouselItem from './CarouselItem'


function Carousel() {
    const [ciudad1,setCiudad1] = useState(cities[0])
    const [ciudad2,setCiudad2] = useState(cities[1])
    const [ciudad3,setCiudad3] = useState(cities[2])
    const [ciudad4,setCiudad4] = useState(cities[3])
    const [indice1,setIndice1] = useState(0)
    const [indice2,setIndice2] = useState(1)
    const [indice3,setIndice3] = useState(2)
    const [indice4,setIndice4] = useState(3)

    function next(){
        let aux1 = indice1 == 8 ? 0 : indice1+4
        let aux2 = indice2 == 9 ? 1 : indice2+4
        let aux3 = indice3 == 10 ? 2 : indice3+4
        let aux4 = indice4 == 11 ? 3 : indice4+4
        setIndice1(aux1)
        setIndice2(aux2)
        setIndice3(aux3)
        setIndice4(aux4)
        setCiudad1(cities[aux1])
        setCiudad2(cities[aux2])
        setCiudad3(cities[aux3])
        setCiudad4(cities[aux4])
    }
    
    function prev(){
        let aux1 = indice1 == 0 ? 8 : indice1-4
        let aux2 = indice2 == 1 ? 9 : indice2-4
        let aux3 = indice3 == 2 ? 10 : indice3-4
        let aux4 = indice4 == 3 ? 11 : indice4-4
        setIndice1(aux1)
        setIndice2(aux2)
        setIndice3(aux3)
        setIndice4(aux4)
        setCiudad1(cities[aux1])
        setCiudad2(cities[aux2])
        setCiudad3(cities[aux3])
        setCiudad4(cities[aux4])
    }

  return (
    <>
    <h3 className='text-xl font-bold'>Popular Mytineraries</h3>
    <div className='flex'>
        <button className='w-[20%] xl:w-[12%] hover:scale-90' onClick={prev}><img src="/izquierda.png" alt="Flecha anterior" /></button>
        <div className='flex flex-wrap justify-evenly gap-3'>
            <CarouselItem ciudad={ciudad1} ></CarouselItem>
            <CarouselItem ciudad={ciudad2} ></CarouselItem>
            <CarouselItem ciudad={ciudad3} ></CarouselItem>
            <CarouselItem ciudad={ciudad4} ></CarouselItem>
        </div>
        <button className='w-[20%] xl:w-[12%] hover:scale-90' onClick={next}><img src="/derecha.png" alt="Flecha siguiente" /></button>
    </div>
    </>

  )
}

export default Carousel
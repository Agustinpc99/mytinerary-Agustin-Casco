import React, { useEffect, useState } from 'react'
import { getCountries } from '../services/countries'
import {Link as Anchor, useLocation, useNavigate} from "react-router-dom"
import { register } from '../services/authQueries'
import alerts from '../utils/alerts'
function Register() {
    const [paises,setPaises] = useState([])
    const [formulario,setFormulario] = useState({
        first_name : "",
        last_name : "",
        email : "",
        password : "",
        country : ""
    })
    useEffect(()=>{
        getCountries().then((e)=> setPaises(e))
    },[])
    let paisesSelect = paises.map((pais) => <option key={pais} value={pais}>{pais}</option>)
    let navigate = useNavigate()

    function submitPrevent(e) {
        e.preventDefault()
        let aux = {...formulario}
        for(let key in aux){
            if(aux[key] == ""){
                delete aux[key]
            }
        }
        register(aux).then(e => {
            if(e.status == 201){
                alerts.success("Register Complete")
                navigate("/login")
            } else ( alerts.error(e.statusMsg))
        })
    }
    
    function inputRescue(e){
        let nombre = e.target.name
        let valor = e.target.value
        let aux = {...formulario}
        aux[nombre] = valor
        setFormulario(aux)
    }

  return (
    <div className='flex flex-col grow justify-center items-center md:mt-10 xl:mt-0'>
        <div className='bg-black w-3/4 h-[65vh] xl:h-[70vh] xl:mt-20 flex justify-center items-center rounded-lg'>
        <form onSubmit={submitPrevent} onInput={inputRescue} className='flex flex-col justify-center items-center gap-8 md:w-2/4' action="">
            <input className='rounded ps-1 w-full lg:h-8 xl:h-12 xl:text-xl' type="text" name='first_name' placeholder='First Name' />
            <input className='rounded ps-1 w-full lg:h-8 xl:h-12 xl:text-xl' type="text" name='last_name' placeholder='Last Name' />
            <input className='rounded ps-1 w-full lg:h-8 xl:h-12 xl:text-xl' type="text" name='email' placeholder='E-Mail' />
            <input className='rounded ps-1 w-full lg:h-8 xl:h-12 xl:text-xl' type="password" name='password' placeholder='Password' />
            <input className='rounded ps-1 w-full lg:h-8 xl:h-12 xl:text-xl' type="text" name='image' placeholder='URL Image' />
            <select className='w-[185px] md:w-full lg:h-8 xl:h-12 xl:text-xl rounded' defaultValue={"asd"} name="country" id="">
                <option value="asd" disabled>Select a country</option>
                {paisesSelect}
            </select>
            <button className='bg-white p-2 rounded font-semibold text-xl'>Create Account</button>
            <Anchor to={"/login"} className='bg-white p-2 rounded font-semibold text-xl'>Sing in</Anchor>
        </form>
        </div>
    </div>
  )
}

export default Register

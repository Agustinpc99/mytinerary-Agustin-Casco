import React, { useState } from 'react'
import {Link as Anchor, useLocation, useNavigate} from "react-router-dom"
import authQueries from "../services/authQueries"
import alerts from '../utils/alerts'
import { useDispatch } from 'react-redux'
import { login } from '../redux/actions/userActions'

function Login() {
    const [dataLogin, setDataLogin] = useState({
        email : "",
        password : ""
    })
    let navigate = useNavigate()
    let dispatch = useDispatch()

    function logearse(e){
        e.preventDefault()
        let aux = {...dataLogin}
        authQueries.login(aux).then(e => {
            if(e.status == 200){
                alerts.success("Log In Success")
                dispatch(login(e.data))
                localStorage.setItem("token",e.data.token)
                navigate("/")
            } else {
                alerts.error(e.statusMsg)
            }
        })

    }

    function inputRescue(e){
        let nombre = e.target.name
        let valor = e.target.value
        let aux = {...dataLogin}
        aux[nombre] = valor
        setDataLogin(aux)
    }


  return (
    <div className='flex flex-col grow justify-center items-center'>
        <div className='bg-black w-3/4 xl:w-2/4 h-[35vh] xl:h-[45vh] xl:mt-20 flex justify-center items-center rounded-lg'>
        <form onSubmit={logearse} onInput={inputRescue}  className='flex flex-col justify-center items-center gap-8 md:w-2/4' action="">
            <input className='rounded ps-1 w-full lg:h-8 xl:h-12 xl:text-xl' type="text" name='email' placeholder='E-Mail' />
            <input className='rounded ps-1 w-full lg:h-8 xl:h-12 xl:text-xl' type="password" name='password' placeholder='Password' />
            <button className='bg-white p-2 rounded font-semibold text-xl'>Log In</button>
            <Anchor to={"/register"} className='bg-white p-2 rounded font-semibold text-xl'>Sing Up</Anchor>
        </form>
        </div>
    </div>
  )
}

export default Login
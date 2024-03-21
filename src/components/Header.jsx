import { useEffect, useState } from "react"
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import {Link as Anchor, useLocation} from "react-router-dom"
import { logout } from "../redux/actions/userActions"

function Header() {
  const [estado, setEstado] = useState(null)
  let user = useSelector(store => store.userStore.user)
  let dispatch = useDispatch()
  let clases = []
  let location = useLocation()

  if(location.pathname == "/"){
    clases = ["border p-1 bg-black text-white rounded lg:p-2 lg:font-semibold max-md:self-center","border p-1 bg-white text-black rounded lg:p-2 lg:font-semibold max-md:self-center"]
  } else if(location.pathname == "/cities") {
    clases = ["border p-1 bg-white text-black rounded lg:p-2 lg:font-semibold max-md:self-center","border p-1 bg-black text-white rounded lg:p-2 lg:font-semibold max-md:self-center"]
  } else {clases = ["border p-1 bg-white text-black rounded lg:p-2 lg:font-semibold max-md:self-center","border p-1 bg-white text-black rounded lg:p-2 lg:font-semibold max-md:self-center"]}


  function logOut(){
    dispatch(logout())
    setEstado(null)
  }

  function closeButt(){
    setEstado(null)
  }
  
  function logSing(){
    if(estado){
      setEstado(null)
    } else if(!estado && !user.first_name) {
      setEstado(<>
        <div className="flex max-md:flex-col text-xs gap-3 md:text-2xl lg:text-3xl">
          <Anchor onClick={closeButt} to={"/login"} className="border p-1 max-md:h-6 bg-white text-black rounded lg:p-2 lg:font-semibold hover:scale-105">SingIn</Anchor>
          <Anchor onClick={closeButt} to={"/register"} className="border p-1 max-md:h-6 bg-white text-black rounded lg:p-2 lg:font-semibold hover:scale-105">SingUp</Anchor>
        </div>
      </>)
    } else if (user.first_name){
      setEstado(<><button onClick={logOut} className="border p-1 bg-red-800 text-white rounded lg:p-2 lg:font-semibold hover:scale-105">LogOut</button></>)
    }
    
  }

  return (
    <>
    <header className="flex bg-black text-white py-3 px-1 items-center md:px-3 fixed w-full z-10 opacity-95">
          <h1 className="text-xl md:text-3xl lg:text-5xl">My Tinerary</h1>
          <div className="grow"></div>
          <nav className="flex gap-3 md:text-2xl lg:text-3xl ">
            <Anchor className={clases[0] + " hover:scale-105"} to="/">Home</Anchor>
            <Anchor className={clases[1] + " hover:scale-105"} to="/cities">Cities</Anchor>
            {estado}<button className="border bg-white rounded hover:scale-105" onClick={logSing}><img className='h-6 md:h-9 w-8 md:w-12' src={user.image ? user.image : "https://icons.veryicon.com/png/o/miscellaneous/domain-icons/my-account-login.png"} alt="" /></button>
          </nav>
        </header>
    </>
  )
}

export default Header
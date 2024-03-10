import React from 'react'
import {Link as Anchor, useLocation} from "react-router-dom"

function Header() {
  let clases = []
  if(useLocation().pathname == "/"){
    clases = ["border p-1 bg-black text-white rounded lg:p-2 lg:font-semibold","border p-1 bg-white text-black rounded lg:p-2 lg:font-semibold"]
  } else if(useLocation().pathname == "/cities") {
    clases = ["border p-1 bg-white text-black rounded lg:p-2 lg:font-semibold","border p-1 bg-black text-white rounded lg:p-2 lg:font-semibold"]
  }
  return (
    <>
    <header className="flex bg-black text-white py-3 px-1 items-center md:px-3 fixed w-full">
          <h1 className="text-xl md:text-3xl lg:text-5xl">My Tinerary</h1>
          <div className="grow"></div>
          <nav className="flex gap-3 md:text-2xl lg:text-3xl">
            <Anchor className={clases[0]} to="/">Home</Anchor>
            <Anchor className={clases[1]} to="/cities">Cities</Anchor>
            <Anchor className="border p-1 bg-white text-black rounded lg:p-2 lg:font-semibold" to="#"><img className='h-6 md:h-9' src="https://icons.veryicon.com/png/o/miscellaneous/domain-icons/my-account-login.png" alt="" /></Anchor>
          </nav>
        </header>
    </>
  )
}

export default Header
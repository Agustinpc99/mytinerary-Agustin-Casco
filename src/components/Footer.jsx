import React from 'react'
import {Link as Anchor, useLocation} from "react-router-dom"

function Footer() {
  return (
    <>
    <footer className="flex bg-black text-white py-3 px-1 items-center justify-evenly">
        <div>
          <nav className='flex flex-col gap-3'>
            <a href=""><img className='h-6 md:h-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png" alt="" /></a>
            <a href=""><img className='h-6 md:h-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="" /></a>
            <a href=""><img className='h-6 md:h-10' src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png" alt="" /></a>
          </nav>
        </div>
        <div>
          <nav className='flex flex-col gap-3 md:text-2xl'>
            <Anchor className='border-b-2' to="/">Home</Anchor>
            <Anchor className='border-b-2' to="/cities">Cities</Anchor>
            <Anchor className='border-b-2' to="/policy">policy</Anchor>
          </nav>
        </div>
    </footer>
    </>
  )
}

export default Footer
import React from 'react'
import Header from './Header'
import Footer from './Footer'

function LayoutMain(props) {
  return (
    <>
    <div className="flex flex-col min-h-screen bg-slate-200">
        <Header></Header>
        {props.children}
        <Footer></Footer>
    </div>
    </>
  )
}

export default LayoutMain
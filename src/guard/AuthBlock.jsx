import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

function AuthBlock() {
    let user = useSelector((store) => store.userStore.user)
    return user.first_name ? <Navigate to={"/"}></Navigate> : <Outlet></Outlet>
}
    

export default AuthBlock
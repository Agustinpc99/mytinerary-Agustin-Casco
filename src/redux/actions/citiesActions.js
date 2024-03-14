import { createAction } from "@reduxjs/toolkit";

export const loadCities = createAction("loadCities", (ciudades) => {
    return {
        payload : ciudades
    }
})

export const filtredCities = createAction("filtredCities",(value)=>{
    return {
        payload : value
    }
})

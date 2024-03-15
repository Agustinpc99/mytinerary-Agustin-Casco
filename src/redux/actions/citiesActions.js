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

export const cityId = createAction("cityId",(id)=>{
    return {
        payload : id
    }
})
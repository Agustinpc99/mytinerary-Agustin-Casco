import { createReducer } from "@reduxjs/toolkit";
import { filtredCities, loadCities } from "../actions/citiesActions";

const initialState = {
    cities: [],
    citiesFiltred : []
}


let reducer = createReducer(initialState,(builder) => {
    builder.addCase(loadCities, (state,action) => {
        return {...state, cities : action.payload, citiesFiltred : action.payload}
    }).addCase(filtredCities,(state,action)=>{
        let filtrado = state.cities.filter( (ciudad) => ciudad.name.toLowerCase().startsWith(action.payload.toLowerCase().trim()) )
        return {...state, citiesFiltred : filtrado}
    })
})

export default reducer
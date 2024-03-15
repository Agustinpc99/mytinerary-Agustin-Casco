import { createReducer } from "@reduxjs/toolkit";
import { cityId, filtredCities, loadCities } from "../actions/citiesActions";

const initialState = {
    cities: [],
    citiesFiltred : [],
    cityById : [{}]
}


let reducer = createReducer(initialState,(builder) => {
    builder.addCase(loadCities, (state,action) => {
        return {...state, cities : action.payload, citiesFiltred : action.payload}
    }).addCase(filtredCities,(state,action)=>{
        let filtrado = state.cities.filter( (ciudad) => ciudad.name.toLowerCase().startsWith(action.payload.toLowerCase().trim()) )
        return {...state, citiesFiltred : filtrado}
    }).addCase(cityId,(state,action) => {
        let city = state.cities.filter((ciudad) => ciudad._id == action.payload )
        return {...state, cityById : city}
    })
})

export default reducer
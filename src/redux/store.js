import { configureStore } from "@reduxjs/toolkit";
import ciudadesReducer from "./reducers/citiesReducer"

export default configureStore({
    reducer: {
        ciudadesStore : ciudadesReducer
    }
})
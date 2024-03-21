import { configureStore } from "@reduxjs/toolkit";
import ciudadesReducer from "./reducers/citiesReducer"
import userReducer from "./reducers/userReducer"

export default configureStore({
    reducer: {
        ciudadesStore : ciudadesReducer,
        userStore : userReducer
    }
})
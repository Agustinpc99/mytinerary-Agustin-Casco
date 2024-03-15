import axios from "axios"

export async function getCities(){
    let response = await axios.get("http://localhost:4000/api/cities")
    return response.data.data
}

export async function getCityById(id){
    let response = await axios.get("http://localhost:4000/api/cities/"+id)
    return response.data.data
}


export async function getItenerary(id){
    let response = await axios.get("http://localhost:4000/api/itineraries/city/"+id)
    return response.data.data
}
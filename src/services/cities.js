import axios from "axios"

export async function getCities(){
    let response = await axios.get("http://localhost:4000/api/cities")
    return response.data.data
}

getCities()
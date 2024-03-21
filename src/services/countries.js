import axios from "axios"

export async function getCountries(){
    let response = await axios.get("https://restcountries.com/v3.1/all?fields=name")
    let countries = response.data.map((e) => e.name.common)
    return countries.sort()
}
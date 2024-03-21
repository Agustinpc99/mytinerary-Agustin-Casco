import axios from "axios";

export async function register(data){
    try {
        let response = await axios.post("http://localhost:4000/api/auth/register",data)
        return response.data
    } catch (error) {
        return null
    }
}

async function login(data){
    try {
        let response = await axios.post("http://localhost:4000/api/auth/login",data)
        return response.data
    } catch (error) {
        return null
    }
}

async function loginWithToken(){
    try {
        let token = localStorage.getItem("token")
        let response = await axios.post("http://localhost:4000/api/auth/token",{},{
            headers : {Authorization : `Bearer ${token}`} 
        })
        return response.data
    } catch (error) {
        return null
    }
}

export default {register,login,loginWithToken}
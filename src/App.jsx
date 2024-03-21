import { Provider, useDispatch } from "react-redux"
import LayoutMain from "./components/LayoutMain"
import Cities from "./views/Cities"
import City from "./views/City"
import Home from "./views/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import store from "./redux/store"
import Login from "./views/Login"
import Register from "./views/Register"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react"
import authQueries from "./services/authQueries"
import alerts from "./utils/alerts"
import { login } from "./redux/actions/userActions"
import AuthBlock from "./guard/AuthBlock"

function App() {
  let dispatch = useDispatch()
  useEffect(()=>{
    authQueries.loginWithToken().then((e)=> {
      if(e.status == 200){
        dispatch(login(e.data))
        alerts.success("Welcome "+ e.data.first_name)
      }
    } )
  },[])

  return (
    <>
    <BrowserRouter>
        <LayoutMain>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/cities" element={<Cities></Cities>}></Route>
            <Route path="/cities/:id" element={<City></City>}></Route>
            <Route element={<AuthBlock></AuthBlock>}>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route path="/register" element={<Register></Register>}></Route>
            </Route>
          </Routes>
        </LayoutMain>
      <ToastContainer />
    </BrowserRouter>
    </>
  )
}

export default App

function Policy({titulo}) {

  return <h1 className="grow pt-20"> {titulo} </h1>
}
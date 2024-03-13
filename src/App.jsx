import LayoutMain from "./components/LayoutMain"
import Cities from "./views/Cities"
import City from "./views/City"
import Home from "./views/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {

  return (
    <>
    <BrowserRouter>
    <LayoutMain>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cities" element={<Cities></Cities>}></Route>
        <Route path="/cities/:id" element={<City></City>}></Route>
        <Route path="/policy" element={<h1 className="grow">asd</h1>}></Route>
      </Routes>
      </LayoutMain>
    </BrowserRouter>
    </>
  )
}

export default App

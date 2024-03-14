import { Provider } from "react-redux"
import LayoutMain from "./components/LayoutMain"
import Cities from "./views/Cities"
import City from "./views/City"
import Home from "./views/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import store from "./redux/store"

function App() {

  return (
    <>
    <BrowserRouter>
      <Provider store={store}>
        <LayoutMain>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/cities" element={<Cities></Cities>}></Route>
            <Route path="/cities/:id" element={<City></City>}></Route>
            <Route path="/policy" element={<h1 className="grow">asd</h1>}></Route>
          </Routes>
        </LayoutMain>
      </Provider>
    </BrowserRouter>
    </>
  )
}

export default App

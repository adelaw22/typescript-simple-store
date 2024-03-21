import { Outlet } from "react-router-dom"
import Navbar from "./components/NavBar/NavBar"
import FooterSect from "./components/footerSect/footer"


function App() {
 
  return (
    <div className="App">
      <Navbar/>
      
      {/* Outlet to other pages */}
      <Outlet/>

      {/* Web footer */}
      <FooterSect/>
  
    </div>
  )
}

export default App

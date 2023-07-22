import { Outlet } from "react-router-dom"
import Navbar from "./components/NavBar"


function App() {
 
  return (
    <div className="App">
      <Navbar/>
      
      {/* Outlet to other pages */}
      <Outlet/>
  
    </div>
  )
}

export default App

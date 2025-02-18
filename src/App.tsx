import { Outlet } from "react-router-dom"
import Navbar from "./components/NavBar"
import FooterSect from "./components/footerSect/footer"
import { Analytics } from '@vercel/analytics/react';

function App() {
 
  return (
    <div className="App">
      <Navbar/>
      
      {/* Outlet to other pages */}
      <Outlet/>

      {/* Web footer */}
      <FooterSect/>
    <Analytics/>
    </div>
  )
}

export default App

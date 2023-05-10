import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/NavBar"
import HomePage from "./routes/homePage";
import ProductPage from "./routes/productPage";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "product",
      element: <ProductPage/>,
    },
  ]);

  return (
    <div className="App">
    <Navbar/>
     <div className="container mx-auto my-12">
       <RouterProvider router={router} />
     </div>
    </div>
  )
}

export default App

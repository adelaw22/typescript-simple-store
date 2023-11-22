import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App'
import HomePage from './routes/homePage';
import ShopPage from "./routes/shopPage";
import ProductPage from "./routes/productPage";
import CartPage from "./routes/cart"

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index:true,
        element: <HomePage/>,
      },
      {
        path: "/shop",
        element: <ShopPage/>,
      },
      {
        path: "product",
        element: <ProductPage/>,
      },
      {
        path:'cart',
        element:<CartPage/>
      }
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

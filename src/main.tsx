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
import './index.css'
import { store } from './store'
import { Provider } from 'react-redux';

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
        path: "shop",
        element: <ShopPage/>,
      },
      {
        path: "product",
        element: <ProductPage/>,
      }
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

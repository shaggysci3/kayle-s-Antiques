
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { Outlet } from "react-router-dom";
import "./App.css"
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import Shop from "./routes/Shop";



const App = () =>{
 
  return(
    <>
    
      <Navbar/>
      <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    
    
    element: <App/>,
  errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },{
        path:"/Shop",
        element:<Shop/>
      }
      
      
      
    ]
  }
  
  

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

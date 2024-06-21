
import * as React from "react";
import { useState } from 'react';
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
import Wares from "./components/Wares";
import Footer from "./components/Footer";
import StoreItem from "./routes/StoreItem";



const App = () =>{
  
 
  return(
    <>
    <div className="siteContainer">
      <Navbar/> 
      <Wares/>
      <Footer/>
    </div>
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
      },{
        path:"/Item/:id",
        element:<StoreItem/>
      },
      
      
      
    ]
  }
  
  

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

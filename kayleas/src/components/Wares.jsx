import { Outlet } from "react-router"
import SmallProduct from "./SmallProduct"
import { useState } from "react"

const Wares = () =>{

  // this component is the "server" Data if this website had a back end

  const[waresData,setWaresData]= useState([

    {
      id:"1",
      img:"https://cdn.pixilart.com/photos/large/af39a9b6d3d23ed.png",
      name:"chair"
    },
    {
      id:"2",
      img:"https://art.pixilart.com/sr251db88fa39aws3.png",
      name:"saxophone"
    },
    {
      id:"3",
      img:"https://cdn.pixilart.com/photos/large/529e437ee65603e.png",
      name:"seregios"
    },
    {
      id:"4",
      img:"https://art.pixilart.com/sr22fec27a4daaws3.png",
      name:"druid"
    },
  ])
    return(
      <>
      
       <Outlet context={[waresData,setWaresData]}/>
      </>
    )
  }
  export default Wares
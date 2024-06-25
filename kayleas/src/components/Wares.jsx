import { Outlet, json } from "react-router"
import SmallProduct from "./SmallProduct"
import { useEffect, useState } from "react"

const Wares = () =>{
  
  const [cartData,setCartData]=useState([])
  
  const [allProducts,setAllProducts]=useState();
    
  useEffect(() => {
    console.log(allProducts)
  }, [allProducts]);


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://birds-ub6e.onrender.com/products");
      const ProductArr = await response.json();
      setAllProducts(ProductArr);
      console.log("these are from the database"+ProductArr)
    };
    fetchProducts().catch(console.error);
  }, []);


  useEffect(() => {
    sessionStorage.setItem('token', JSON.stringify(cartData))
  }, []); 
  // this component is the "server" Data if this website had a back end

  const[waresData,setWaresData]= useState([

    {
      id:"1",
      img:"https://cdn.pixilart.com/photos/large/af39a9b6d3d23ed.png",
      name:"chair",
      price:60,
      info:"this is a really nice chair much comfy very fun",
      stars:[5,4,5],
    },
    {
      id:"2",
      img:"https://art.pixilart.com/sr251db88fa39aws3.png",
      name:"saxophone",
      price:50,
      info:"this is a really nice chair much comfy very fun",
      stars:[5,2,1],
    },
    {
      id:"3",
      img:"https://cdn.pixilart.com/photos/large/529e437ee65603e.png",
      name:"seregios",
      price:170,
      info:"this is a really nice chair much comfy very fun",
      stars:[5,5,5],
    },
    {
      id:"4",
      img:"https://art.pixilart.com/sr22fec27a4daaws3.png",
      name:"druid",
      price:20,
      info:"this is a really nice chair much comfy very fun",
      stars:[4,4,4],
    },
    {
      id:"5",
      img:"https://art.pixilart.com/sr2f33ae501e7aws3.png",
      name:"apple",
      price:100,
      info:"this is a really nice chair much comfy very fun",
      stars:[0,0,0],
    },
    {
      id:"6",
      img:"https://art.pixilart.com/sr28c18fb94f3aws3.png",
      name:"scoll",
      price:130,
      info:"this is a really nice chair much comfy very fun",
      stars:[5,4,2],
    },
    {
      id:"7",
      img:"https://art.pixilart.com/sr22fec27a4daaws3.png",
      name:"druid",
      price:17,
      info:"this is a really nice chair much comfy very fun",
      stars:[5,4,2],
    },
    {
      id:"8",
      img:"https://art.pixilart.com/sr251db88fa39aws3.png",
      name:"saxophone",
      price:8,
      info:"this is a really nice chair much comfy very fun",
      stars:[5,4,2],
    },
    {
      id:"9",
      img:"https://cdn.pixilart.com/photos/large/529e437ee65603e.png",
      name:"seregios",
      price:70,
      info:"this is a really nice chair much comfy very fun",
      stars:[5,4,2],
    },
    {
      id:"10",
      img:"https://art.pixilart.com/sr22fec27a4daaws3.png",
      name:"druid",
      price:10,
      info:"this is a really nice chair much comfy very fun",
      stars:[5,4,2],
    },
  ])
  //  getting product data

    return(
      <>
      
       <Outlet context={[waresData,setWaresData,allProducts]}/>
      </>
    )
  }
  export default Wares
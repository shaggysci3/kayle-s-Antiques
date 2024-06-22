import { useState } from "react"
import SmallProduct from "../components/SmallProduct"

const Cart = () =>{
 const cartString = sessionStorage.getItem('token')
 const[ currentCart,setCurrentCart] = useState(JSON.parse(cartString))

    function handleClick(){
        console.log(currentCart)
    }

    const product = currentCart.map((cart,index)=>{
        return <SmallProduct key={index} img={cart.img} name={cart.name}/>
      })
 
   

    return(
      <>
      <div style={{color:'black'}}>
        <h1> this is the cart</h1>
        {product}
        <button onClick={handleClick}>click me</button>
      </div>
        
      </>
    )
  }
  export default Cart
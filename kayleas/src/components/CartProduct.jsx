import { useState } from "react"
import { useOutletContext } from "react-router";

const CartProduct = ({img,name,index,price}) =>{
 const[isHovered,setIsHovered] = useState(false);
 const[showInfo,setShowInfo] =useState(false);
 const [waresData]=useOutletContext()



 function handleDelete(){
  const cart = sessionStorage.getItem('token')
  let addToCart = cart ? JSON.parse(cart) : [] ;
  addToCart.push(filteredProducts[0])
  sessionStorage.setItem('token', JSON.stringify(addToCart))
  console.log(sessionStorage.getItem('token'))
  
}
function handleClick(){
  console.log(index)
  const cart = sessionStorage.getItem('token')
  let addToCart = cart ? JSON.parse(cart) : [] ;
  addToCart.splice(index,1)
  console.log("this is what is left int he car: ",addToCart)
  sessionStorage.setItem('token', JSON.stringify(addToCart))
  console.log(sessionStorage.getItem('token'))
}


  
 function handleMouseOver(){
  setIsHovered(true)
 }
 function handleMouseOut(){
  setIsHovered(false)
 }

    return(
      <>
      <div onClick={handleClick} className="closeButton">X
      </div>
      <div style={{borderBottom:"solid rgba(0,0,0,0.5)"}} className="container">

      <div
        className="cartProduct"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
        <img  className="ProductImg-S" src={img}></img>
      </div>
        <h1 className="cartName">{name}</h1>
        <h2 className="cartPrice">{price}$</h2>
          </div>
      
        
      </>
    )
  }
  export default CartProduct
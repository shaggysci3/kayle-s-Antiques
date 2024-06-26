import { useState } from "react"
import { useOutletContext, useParams } from "react-router"

const StoreItem = () =>{
   const [waresData]=useOutletContext()
   const {id} = useParams();

   const filteredProducts = waresData.filter(product=>{
    return product.id ===id;
   })
   function handleClick(){
    console.log(filteredProducts[0].id
    )
   }
   const style ={color:'black'

   }
   function handlePurchase(){
     const cart = sessionStorage.getItem('token')
     let addToCart = cart ? JSON.parse(cart) : [] ;
     addToCart.push(filteredProducts[0])
     sessionStorage.setItem('token', JSON.stringify(addToCart))
     console.log(sessionStorage.getItem('token'))
     
   }
   

    return(
      <>
      <div id="pagecontainer" className="productPage">
        <div className="topContainer">
            <div className="ProductDisplay">
                <img className="displayImg" src={filteredProducts[0].img}></img>
            </div>
            <div className="displayInfo">
                <div>
                <h1 style={style}>{filteredProducts[0].name}</h1>
                <h2>Price "price"</h2>
                <p>this is a description that will be in the wares file that holds all of the data that the seller wants</p>
                </div>
                <div className="purchase">
                  <div className="purchaseItem" onClick={handlePurchase}>
                    <p>Add to Cart</p>
                  </div>
                    
                </div>
            </div>
        </div>
        <div className="botContainer">
            <div className="reviews">
                <h1 style={{color:'black'}}>reviews</h1>
            </div>

        </div>
      </div>
        
      </>
    )
  }
  export default StoreItem
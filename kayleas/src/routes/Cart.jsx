import { useEffect, useState } from "react"
import SmallProduct from "../components/SmallProduct"

const Cart = () =>{
 const cartString = sessionStorage.getItem('token')
 const[ currentCart,setCurrentCart] = useState(JSON.parse(cartString))
 const [birds,setBirds]=useState([])

    function handleClick(){
        console.log(birds)
    }

    const product = currentCart.map((cart,index)=>{
        return <SmallProduct key={index} img={cart.img} name={cart.name}/>
      })


      // testing APi pulls
      
      useEffect(() => {  
        const fetchBirds = async () => {
          const response = await fetch("https://birds-ub6e.onrender.com/birds");
          const BirdArr = await response.json();
          setBirds(BirdArr);
        };
        fetchBirds().catch(console.error);
      }, []);
   

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
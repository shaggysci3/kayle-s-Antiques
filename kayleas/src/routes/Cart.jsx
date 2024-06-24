import { useEffect, useState } from "react";
import SmallProduct from "../components/SmallProduct";
import io from "socket.io-client";
import CartProduct from "../components/CartProduct";

const Cart = () => {
  const getCartFromStorage = () => {
    const cartString = sessionStorage.getItem('token');
    return JSON.parse(cartString) || [];
};
  const [currentCart, setCurrentCart] = useState(getCartFromStorage);
  const [birds, setBirds] = useState([]);
  
  useEffect(() => {
    // Handle changes within the same tab by overriding sessionStorage.setItem
    const originalSetItem = sessionStorage.setItem;

    sessionStorage.setItem = function(key) {  //add function to setitem that says if key is 'token' update state
        originalSetItem.apply(this, arguments);
        if (key === 'token') {
            setCurrentCart(getCartFromStorage());
        }
    };

    return () => {
        sessionStorage.setItem = originalSetItem; // Restore original setItem on unmount
    };
}, []); // Empty dependency array ensures this effect runs only once

  

  
  
  const product = currentCart.map((cart, index) => {
    return <CartProduct key={index} img={cart.img} name={cart.name} index={index} price={cart.price}/>;
  });
  
  // Fetch birds from API
  useEffect(() => {
    const fetchBirds = async () => {
      const response = await fetch("https://birds-ub6e.onrender.com/birds");
      const BirdArr = await response.json();
      setBirds(BirdArr);
    };
    fetchBirds().catch(console.error);
  }, []);
  
  function handleClick() {
    
   
  };
  function handleChange(e){
    
    
  }

  return (
    <div style={{ color: 'black' }}>
      
      {product}
     
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Cart;

import { useEffect, useState } from "react";
import SmallProduct from "../components/SmallProduct";
import io from "socket.io-client";
import CartProduct from "../components/CartProduct";
import { useOutletContext } from "react-router";

const Cart = () => {
  const getCartFromStorage = () => {
    const cartString = sessionStorage.getItem('token');
    return JSON.parse(cartString) || [];
};
  const [currentCart, setCurrentCart] = useState(getCartFromStorage);
  const [birds, setBirds] = useState([]);
  const[waresData,setWaresData,allProducts]=useOutletContext()
  
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

    
}, []); 

//  getting product data
const [products,setProducts]=useState();
  
useEffect(() => {
  const fetchProducts = async () => {
    const response = await fetch("https://birds-ub6e.onrender.com/products");
    const ProductArr = await response.json();
    setProducts(ProductArr);
  };
  fetchProducts().catch(console.error);
}, []);


  

  
  
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
    console.log("product is:"+allProducts[0].name)
    
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

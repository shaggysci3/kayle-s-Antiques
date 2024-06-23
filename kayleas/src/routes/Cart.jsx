import { useEffect, useState } from "react";
import SmallProduct from "../components/SmallProduct";
import io from "socket.io-client";

const Cart = () => {
  const cartString = sessionStorage.getItem('token');
  const [currentCart, setCurrentCart] = useState(JSON.parse(cartString));
  const [birds, setBirds] = useState([]);
  const [socket, setSocket] = useState(null);
  const [value,setValue]=useState("")
  const[socketMsg,setSocketMsg]=useState()

  useEffect(() => {
    // Create the WebSocket connection with appropriate options
    const newSocket = io("https://birds-ub6e.onrender.com", {
      transports: ['websocket'], // Force WebSocket transport
      path: "/socket.io", // Ensure the correct path is used if your server has a custom path
      withCredentials: true // Ensure CORS is correctly handled
    });
    setSocket(newSocket);

    // Event listeners
    newSocket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    newSocket.on('message', (msg) => {
      console.log('Message received:', msg);
      setSocketMsg(msg)
      // Update birds state with incoming messages if needed
      // setBirds((prevBirds) => [...prevBirds, msg]);
    });

    newSocket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    // Cleanup on component unmount
    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleClick = () => {
    console.log(birds);
    if (socket) {
      console.log("msg sent")
      socket.emit('message', `this client says: ${value}`); // Example message
    } else {
      console.error('Socket not initialized');
    }
  };

  const product = currentCart.map((cart, index) => {
    return <SmallProduct key={index} img={cart.img} name={cart.name} />;
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

  function handleChange(e){
    setValue(e.target.value)
    
  }

  return (
    <div style={{ color: 'black' }}>
      <h1>This is the cart and the user says {socketMsg}</h1>
      {product}
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Cart;

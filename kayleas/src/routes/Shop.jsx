import { useOutletContext } from "react-router"
import SmallProduct from "../components/SmallProduct"
import Product from "../components/Product"
import { useEffect, useState } from "react"

const Shop = () =>{
  const[waresData]=useOutletContext()
  const [isFixed, setIsFixed] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  


  const handleScroll = () => {
    const stickyPoint = 300; // Adjust this value to the scroll point you want
    if (window.scrollY > stickyPoint) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const product = waresData.map(ware=>{
    return <Product key={ware.id} img={ware.img} name={ware.name}/>
  })

  function handleChange(e){
    setSelectedOption(e.target.value);

  }

 
    return(
      <>
      <div className="verticalContainer" >
        <div className="verticalContainer">
        </div>
        <div className="verticalContainer">
            <h1>product showcase</h1>
        <div className={`relative-div ${isFixed ? 'fixed' : ''}`} id="stickyDiv">
        I become fixed after scrolling!
        <select value={selectedOption} onChange={handleChange}>
          <option value="">--Please Select a Filter--</option>
          <option value="mostPopular">Most Popular</option>
          <option value="">Most Popular</option>
        </select>
      </div>
            <div className="gridContainer">
                
                {product}
                
            </div>

        </div>

      </div>  
      </>
    )
  }
  export default Shop
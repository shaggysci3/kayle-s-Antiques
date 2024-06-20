import { useOutletContext } from "react-router"
import SmallProduct from "../components/SmallProduct"
import Product from "../components/Product"
import { useEffect, useState } from "react"

const Shop = () =>{
  const[waresData]=useOutletContext()
  const [isFixed, setIsFixed] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptionTwo, setSelectedOptionTwo] = useState('');
  


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
    return <Product key={ware.id} img={ware.img} name={ware.name} id={ware.id}/>
  })

  function handleChange(e){
    setSelectedOption(e.target.value);
  }
  function handleChangeTwo(e){
    setSelectedOptionTwo(e.target.value);
  }

 
    return(
      <>
      <div className="verticalContainer" >
        
        <div className="verticalContainer">
            <h1 >product showcase</h1>
        <div className={`sticky-div ${isFixed ? 'fixed' : ''}`} id="stickyDiv">
        Filters
        <div className="container">
          <select className="selectBox" value={selectedOption} onChange={handleChangeTwo}>
          <option value="">--Price $--</option>
          <option value="mostPopular">high to low</option>
          <option value="">low to high</option>
        </select>
        <select className="selectBox" value={selectedOptionTwo} onChange={handleChangeTwo}>
          <option value="">--Likes--</option>
          <option value="mostPopular">high to low</option>
          <option value="">low to high</option>
        </select>
        </div>
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
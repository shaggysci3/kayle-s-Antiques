import { useOutletContext } from "react-router"
import SmallProduct from "../components/SmallProduct"
import Product from "../components/Product"
import { useEffect, useState } from "react"

const Shop = () =>{
  const[waresData]=useOutletContext()
  const [isFixed, setIsFixed] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptionTwo, setSelectedOptionTwo] = useState('');
  const[sorted,setSorted]=useState(structuredClone(waresData))
  


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

  
  function handleChange(e){
    setSelectedOption(e.target.value);
    const sortedPrices = structuredClone(waresData);

    switch (e.target.value){
      case "priceHigh":
        const sortedHigh = sortedPrices.sort(function(a, b){
          return parseFloat(a.price) - parseFloat(b.price);
        });
        setSorted(sortedHigh);
        break;
      case "priceLow":
        const sortedLow = sortedPrices.sort(function(a, b){
          return  parseFloat(b.price) - parseFloat(a.price);
        });
        setSorted(sortedLow);
        break;
      default:
        setSorted(waresData);


    }
  }
  function handleChangeTwo(e){
    setSelectedOptionTwo(e.target.value);
  }
  function handleSortClick(){
    const sortedPrices = structuredClone(waresData);
    const sortedData = sortedPrices.sort(function(a, b){
      return parseFloat(a.price) - parseFloat(b.price);
    });
    setSorted(sortedData);
  }
  const product = sorted.map(ware=>{
    return <Product key={ware.id} img={ware.img} name={ware.name} id={ware.id} price={ware.price}/>
  })
  
 
    return(
      <>
      <div className="verticalContainer" >
        
        <div className="verticalContainer">
            <h1 >product showcase</h1>
            {/* <button onClick={handleSortClick}>print sorted Data</button> */}
        <div className={`sticky-div ${isFixed ? 'fixed' : ''}`} id="stickyDiv">
        Filters
        <div className="container">
          <select className="selectBox" value={selectedOption} onChange={handleChange}>
          <option value="">--Price $--</option>
          <option value="priceHigh">high to low</option>
          <option value="priceLow">low to high</option>
        </select>
        <select className="selectBox" value={selectedOptionTwo} onChange={handleChangeTwo}>
          <option value="">--Likes--</option>
          <option value="LikesHigh">high to low</option>
          <option value="LikesLow">low to high</option>
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
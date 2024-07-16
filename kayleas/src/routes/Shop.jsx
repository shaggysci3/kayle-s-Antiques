import { useOutletContext } from "react-router"
import SmallProduct from "../components/SmallProduct"
import Product from "../components/Product"
import { useEffect, useState } from "react"

const Shop = () =>{
  const[waresData,setWaresData,allProducts]=useOutletContext()
  const [isFixed, setIsFixed] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptionTwo, setSelectedOptionTwo] = useState('');
  const[sorted,setSorted]=useState(structuredClone(waresData))
  


  const handleScroll = () => {
    const stickyPoint = 190; // Adjust this value to the scroll point you want
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
        setSelectedOptionTwo("")
        break;
      case "priceLow":
        const sortedLow = sortedPrices.sort(function(a, b){
          return  parseFloat(b.price) - parseFloat(a.price);
        });
        setSorted(sortedLow);
        setSelectedOptionTwo("")
        break;
      default:
        if(selectedOptionTwo === ""){
          setSorted(waresData)
        }


    }
  }
  function handleChangeTwo(e){
    setSelectedOptionTwo(e.target.value);
    const sortedStars = structuredClone(waresData);

    switch (e.target.value){
      case "likesHigh":
        const sortedLow = sortedStars.sort(function(a, b){
          return  parseFloat(b.stars.reduce((a, b) => a + b, 0)/b.stars.length) - parseFloat(a.stars.reduce((a, b) => a + b, 0)/a.stars.length);
        });
        setSorted(sortedLow);
        setSelectedOption("")
        break;
        
      case "likesLow":
        const sortedHigh = sortedStars.sort(function(a, b){
          return parseFloat(a.stars.reduce((a, b) => a + b, 0)/a.stars.length) - parseFloat(b.stars.reduce((a, b) => a + b, 0)/b.stars.length);
        }); 
        setSelectedOption("")
        setSorted(sortedHigh);
        break;
      default:
        if(selectedOption === ""){
          setSorted(waresData)
        }
    }
  }
  function handleSortClick(){
    const sortedPrices = structuredClone(waresData);
    const sortedData = sortedPrices.sort(function(a, b){
      return parseFloat(a.price) - parseFloat(b.price);
    });
    setSorted(sortedData);
  }
  // useEffect(() => {
  //   console.log(sorted)
  // }, [sorted]);
  const product = sorted.map(ware=>{
    return <Product key={ware.id} img={ware.img} name={ware.name} id={ware.id} price={ware.price} info={ware.info} stars={ware.stars}/>
  })
  let dbProduct
  if(allProducts){
    console.log(allProducts[0].ratings.map(ware=>{
     return ware.rating
    }))
    
    dbProduct = allProducts.map(ware=>{
      return <Product key={ware.id} img={ware.img} name={ware.name} id={ware.id} price={ware.price} info={ware.info} stars={ware.ratings.map(ratings=>{
        return ratings.rating
      })}/>
    })
  }
  
 
    return(
      <>
      <div className="verticalContainer" >
        
        <div className="verticalContainer">
          
            {/* <h1 >product showcase</h1> */}
            {/* <button onClick={handleSortClick}>print sorted Data</button> */}
        <div className={`sticky-div ${isFixed ? 'fixed' : ''}`} id="stickyDiv">
        Filters
        <div className="container">
          <select className="selectBox" value={selectedOption} onChange={handleChange}>
          <option value="">--Price $--</option>
          <option value="priceHigh">low to high</option>
          <option value="priceLow">high to low</option>
        </select>
        <select className="selectBox" value={selectedOptionTwo} onChange={handleChangeTwo}>
          <option value="">--Rating--</option>
          <option value="likesHigh">high to low</option>
          <option value="likesLow">low to high</option>
        </select>
        </div>
      </div>
            <div className="gridContainer">
                
                {product}
                {dbProduct}
                
                
            </div>

        </div>

      </div>  
      </>
    )
  }
  export default Shop
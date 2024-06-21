import { useState } from "react"
import { Navigate, useNavigate } from "react-router";

const Product = ({img,name,id,price,info,stars}) =>{
 const[isHovered,setIsHovered] = useState(false);
 const[showInfo,setShowInfo] =useState(false);
 const navigate = useNavigate()
 const trueStars = stars.reduce((a, b) => a + b, 0)/stars.length

 const Productstyle = { 
    marginRight:"10px",marginLeft:"4px",alignItems:'center',
    borderRadius:'20px',border:'3px, solid, rgba(0, 0, 0, 0.948)',height:'8.4rem',width:'9rem',
    overflow:'hidden',backgroundColor:'rgba(0, 0, 0, 0.548)',
  }
  
 function handleClick(){
    navigate(`/item/${id}`)
 }
 function handleStarClick(){
  console.log(trueStars)

 }
 const fillStyle ={
  width:`${trueStars*30}px`
 }
 const emptyStyle ={
  width:`${150-trueStars*30}px`,
  backgroundPositionX:`${(150-trueStars*30)-30}px`
 }

    return(
      <>
      <div className="productCard" >
        <div className="infoCard" >

        <div className="imgContainer">
            <img className="ProductImg"  src={img}></img>
        </div>
        
        <div className="productName" onClick={handleClick}>
      <button style={{zIndex:'10'}} >find stars</button>
          <h2>{name}</h2>
          <p className="productInfo">{info}</p>
          <div style={{justifyContent:"space-between"}} className="container">
          <h1>{price}$</h1>
          {/* <p>{trueStars}</p> */}
          <div className="starContainer">
          <div style={fillStyle} className="starRating"></div>
          <div style={emptyStyle} className="MTstars"></div>
          </div>
          {/* <img src="https://img.icons8.com/?size=100&id=tAfqdu2AVpjT&format=png&color=FAB005"></img> */}
          </div>
        </div>
        
        </div>
        <div className="purchaseItem">
          <p>Add to Cart</p>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 36 36" id="cart"><path fill="#444" d="M14 13.1V12H4.6l.6-1.1 9.2-.9L16 4H3.7L3 1H0v1h2.2l2.1 8.4L3 13v1.5c0 .8.7 1.5 1.5 1.5S6 15.3 6 14.5 5.3 13 4.5 13H12v1.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.7-.4-1.2-1-1.4zM4 5h10.7l-1.1 4-8.4.9L4 5z"></path></svg> */}

        </div>
      
      </div>
      
        
      </>
    )
  }
  export default Product
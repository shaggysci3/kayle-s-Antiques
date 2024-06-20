import { useState } from "react"
import { Navigate, useNavigate } from "react-router";

const Product = ({img,name,id}) =>{
 const[isHovered,setIsHovered] = useState(false);
 const[showInfo,setShowInfo] =useState(false);
 const navigate = useNavigate()

 const Productstyle = { 
    marginRight:"10px",marginLeft:"4px",alignItems:'center',
    borderRadius:'20px',border:'3px, solid, rgba(0, 0, 0, 0.948)',height:'8.4rem',width:'9rem',
    overflow:'hidden',backgroundColor:'rgba(0, 0, 0, 0.548)',
  }
  
 function handleClick(){
    navigate(`/item/${id}`)
 }

    return(
      <>
      <div className="productCard" onClick={handleClick}>
        <div className="imgContainer">
            <img className="ProductImg"  src={img}></img>
        </div>
        
        <div className="productName">
          <h2>{name}</h2>
          <p className="productInfo"></p>
        </div>
      
      </div>
      
        
      </>
    )
  }
  export default Product
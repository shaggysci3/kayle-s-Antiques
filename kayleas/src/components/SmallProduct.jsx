import { useState } from "react"

const SmallProduct = ({img,name}) =>{
 const[isHovered,setIsHovered] = useState(false);
 const[showInfo,setShowInfo] =useState(false);

 const style = { 
    marginRight:"10px",marginLeft:"4px",alignItems:'center',
    borderRadius:'20px',border:'3px, solid, rgba(95, 58, 10, 0.948)',height:'8.4rem',width:'8rem',
    overflow:'hidden',backgroundColor:'rgba(95, 58, 10, 0.548)',
  }
  
 function handleMouseOver(){
  setIsHovered(true)
 }
 function handleMouseOut(){
  setIsHovered(false)
 }

    return(
      <>
      <div
        className="verticalContainer"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={style}
        >
        
        <img  className="ProductImg-S" src={img}></img>
        {isHovered ? (
        <div className="info-S">
          <h2>{name}</h2>
        </div>
      ) : (
        <></>
      )}
      </div>
      
        
      </>
    )
  }
  export default SmallProduct
import { useOutletContext } from "react-router"
import SmallProduct from "../components/SmallProduct"
import { useEffect, useState } from "react"


const Home = () =>{
  const[waresData]=useOutletContext()

  const[xPos,setXPos]=useState(0)
  const[count,setCount]=useState(0)
  

  const divStyle = {
    transform: `translate(${xPos}px, 0px)`,
    transition: "transform 0.5s ease-in-out",
  };
  let music = new Audio("public/drawrSound.mp3");

  function handleRightClick(){
    if(count<waresData.length-1){
      setXPos(xPos-210)
      setCount(count+1)
      music.volume = 0.6;
      music.play();
    }
    else{
      setXPos(0)
      setCount(0)
      music.volume = 0.6;
    music.play();
    }
  }
  function handleLeftClick(){
    if(count>0){
      setXPos(xPos+210)
      setCount(count-1)
      music.volume = 0.6;
      music.play();
      
    }
    else{
      setXPos(0+((waresData.length-1)* -210))
      setCount(waresData.length-1)
      music.volume = 0.6;
    music.play();
    }
  }
  // useEffect(() => {
    
  //   console.log('xPos is: '+xPos);
  //   console.log('count is: '+count)
  // }, [xPos]);

  const product = waresData.map(ware=>{
    return <SmallProduct key={ware.id} img={ware.img} name={ware.name}/>
  })

  



    return(
      <>
      
      
        <h1 className="siteName">Kayle's Antques</h1>
      <img id="nameDeco" src="https://cdn.pixilart.com/photos/large/e314d63de589228.png"></img>
        <img className="backgroundimg" src="https://th.bing.com/th/id/OIG1.dVMEE11ShOSZxXDiixEH?pid=ImgGn"></img>
      <div className="sign" >
          
      </div>
        
        <div id="carousel" style={{position:"relative",top:"-21rem",left:"35.3rem", width:"fit-content"}} className="container">
        <button className="arrows" onClick={handleLeftClick}>🢀</button>
          <div className="featured">
            <div style={divStyle} className="carousel">
              {product}
            </div>
        </div>
        <button className="arrows" onClick={handleRightClick}>🢂</button>
        </div>
        
        
      </>
    )
  }
  export default Home
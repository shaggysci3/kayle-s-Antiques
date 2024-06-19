import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar= () =>{
    
 
    return(
      <>
      <div>
        <div className='bannerBar'></div>
        <div className="banner">
            <div className="container">
                <a >
                    <img src="https://cdn.pixilart.com/photos/large/a0144d9013f5715.png"></img>
                </a>
                <h1 className="siteName">kayle's Antques</h1>
            </div>
            <div className="container">
                <Link className="navbarLinks" to="/" >
                    &nbsp;Home
                </Link>

                <Link className="navbarLinks" to="/Shop" >
                    &nbsp;Shop
                </Link>

            </div>
        </div>
        <div className="underbanner"></div>
      </div>
        
      </>
    )
  }
  export default Navbar
import React, { useEffect, useState } from "react";


import Product from "./Product";
//
function ProductCollection({sortedWares}) {

    const product = sortedWares.map(ware=>{
        return <Product key={ware.id} img={ware.img} name={ware.name} id={ware.id} price={ware.price}/>
      })
  
  
  
  return (
    <div className="gridContainer">
                
                {product}
                
            </div>
  );
}

export default ProductCollection;
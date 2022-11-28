import React, { useState } from "react";
function Dominospizza(){
    let [value,setvalue]=useState(0);
    
    function decrement(){
        setvalue(value-1);
    }
    // function decrement(event){
    //     setvalue({...value,dominos:event.target.value});

    // }
   return(
            <div>
                <h1>{value}</h1>
                <div>
                <h1 className="text-warning">DOMINOS:-</h1>
                
           <img src='https://image.shutterstock.com/image-photo/healthy-gluten-free-cauliflower-crust-260nw-1935674350.jpg'></img></div>
           <div>
           <h1 className="text-success">Available all Products</h1></div>
           <div>
           <h1 className="text-dark">25</h1></div>
           <div>
           <button className="btn btn-dark" onClick={decrement}>BUY NOW</button></div>
           </div>

   )    
}
export default Dominospizza;
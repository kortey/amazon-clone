import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkoutproduct.css"






function Checkoutproduct(proops) {
    const  [{basket},dispatch] =useStateValue();
     
const removeFromBasket=()=>{
  
  dispatch({
    type:"REMOVE_FROM_BASKET",
     id:proops.id  
  }) 
}

  return (
    <div className='checkoutProduct'>
         <img src={proops.image} />
         <div className="cheoutProductinfo">
            <h4>{proops.name}</h4>
            <p>{proops.description}</p>
            <small>$</small><strong>{proops.price}</strong>
            <p>{proops.rating}</p>
            <button onClick={removeFromBasket}>remove from checkout</button>
         </div>
    </div>
  )
}

export default Checkoutproduct

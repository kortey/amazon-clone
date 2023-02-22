import React from 'react'
import "./checkout.css"
import Subtotal from "./subtotal"
import Header from './header'
import Checkoutproduct from './Checkoutproduct'
import { useStateValue } from './StateProvider';

function Checkout() {
  const  [{basket,user},dispatch] =useStateValue();
  

  return (
    <div>
        <Header />
      <div className="checkout">
      <div className="checkout__left">
        <div className='banner__image'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HZBBtsqzdEBPX3qnLzR4gizYD4EGKzX2Zg&usqp=CAU" alt="Amazon banner image" />
        </div>
          <h2> hey {user?.email}</h2>
          <h2>Your basket content</h2>
       
          {basket.map(item =>{
            return <Checkoutproduct 
            id={item.title}
            name={item.title}
            description={item.description}
            rating={item.rating}
            image={item.image}
            price={item.price}
            />
          })}
          

      </div>
      <div className="checkout__right"></div>
       <div className='subtotal__side'>
          <Subtotal />
       </div>
      </div>
    </div>
  )
}

export default Checkout

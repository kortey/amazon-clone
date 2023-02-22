import React, {useEffect, useState} from 'react'
import { useStateValue } from './StateProvider';
import Checkoutproduct from "./Checkoutproduct";
import Header from './header';
import "./payment.css"
import { CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { addTotal } from './reducer';
import axios from "axios"
import { stripBasename } from '@remix-run/router';
import { useElements,useStripe } from '@stripe/react-stripe-js';






function Payment() {
  const  [{basket,user},dispatch] =useStateValue();
  const [change,setchange] =useState("")
  const [error,setError]=useState(null)
  const [disable,setDisable]=useState(false)
  const [succeeded,setsucceeded]=useState(false)
  const [processing,setProcessing]=useState(false)
  const [clientSecret,setclientSecret]=useState(true)

  const elements = useElements();
  const stripe =useStripe();
  
  
  
 
 
   

  function handleChange(e) {
    setchange(e.targrt.value)
    setError(e.error? e.error.message:"");
  }
   
  const  handleSubmit = async (e) =>{

    e.preventDefault();
   
    
  }
  return (
    <div>
        <Header />
        <div className="checkout__container">
          <div className="checkout__number">
              <h3>checkout ({basket.length} items)</h3>
          </div>
          <div className="details__section">
               <div className="details">
                 <div className="details__title">
                      <h3>Delivery Address:</h3>
                 </div>
                 <div className="address">
                   <p>{user.email}</p>
                    <p>whk 85c</p>
                    <p>akosombo-Ghana</p>
                 </div>
               </div>
               <div className="details">
                  <div className="details__title">
                      <h3>review and confirm items and address</h3>
                  </div>
               </div>
          </div>
        </div>
        <div className='payment__page'>

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
        <div className='payment__section '>
              <div className="payment__title">
                <h1>payment method</h1>
              </div>
              <div className="payment__details">
                <form onSubmit={handleSubmit}>
                  <CardElement onChange={handleChange} />
                   
                   <div className="payment__total">
                   <CurrencyFormat
                   renderText={(value) => (
                        <>
                          <h3> <span>Orders Total :</span> {value}</h3>
                        </>
                      )}
                      decimalScale={2}
                      value={addTotal(basket)}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                  /> 
                  <button disabled={processing||disable||succeeded}>
                    <span>{processing?<p>processing</p>:"BUY NOW"}</span>
                  </button>
                   </div>
                   {error && <div>{error}</div>}
                    
                </form>
              </div>
              
        </div>
    </div>
  )
}


export default Payment



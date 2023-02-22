import React from 'react'
import "./subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { addTotal } from './reducer';
import { Link,useNavigate } from 'react-router-dom'


function Subtotal() {
    const  [{basket,user},dispatch] =useStateValue();
    const navigate =useNavigate()
    
    function toPayment(){
        navigate("/payment")
       
    }

   
  return (
    <div className='subtotal'>
       <CurrencyFormat
            renderText={(value) => (
                <>
                <p>
                     Subtotal ({basket?.length} items) : <strong> {value}</strong>
                 
                </p>
                <small className='subtotao__gift'>
                    <input type="checkbox" /> this order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={addTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            />
            <div className="button">
                <button onClick={toPayment}>proceet to checkout</button>
            </div>
    </div>
    )
    }

export default Subtotal

import React,{useEffect} from "react";
import Header from "./header";
import Home from "./home"
import Checkout from "./checkout";
import {BrowserRouter as Router ,Routes ,Route,Link} from "react-router-dom"
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./payment";
import Orders from "./Orders";
import PaymentComponent from "./PaymentComponent"








function App(){
  const  [{},dispatch] =useStateValue(); 
    useEffect(()=>{
     auth.onAuthStateChanged(authUser =>{
       
        if(authUser){
           dispatch({
            type:"SET_USER",
            user:authUser
            
        }) 
        }else{
          dispatch({
            type:"SET_USER",
            user:authUser
        })
        }
     })
    },[])

    return (
        <Router>
           
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/login" element={<Login/>}/> 
            <Route path="/payment" element={<PaymentComponent/>} />
          </Routes>
        
      </Router>
       
    )  
   
}
export default App










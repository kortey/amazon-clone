import React,{useState} from 'react'
import "./header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {BrowserRouter as Router ,Routes ,Route,Link} from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from './firebase'

function Header() {

    const  [{basket,user},dispatch] =useStateValue();
    const  [search,setSearch]= useState("")
   

    function handleUser(){
         auth.signOut();
    }
    function handleSearch(){
        dispatch({
            type:"SEARCH",
            search
        })
    }

  return (
    <div className='header__nav'>
        <Link to="/">
        <div className="nav__logo">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />
        </div>
        </Link>

        <div className="nav__search">
            <div className="nav__search__searchbar">
                <input type="text" placeholder='search market' name="nav-search" onChange={(e)=> setSearch(e.target.value)} value={search}/>
            </div>
            <div className="nav__search__searchicon" onClick={handleSearch}>
               <SearchIcon />
            </div>
        </div>
        
        <div className="nav__nav__header__options">
            <Link to= {!user && "/login"}>
            <div className="header__options" onClick={handleUser}>
                <small>Hello {user ? user.email:null}</small>
                <strong >{user ? "sign out" :"sign in"}</strong>
            </div>
            </Link>
            <div className="header__options">
                <small>returns</small>
                <strong>& Orders</strong>
            </div>
            <div className="header__options">
                <small>your</small>
                <strong>Prime</strong>
            </div>
        </div>
         
         <div className= "nav__cart">
            < Link to="/Checkout">
            <div className="nav__basket">
                <ShoppingCartIcon />
            </div>
            </Link>
            <div className="basket_count">
                <strong>{basket?.length}</strong>
            </div>
         </div>
         
    </div>
  )
}

export default Header

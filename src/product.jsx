import React from 'react'
import "./products.css"
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Button } from '@mui/material';



function Product(proops) {
  const rating = Array(proops.rating)
  const  [{basket},dispatch] =useStateValue();
   function AddToBasket(){
      dispatch({
           type:"ADD_TO_BASKET",
           item:{
             id:proops.name,
             title:proops.name,
             description:proops.description,
             rating:proops.rating,
             image:proops.image,
             price:proops.price
           }
           
      })
   }
   
   
    

  return (
    <Box className='product' sx={{width:{xs:"250px" , md:"300px"}}}>
      <Link style={{textDecoration: 'none'}} to={`/product/${proops.name}`}>
        <div className="product__image">
            <img src={proops.image} alt="Apple AirPods (2nd" />
        </div>
        <div className="product__name">
          <h4 style={{color:"black"}}>{proops.name}</h4>
        </div>
        <div className="product__info">
            <p>{proops.description.substring(0,100)} ...</p>
        </div>
        <div className="product__price">
        <small>$</small>
        <strong>{proops.price}</strong>
       </div>
        <div className="product__rating"> 
         {Array(rating).fill().map((_, i)=>{
          return <p style={{color:"#cd9042"}}> <StarIcon /></p>
         })}
          
        </div>
        </Link>
        <div className='country-button'>
            <div className="country">
            <p>ship to Ghana</p>
            </div>
            <div>
                <Button onClick={AddToBasket}><ShoppingCartIcon /> Add to basket</Button>
            </div>
        </div>

        
       

    </Box>
  )
}

export default Product

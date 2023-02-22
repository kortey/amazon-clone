import React from 'react'
import Product from './product'
import "./home.css"
import Header from './header'
import { Box } from '@mui/system'

function Home() {


   

   
  return (
    
    <div className='home__container'>
       <Header />
        <div className="home__barnner__image">
            <img src="https://www.adcb.com/en/Images/Website_banner_1111x498-amazon_tcm41-344964.jpg" alt="amazon banner" />
        </div>
        <Box className="product__row" sx={{display:'flex',flexDirection:"row",flexWrap:"wrap",margin:"auto"}}>
        <Product
          image="data:image/jpeg;base64,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" alt="Apple AirPods (2nd"
          name="Apple AirPods (2nd Generation)"
          description="Wireless Earbuds with Lightning Charging Case Included. Over 24 Hours of 
          Battery Life, Effortless Setup. Bluetooth Headphones for iPhone"
          price= {5}
          rating="5"

        />
         <Product
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51JbsHSktkL.__AC_SY300_SX300_QL70_FMwebp_.jpg" alt="Apple AirPods (2nd"
          name="Bose QuietComfort 45"
          description="Wireless Earbuds with Lightning Charging Case Included. Over 24 Hours of 
          Battery Life, Effortless Setup. Bluetooth Headphones for iPhone"
          price= {5}
          rating="7"

        />
        <Product
          
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71GsOOyGGiL._AC_SL1500_.jpg" alt="Apple AirPods (2nd"
          name="WAITIEE Wireless"
          description="Charger 3 in 1, 15W Fast Charging Station for Apple iWatch 6/5/4/3/2/1,AirPods Pro,for iPhone14/13 Pro/Pro Max/12/11/X/Xr/Xs/8/Samsung Galaxy Phone Series (No Watch Charging Cable)"
          price= {5}
          rating="5"

        />
        <Product
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/810o-i5jpiL.__AC_SY300_SX300_QL70_FMwebp_.jpg" alt="Apple AirPods (2nd"
          name="SanDisk 128GB microSDXC-Card"
          description="Licensed for Nintendo-Switch - SDSQXAO-128G-GNCZN"
          price= {5}
          rating="5"

        />
       
       
        <Product
         
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/612fos32n0L._AC_SY355_.jpg" alt="USB C Hub Multiport Adapter"
          name="USB C Hub Multiport Adapter"
          description="12 in 1, USB C Docking Station with USB Ports/Dual 4K HDMI/VGA/3.5 Audio/PD 100W/SD/TF/Ethernet, Laptop Docking Station for MacBook/Dell XPS/More Type-C Devices."
          price= {5}
          rating="5"

        />
           <Product
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61CGHv6kmWL.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="BENGOO G9000"
          name="BENGOO G9000"
          description="Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games"
          price= {5}
          rating="5"

        />
           <Product
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71iNwni9TsL._AC_UL320_.jpg" alt="Logitech C920x HD Pro Webcam"
          name="Logitech C920x HD Pro Webcam"
          description="Full HD 1080p/30fps Video Calling, Clear Stereo Audio, HD Light Correction, Works with Skype, Zoom, FaceTime, Hangouts, PC/Mac/Laptop/Macbook/Tablet - Black"
          price= {5}
          rating="5"

        />
           <Product
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61O7HHu181L._AC_UL320_.jpg" alt="Logitech G920"
          name="Logitech G920"
          description="Driving Force Racing Wheel and Floor Pedals, Real Force Feedback, Stainless Steel Paddle Shifters, Leather Steering Wheel Cover for Xbox Series X|S, Xbox One, PC, Mac - Black"
          price= {5}
          rating="5"

        />
        
          <Product
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61Dj8Di1nCL._AC_SY450_.jpg" alt="ARLINK 30X 60X"
          name="ARLINK 30X 60X"
          description="Illuminated Jewelers Loupe Magnifier, Foldable Jewelry Magnifier with Bright LED Light for Gems, Jewelry, Coins, Stamps, etc"
          price= {5}
          rating="5"

        />
           <Product
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71qVV9ptccL._AC_SY450_.jpg" alt="Invisible Ring Size Adjuster"
          name="Invisible Ring Size Adjuster"
          description="Invisible Ring Size Adjuster for Loose Rings Ring Adjuster Fit Any Rings, Assorted Sizes of Ring Sizer"
          price= {5}
          rating="5"

        />
           <Product
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71TjTyY53hL._AC_SY450_.jpg" alt="Natural Stone Beads"
        
          name="Natural Stone Beads"
          description="100pcs 8mm India Agate Round Genuine Real Stone Beading Loose Gemstone Hole Size 1mm DIY Charm Smooth Beads for Bracelet Necklace Earrings Jewelry Making (India Agate)"
          price= {5}
          rating="5"

        />
           <Product

          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81jyqyI3C8L._AC_SL1500_.jpg" alt="Wannabead Waist Bead Spinner"
          name="Wannabead Waist Bead Spinner"
          description=" for Jewelry Making Kit Includes 2 Big Eye Beading Needles and a Funnel"
          price= {5}
          rating="5"

        />
        </Box>
        <Box className='product__row'>
          <Product
          image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71LJJrKbezL.__AC_SY300_SX300_QL70_FMwebp_.jpg" alt="SAMSUNG "
          name="SAMSUNG "
          description=" 43-Inch Class Crystal 4K UHD AU8000 Series HDR, 3 HDMI Ports, Motion Xcelerator, Tap View, PC on TV, Q Symphony, Smart TV with Alexa Built-In (UN43AU8000FXZA, 2021 Model)"
          price= {5}
          rating="5"
          />
        </Box>
        
        
    </div>
  )
}

export default Home

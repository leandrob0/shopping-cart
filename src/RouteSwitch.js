import { BrowserRouter , Routes , Route } from "react-router-dom";

import Nav from "./components/Navbar";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import { useState } from "react";

import adidas1 from "./media/adidas1.jpg";
import adidas2 from "./media/adidas2.jpg";
import adidas3 from "./media/adidas3.jpg";
import adidasoriginals1 from "./media/adidasoriginals1.jpg";
import adidasoriginalsnmd from "./media/adidasoriginalsnmd.jpg";
import converse from "./media/converse.jpg";
import converse2 from "./media/converse2.jpg";
import { useEffect } from "react/cjs/react.development";

//add state to this so i can render the shopping cart later.

const RouteSwitch = () => {
  const [color, setColor] = useState(); // color for the navbar text
  const [cart, setCart] = useState([{}])
  const [amountCart, setAmountCart] = useState(0);

  useEffect(() => (document.querySelector('.shop')) ? setColor('black') : setColor('white'), [])
  
  const imgs = [
    { src: adidas1 , name: 'Adidas Breaknet' , id: 1},
    { src: adidas2 , name: 'Adidas FluidStreet' , id: 2},
    { src: adidas3 , name: 'Adidas Grand Court' , id: 3},
    { src: adidasoriginals1 , name: 'Adidas Marathon Tech' , id: 4},
    { src: adidasoriginalsnmd , name: 'Adidas Originals NMD R1' , id: 5},
    { src: converse , name: 'Converse Net Star Ox' , id: 6},
    { src: converse2 , name: 'Converse Chuck Taylor All Star Ox' , id: 7},
  ];

  const colorWhite = () => setColor('white');
  const colorBlack = () => setColor('black');
  const incrementCart = () => {
    setAmountCart(amountCart + 1);
    const cartCount = document.querySelector('.cart-counter');
    if(cartCount.classList[1] === 'animate') cartCount.classList.remove('animate');
    cartCount.classList.add('animate');
    setTimeout(() => cartCount.classList.remove('animate'),1000)
  };

  return (
    <BrowserRouter>
      <Nav 
        color={color} 
        colorWhite={colorWhite} 
        colorBlack={colorBlack}
        cartCount={amountCart}
      /> 
      <Routes>
        <Route path="/" element={<Homepage colorBlack={colorBlack}/>} />
        <Route path="/shop" element={<Shop imgs={imgs} plusCart={incrementCart} />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
import { BrowserRouter , Routes , Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

import Nav from "./components/Navbar";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

import adidas1 from "./media/adidas1.jpg";
import adidas2 from "./media/adidas2.jpg";
import adidas3 from "./media/adidas3.jpg";
import adidasoriginals1 from "./media/adidasoriginals1.jpg";
import adidasoriginalsnmd from "./media/adidasoriginalsnmd.jpg";
import converse from "./media/converse.jpg";
import converse2 from "./media/converse2.jpg";

/*
  THINGS TO ADD: 
  -LET USER ADD MULTIPLE OF THE SAME AND SHOW IN CART AS ONE WITH THE QUANTITY OF SHOES FOR EACH SHOE ADDED.
  -VISUALS TO CART
 */

const RouteSwitch = () => {
  const [color, setColor] = useState();
  const [cart, setCart] = useState([])
  const [amountCart, setAmountCart] = useState(0);

  useEffect(() => (document.querySelector('.shop')) ? setColor('black') : setColor('white'), [])
  
  const imgs = [
    { src: adidas1 , name: 'Adidas Breaknet' , price: 60, id: 1},
    { src: adidas2 , name: 'Adidas FluidStreet' , price: 37, id: 2},
    { src: adidas3 , name: 'Adidas Grand Court' , price: 55, id: 3},
    { src: adidasoriginals1 , name: 'Adidas Marathon Tech' , price: 40, id: 4},
    { src: adidasoriginalsnmd , name: 'Adidas Originals NMD R1' , price: 100, id: 5},
    { src: converse , name: 'Converse Net Star Ox' , price: 30, id: 6},
    { src: converse2 , name: 'Converse Chuck Taylor All Star Ox' , price: 40, id: 7},
  ];

  const colorWhite = () => setColor('white');
  const colorBlack = () => setColor('black');
  const itemByID = (id) => imgs.find(val => val.id === id);
  const addToCart = (e) => {

    setCart(cart.concat(itemByID(Number(e.target.id))));

    setAmountCart(amountCart + 1);
    animate();
  };
  const animate = () => {
    const cartCount = document.querySelector('.cart-counter');
    if(cartCount.classList[1] === 'animate') cartCount.classList.remove('animate');
    cartCount.classList.add('animate');
    setTimeout(() => cartCount.classList.remove('animate'),1000)
  }

  return (
    <BrowserRouter>
      <Nav 
        color={color} 
        colorWhite={colorWhite} 
        colorBlack={colorBlack}
        cartCount={amountCart}
      /> 
      <Routes>
        <Route path="/" element={<Homepage colorBlack={colorBlack} />} />
        <Route path="/shop" element={<Shop imgs={imgs} plusCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
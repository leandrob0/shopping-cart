import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState , useEffect } from "react";

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
import useWindowDimensions from "./hooks/useWindowDimensions";

const RouteSwitch = () => {
  const [color, setColor] = useState();
  const [cart, setCart] = useState([]);
  const [amountCart, setAmountCart] = useState(0);
  const { width } = useWindowDimensions();

  document.title = "Shoe shop";

  //makes sure if the page is reloaded the navbar colors on reload are accurate.
  useEffect(() => {
    document.querySelector(".homepage-background")
      ? setColor("white")
      : setColor("black");
  }, []);
  const imgs = [
    { src: adidas1, name: "Adidas Breaknet", price: 60, id: 1 },
    { src: adidas2, name: "Adidas FluidStreet", price: 37, id: 2 },
    { src: adidas3, name: "Adidas Grand Court", price: 55, id: 3 },
    { src: adidasoriginals1, name: "Adidas Marathon Tech", price: 40, id: 4 },
    {
      src: adidasoriginalsnmd,
      name: "Adidas Originals NMD R1",
      price: 100,
      id: 5,
    },
    { src: converse, name: "Converse Net Star Ox", price: 30, id: 6 },
    {
      src: converse2,
      name: "Converse Chuck Taylor All Star Ox",
      price: 40,
      id: 7,
    },
  ];

  // to set the font color of the nav according to where it is.
  const colorWhite = () => setColor("white");
  const colorBlack = () => setColor("black");

  // handles the logic for updating items in the cart to show in the /cart path.
  const updateCart = (id) => {
    const isInCart = cart.find((val) => val.id === Number(id));
    const item = imgs.find((val) => val.id === Number(id));
    // not in cart ? add it : increase amount and price
    if (isInCart === undefined) {
      setCart(cart.concat({ ...item, amount: 1 }));
    } else {
      const newCart = cart;
      newCart.map((val) => {
        if (val.id === isInCart.id) {
          val.amount++;
          val.price += item.price;
        }
        return val;
      });
      setCart(newCart);
    }
  };
  const addToCart = (e) => {
    updateCart(e.target.id);
    setAmountCart(amountCart + 1);
    animate();
  };
  const animate = () => {
    if (width < 650) return;
    const cartCount = document.querySelector(".cart-counter");
    if (cartCount.classList[1] === "animate")
      cartCount.classList.remove("animate");
    cartCount.classList.add("animate");
    setTimeout(() => cartCount.classList.remove("animate"), 1000);
  };

  const decrementItem = (e) => {
    const id = e.target.classList[0];
    const item = imgs.find((val) => val.id === Number(id));

    const newCart = cart
      .map((val) => {
        if (val.id === Number(id)) {
          val.price -= item.price;
          val.amount -= 1;
        }
        return val;
      })
      .filter((val) => val.amount !== 0);

    setAmountCart(amountCart - 1);
    setCart(newCart);
  };

  const incrementItem = (e) => {
    const id = e.target.classList[0];
    const item = imgs.find((val) => val.id === Number(id));

    const newCart = cart.map((val) => {
      if (val.id === Number(id)) {
        val.price += item.price;
        val.amount += 1;
      }
      return val;
    });

    setAmountCart(amountCart + 1);
    setCart(newCart);
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
        <Route path="/" element={<Homepage colorBlack={colorBlack} />} />
        <Route
          path="/shop"
          element={<Shop imgs={imgs} plusCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              decrement={decrementItem}
              increment={incrementItem}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;

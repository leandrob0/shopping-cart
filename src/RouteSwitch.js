import { BrowserRouter , Routes , Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import Nav from "./components/Navbar";
import Shop from "./components/Shop";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
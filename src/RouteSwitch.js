import { BrowserRouter , Routes , Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import Shop from "./components/Shop";

//add state to this so i can render the shopping cart later.

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
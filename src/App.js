
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Footer from "./components/shared/Footer";
import Navber from "./components/shared/Navber";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Men from "./components/men/Men";
import Kid from "./components/kid/Kid";
import Women from "./components/women/Women";
import ProductDetails from "./components/productDetails/ProductDetails";
import { createContext, useState } from "react";
import { setItem } from "./utilities/localStorage";
export const CardContext = createContext('');
function App() {
  const [added, setAdded] = useState(false)
  const [cart, setCart] = useState([])
  const handleAddToCart = (newProduct) => {

    const newProductId = newProduct._id;

    const isOld = cart.find(data => data._id === newProductId)
    console.log(isOld)
    if (isOld && cart.length > 0) {
      setAdded(true)
      console.log(added)
    }
    else {
      setCart([...cart, newProduct])
      setItem(cart)
    }

  }
  return (
    <CardContext.Provider value={handleAddToCart}>
      <div className="App ralative ">
        <Navber product={cart}></Navber>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kid />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products/:_id" element={<ProductDetails />} />
        </Routes>
        <Footer></Footer>
      </div>
    </CardContext.Provider>
  );
}

export default App;

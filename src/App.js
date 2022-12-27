
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

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/kids" element={<Kid/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/products/:_id" element={<ProductDetails/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

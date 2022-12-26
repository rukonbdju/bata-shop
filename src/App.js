
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Footer from "./components/shared/Footer";
import Navber from "./components/shared/Navber";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

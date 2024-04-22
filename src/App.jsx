import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop.jsx";
import Cart from "./pages/Cart";
import LoginSingup from "./pages/LoginSingup";
import Product from "./pages/Product";
import ShopCategory from "./pages/ShopCategory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/loginsignup" element={<LoginSingup />}></Route>
          <Route path="/product" element={<Product />}>
            <Route path=":productid" element={<Product />}></Route>
          </Route>
          <Route path="/men" element={<ShopCategory category="men" />}></Route>
          <Route
            path="/women"
            element={<ShopCategory category="women" />}></Route>
          <Route
            path="/kids"
            element={<ShopCategory category="kids" />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

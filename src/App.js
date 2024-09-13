import React from "react";
import "./styles/base.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import ProductItem from "./pages/ProductItem";
import Header from "./components/Header";
import Shop from "./pages/Shop";
import { ToastContainer } from "react-toastify";
import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: "rgba(30, 30, 30, 0.9)",
            color: "whitesmoke",
            fontSize: "1rem",
          },
        }}
      />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/shop/:id" element={<ProductItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

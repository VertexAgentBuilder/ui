import React from "react";
import "./App.css";
import Footer from "./Compoenents/Footer";
import Header from "./Compoenents/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CartPage from "./Pages/CartPage";
import ProductPaga from "./Pages/ProductPaga";
import Context from "./ContextApi/Context";
import Dashboard from "./Pages/Dashboard";
import PoliciesPage from "./Pages/PoliciesPage";

function App() {
  return (
    <Context>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/dashboard" index element={<Dashboard />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path={`/ProductPaga/:id`} element={<ProductPaga />} />
        <Route path={`/policies`} element={<PoliciesPage/>} />
      </Routes>
      <Footer />
    </Context>
  );
}

export default App;
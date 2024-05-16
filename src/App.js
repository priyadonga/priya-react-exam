import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_PRODUCT_PENDING } from "./redux-saga/product/action/action";
import ProductList from "./components/pages/ProductList";
import Navbar from "./components/header/Navbar";
import ProductForm from "./components/pages/ProductForm";
import Profile from "./components/pages/Profile"
import { Route, Routes } from "react-router-dom";

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_PENDING });
  }, []);

  return (
    <>
    <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/user" element={<ProductForm/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
        </>
  );
}

export default App;
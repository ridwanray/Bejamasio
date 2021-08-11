import React, { useEffect } from "react";
import CartNav from "./components/CartNav";
import CategoryHeader from "./components/CategoryHeader";
import FeaturedProduct from "./components/FeaturedProduct";
import FeatureProductAbout from "./components/FeatureProductAbout";
import FeatureProductDetails from "./components/FeatureProductDetails";
import Header from "./components/Header";
import MobileFilterModal from "./components/MobileFilterModal";
import ProductListsSection from "./components/ProductListsSection";
import { fetchProducts } from "./actions/productActions";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    console.log("Consoling..., Effect coming from App");
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <Header />
      <CartNav />
      <FeaturedProduct />
      <FeatureProductAbout />
      <FeatureProductDetails />
      <CategoryHeader />
      <ProductListsSection />
      <MobileFilterModal />
    </>
  );
}

export default App;

import React, { useState } from "react";
import ProductsList from "../components/products/ProductsList/ProductsList";
import ProductSideBar from "../components/products/ProductSideBar/ProductSideBar";
import "../styles/ProductsPage.css";

const ProductsPage = () => {
  const [isSideBar, setIsSideBar] = useState(true);
  const [page, setPage] = useState(1);

  function changeSideBarStatus() {
    setIsSideBar(!isSideBar);
  }

  return (
    <div className="productsPage">
      <div className="productList_header">
        <h2>Our Luxury Watches</h2>
      </div>
      <div className="product_list">
        <ProductSideBar isSideBar={isSideBar} setPage={setPage} />
        <ProductsList
          changeSideBarStatus={changeSideBarStatus}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default ProductsPage;

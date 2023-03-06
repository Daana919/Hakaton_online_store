import React, { useEffect, useState } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import "..//../../styles/ProductList.css";

const ProductsList = ({ changeSideBarStatus, page, setPage }) => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const itemsOnPage = 6;

  const count = Math.ceil(products.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return products.slice(begin, end);
  }

  return (
    <div className="productList_container">
      <h2>Our collections</h2>
      <div className="sidebar">
        <div className="sidebar_btns_left">
          <h5>All watches</h5>
        </div>
        <div className="sidebar_btns_right">
          <Button onClick={changeSideBarStatus} className="bar_btn">
            Filters <AddIcon />
          </Button>
          <Button className="bar_btn">Sort By</Button>
        </div>
      </div>
      <div className="product-list">
        {products ? (
          currentData().map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <h3>Load..</h3>
        )}
      </div>
      <div className="pagination">
        <Pagination count={count} page={page} onChange={handlePage} />
      </div>
    </div>
  );
};

export default ProductsList;

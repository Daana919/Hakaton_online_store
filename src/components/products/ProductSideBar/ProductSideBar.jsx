import React from "react";
import FilterProduct from "../FilterProduct/FilterProduct";

import "../../../styles/ProductSideBar.css";

const ProductSideBar = ({ isSideBar }) => {
  return isSideBar ? (
    <div className="sideBar">
      <FilterProduct />
    </div>
  ) : null;
};

export default ProductSideBar;

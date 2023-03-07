import React, { useEffect, useState } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import "..//../../styles/ProductList.css";
import TuneIcon from "@mui/icons-material/Tune";

import { useSearchParams } from "react-router-dom";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const ProductsList = ({ changeSideBarStatus, page, setPage }) => {
  const { products, getProducts } = useProducts();

  //search
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  function handleSearch(e) {
    setSearch(e.target.value);
  }
  //search logic end
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
      <TextField
        className="productList_container__input"
        id="input-with-icon-textfield"
        placeholder="Search for watches"
        onChange={handleSearch}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        variant="standard"
      />

      <div className="sidebar">
        <div className="sidebar_btns_left">
          <Button onClick={changeSideBarStatus} className="bar_btn">
            <TuneIcon />
          </Button>
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

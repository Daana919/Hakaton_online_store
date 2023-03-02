import React, { useEffect, useState } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "@mui/material/Pagination";
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
		// <div>
		// 	<h3 className='title_product_list'>Which product is right for you?</h3>
		// 	<button style={{ marginLeft: "26px", marginBottom: "28px" }} onClick={changeSideBarStatus}>
		// 		Filter&Search Menu
		// 	</button>
		// 	<div className='product-list'>
		// 		{products ? currentData().map(item => <ProductCard key={item.id} item={item} />) : <h3>Loading...</h3>}
		// 		<Pagination count={count} page={page} onChange={handlePage} />
		// 	</div>
		// </div>
		<div style={{ background: "#242424" }}>
			<h3 className='title_product_list'>Which product is right for you?</h3>
			<button style={{ marginLeft: "26px", marginBottom: "28px" }} onClick={changeSideBarStatus}>
				Filter&Search Menu
			</button>
			<div className='product-list'>
				{products ? currentData().map(item => <ProductCard key={item.id} item={item} />) : <h3>Load..</h3>}
				<Pagination count={count} page={page} onChange={handlePage} />
			</div>
		</div>
	);
};

export default ProductsList;

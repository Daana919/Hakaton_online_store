import React, { useState, useEffect } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import "../../../styles/EditProduct.css";

const EditProduct = () => {
	const { getProductDetails, productDetails, saveEditedProduct } = useProducts();

	const [product, setProduct] = useState(productDetails);

	const navigate = useNavigate();

	const { id } = useParams();

	useEffect(() => {
		getProductDetails(id);
	}, []);

	useEffect(() => {
		setProduct(productDetails);
	}, [productDetails]);

	const handleInp = e => {
		if (e.target.name === "price") {
			let obj = {
				...product,
				price: Number(e.target.value),
			};
			setProduct(obj);
		} else {
			let obj = {
				...product,
				[e.target.name]: e.target.value,
			};
			setProduct(obj);
		}
	};

	return (
		<div style={{ height: "30%" }}>
			<h2 className='edit_title'>Edit Watch Information</h2>
			{product ? (
				<div className='edit_container'>
					<div className='edit_block'>
						<input className='edit_inp' type='text' placeholder='Title' name='name' onChange={handleInp} value={product.name} />
						{/* <br /> */}

						<input className='edit_inp' type='text' placeholder='Description' name='description' onChange={handleInp} value={product.description} />
						{/* <br /> */}

						<input className='edit_inp' type='number' placeholder='Price' name='price' onChange={handleInp} value={product.price} />
						{/* <br /> */}

						<input className='edit_inp' type='text' placeholder='Picture' name='picture' onChange={handleInp} value={product.picture} />
						{/* <br /> */}

						<input className='edit_inp' type='text' placeholder='Type' name='type' onChange={handleInp} value={product.type} />
						<br />

						<button
							className='btn_edit'
							onClick={() => {
								saveEditedProduct(product);
								navigate("/products");
							}}
						>
							Save Changes
						</button>
					</div>
				</div>
			) : (
				<h3>Loading...</h3>
			)}
		</div>
	);
};

export default EditProduct;

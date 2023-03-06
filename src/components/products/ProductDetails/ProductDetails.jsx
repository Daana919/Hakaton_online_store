import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useCart } from "../../../contexts/CartContextProvider";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styled from "@emotion/styled";

import "..//../../styles/ProductDetails.css";

const StyledButton = styled(Button)`
	background-color: #000;
	color: #fff;
	border-radius: 5px;
	padding: 10px 20px;
	margin: 30px 0;
	font-weight: bold;
	text-transform: uppercase;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: #a8741a;
		color: #fff;
	}

	&:active {
		background-color: #a60024;
	}
`;

const ProductDetails = () => {
	const { id } = useParams();
	const { getProductDetails, productDetails } = useProducts();
	const { addProductToCart, checkProductInCart } = useCart();

	useEffect(() => {
		getProductDetails(id);
	}, []);

	return (
		<div>
			{productDetails ? (
				<>
					<div className='wrapper_details'>
						<div className='container'>
							<div className='container_left_sight'>
								<img src={productDetails.image} alt='' />
							</div>
							<div className='container_right_sight'>
								<h3>{productDetails.name}</h3>
								<p>{productDetails.description}</p>
								<p style={{ fontSize: "18px" }}>
									<b>${productDetails.price}</b>
								</p>
								<StyledButton onClick={() => addProductToCart(productDetails)}>Add to Cart</StyledButton>
								<FavoriteBorderIcon /> <a>ADD TO WISHLIST</a>
							</div>
						</div>
					</div>
				</>
			) : (
				<h3>Loading...</h3>
			)}
		</div>
	);
};

export default ProductDetails;

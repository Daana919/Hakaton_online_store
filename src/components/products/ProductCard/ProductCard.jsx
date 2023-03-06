import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "..//../../styles/ProductCard.css";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useCart } from "../../../contexts/CartContextProvider";
import { useLike } from "../../../contexts/LikeContextProvider";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { width } from "@mui/system";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledButton = styled(Button)`
	background-color: #c4002f;
	color: #fff;
	border-radius: 20px;
	padding: 10px 20px;
	font-weight: bold;
	text-transform: uppercase;
	transition: all 0.2s ease-in-out;
	animation: ${pulseAnimation} 2s infinite;

	&:hover {
		background-color: #a8741a;
		color: #fff;
	}

	&:active {
		background-color: #a60024;
	}
`;

const ProductCard = ({ item }) => {
	const navigate = useNavigate();
	const { deleteProduct } = useProducts();
	const { addProductToCart, checkProductInCart } = useCart();
	const { addProductToLike, checkProductInLike } = useLike();
	return (
		<Card sx={{ maxWidth: 250 }} className='product-card'>
			<div class='change-photos'>
				<div class='change-photo'>
					<CardMedia
						sx={{
							height: 300,
							backgroundSize: "contain",
							borderRadius: "10px",
						}}
						image={item.image}
						className='card_image'
					>
						<div className='like-cart_btns'>
							<IconButton size='small' onClick={() => addProductToLike(item)}>
								<FavoriteIcon
									style={{
										color: `${checkProductInLike(item.id) ? "#a8741a" : "#C8BCAC"}`,
									}}
								/>
							</IconButton>
							<IconButton size='small' onClick={() => addProductToCart(item)}>
								<AddShoppingCartOutlinedIcon
									style={{
										color: `${checkProductInCart(item.id) ? "#a8741a" : "#C8BCAC"}`,
									}}
								/>
							</IconButton>
						</div>
					</CardMedia>
					<CardContent style={{ height: "28%" }} className='card_content'>
						<Typography className='mt-0' gutterBottom>
							<h3>{item.name}</h3>
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							<span>
								<b>${item.price}</b>
							</span>
						</Typography>
					</CardContent>
				</div>
				<div class='change-photo'>
					<CardMedia sx={{ height: 400, borderRadius: 5 }} image={item.hoverImage} className='hoverImg'>
						<div className='like-cart_btns'>
							<IconButton size='small' onClick={() => addProductToLike(item)} className='favorite_icon'>
								<FavoriteIcon
									style={{
										color: `${checkProductInLike(item.id) ? "#a8741a" : "#C8BCAC"}`,
									}}
								/>
							</IconButton>
							<IconButton size='small' onClick={() => addProductToCart(item)}>
								<AddShoppingCartOutlinedIcon
									style={{
										color: `${checkProductInCart(item.id) ? "#a8741a" : "#C8BCAC"}`,
									}}
								/>
							</IconButton>
						</div>
						<CardActions className='card_btns'>
							{/* <div className="admin_btns">
              <StyledButton size="small" onClick={() => navigate(/edit/${item.id})}>
          Edit
        </StyledButton><br/>
        <StyledButton size="small" onClick={() => deleteProduct(item.id)}>
          Delete
        </StyledButton>                
              </div> */}

							<StyledButton
								style={{ marginTop: "10px", borderRadius: 3 }}
								size='small'
								variant='contained'
								onClick={() => {
									navigate(`/details/${item.id}`);
								}}
								className='material-bubble'
							>
								Discover
							</StyledButton>
						</CardActions>
					</CardMedia>
				</div>
			</div>
		</Card>
	);
};
export default ProductCard;

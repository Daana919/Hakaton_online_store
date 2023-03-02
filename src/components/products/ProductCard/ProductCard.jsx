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

const ProductCard = ({ item }) => {
	const navigate = useNavigate();
	const { deleteProduct } = useProducts();
	const { addProductToCart, checkProductInCart } = useCart();
	const { addProductToLike, checkProductInLike } = useLike();
	return (
		<Card sx={{ maxWidth: 460, background: "#242427" }} className='product-card'>
			<CardMedia sx={{ height: 300 }} image={item.picture} />
			<CardContent style={{ height: "28%" }}>
				<Typography className='mt-0' gutterBottom variant='h5' component='div'>
					{item.name}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					<b>Price:</b>
					{item.price} <br />
					<b>Type:</b>
					{item.type}
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					style={{ marginTop: "0" }}
					size='small'
					onClick={() => {
						navigate(`/details/${item.id}`);
					}}
				>
					Details
				</Button>
				<Button size='small' onClick={() => navigate(`/edit/${item.id}`)}>
					Edit
				</Button>
				<Button size='small' onClick={() => deleteProduct(item.id)}>
					Delete
				</Button>

				<IconButton size='small' onClick={() => addProductToCart(item)}>
					<AddShoppingCartOutlinedIcon color={checkProductInCart(item.id) ? "primary" : ""} />
				</IconButton>
				<IconButton size='small' onClick={() => addProductToLike(item)}>
					<FavoriteBorderIcon color={checkProductInLike(item.id) ? "primary" : ""} />
				</IconButton>
			</CardActions>
		</Card>
	);
};
export default ProductCard;

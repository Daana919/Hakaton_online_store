import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLike } from "../../contexts/LikeContextProvider";
import { useCart } from "../../contexts/CartContextProvider";
import "../../styles/Like.css";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

export default function Like() {
	const { getLike, like, deleteProductFromLike } = useLike();
	const { addProductToCart, checkProductInCart } = useCart();
	React.useEffect(() => {
		getLike();
	}, []);

	function likeCleaner() {
		localStorage.removeItem("like");
		getLike();
	}
	const theme = createTheme({
		palette: {
			primary: {
				main: orange[50],
			},
		},
	});

	return (
		<div className='like'>
			<div className='items'>Items:{like ? like.products.length : 0}</div>

			<div>
				<div className='like_block'>
					{like?.products.map(row => (
						<Card sx={{ maxWidth: 250 }} className='like-list'>
							<CardActions sx={{ display: "flex", justifyContent: "center" }}>
								<DeleteOutlineIcon size='small' color='#a8741a' onClick={() => deleteProductFromLike(row.item.id)}>
									Delete
								</DeleteOutlineIcon>
								<IconButton size='small' onClick={() => addProductToCart(row.item)}>
									<AddShoppingCartOutlinedIcon
										style={{
											color: `${checkProductInCart(row.item.id) ? "#a8741a" : "#C8BCAC"}`,
										}}
									/>
								</IconButton>
							</CardActions>
							<CardMedia sx={{ height: 250, width: 150 }} image={row.item.image} />
							<CardContent style={{ height: "20%" }}>
								<Typography className='mt-0' gutterBottom variant='h5' component='div' sx={{ fontSize: "15px", width: 140 }}>
									{row.item.name}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									<b>Price:</b>
									{row.item.price} <br />
									<b>Type:</b>
									{row.item.type}
								</Typography>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
			<div className='clean'>
				<div className='btn_clean_block'>
					<button className='btn_clean_like' startIcon={<DeleteIcon />} onClick={likeCleaner}>
						Delete all
					</button>
				</div>
			</div>
		</div>
	);
}

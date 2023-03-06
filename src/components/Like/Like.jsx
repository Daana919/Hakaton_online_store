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

	return (
		<div>
			<div className='items'>Items:{like ? like.products.length : 0}</div>
			<div>
				{like?.products.map(row => (
					<Card sx={{ maxWidth: 300 }} className='like-list'>
						<CardMedia sx={{ height: 300 }} image={row.item.picture} />
						<CardContent style={{ height: "28%" }}>
							<Typography className='mt-0' gutterBottom variant='h5' component='div'>
								{row.item.name}
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								<b>Price:</b>
								{row.item.price} <br />
								<b>Type:</b>
								{row.item.type}
							</Typography>
						</CardContent>
						<CardActions>
							<Button size='small' onClick={() => deleteProductFromLike(row.item.id)}>
								Delete
							</Button>
							<Button size='small' onClick={() => addProductToCart(row.item)}>
								Add
							</Button>
						</CardActions>
					</Card>
				))}
			</div>
			<div>
				<Button onClick={likeCleaner}>Delete all watches from favorites</Button>
			</div>
		</div>
	);
}

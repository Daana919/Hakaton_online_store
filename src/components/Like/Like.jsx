import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";

// custom
import { useLike } from "../../contexts/LikeContextProvider";
// import { Button, TextField, Typography } from "@mui/material";

export default function Like() {
	const { getLike, like, deleteProductFromLike } = useLike();

	React.useEffect(() => {
		getLike();
	}, []);

	function likeCleaner() {
		localStorage.removeItem("like");
		getLike();
	}

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
				<TableHead>
					<TableRow>
						<TableCell>Picture</TableCell>
						<TableCell align='center'>Name</TableCell>
						<TableCell align='center'>Type</TableCell>
						<TableCell align='center'>Price</TableCell>
						<TableCell align='center'></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{like?.products.map(row => (
						<TableRow key={row.item.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
							<TableCell>
								<img src={row.item.picture} alt='error:(' width='50' />
							</TableCell>
							<TableCell align='center'>{row.item.name}</TableCell>
							<TableCell align='center'>{row.item.type}</TableCell>
							<TableCell align='center'>{row.item.price}</TableCell>
							<TableCell align='center'>
								<button onClick={() => deleteProductFromLike(row.item.id)}>Delete From like</button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<Typography variant='h6' component='div'>
				Products you like: {like ? like.products.length : 0}
				<Button onClick={likeCleaner}>Delete all watches from favorites</Button>
			</Typography>
		</TableContainer>
		// <>
		// 	<h3 className='title_product_list'>likes</h3>

		// 	{like?.products.map ? (
		// 		row => (
		// 			<Card sx={{ maxWidth: 460, background: "#242427" }} className='product-card' key={row.item.id}>
		// 				<CardMedia sx={{ height: 300 }} image={row.item.picture} />
		// 				<CardContent style={{ height: "28%" }}>
		// 					<Typography className='mt-0' gutterBottom variant='h5' component='div'>
		// 						{row.item.name}
		// 					</Typography>
		// 					<Typography variant='body2' color='text.secondary'>
		// 						<b>Price:</b>
		// 						{row.item.price} <br />
		// 						<b>Type:</b>
		// 						{row.item.type}
		// 					</Typography>
		// 				</CardContent>
		// 				<CardActions>
		// 					<Button size='small' onClick={likeCleaner}>
		// 						Delete
		// 					</Button>{" "}
		// 				</CardActions>
		// 			</Card>
		// 		)
		// 	) : (
		// 		<h3>Load..</h3>
		// 	)}
		// </>
	);
}

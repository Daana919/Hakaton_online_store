import * as React from "react";
import "../../styles/Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";

// custom
import { useCart } from "../../contexts/CartContextProvider";

export default function Cart() {
	const { getCart, cart, changeProductCount, deleteProductFromCart } = useCart();
	const navigate = useNavigate();

	React.useEffect(() => {
		getCart();
	}, []);

	function cartCleaner() {
		localStorage.removeItem("cart");
		getCart();
	}

	return (
		<section className='h-100 h-custom shopCartSection'>
			<div className='container py-5 h-100 '>
				<div className='row d-flex justify-content-center align-items-center h-100 w-100'>
					<div className='col-12'>
						<div className='card card-registration card-registration-2 cart_bg'>
							<div className='card-body p-0'>
								<div className='row g-0'>
									<div className='col-lg-8'>
										<div className='p-4'>
											<div className='d-flex justify-content-between align-items-center mb-5'>
												<h1 className='fw-bold mb-0 text-black'>Shopping Cart</h1>
												<h6 className='mb-0 text-muted' style={{ color: "black" }}></h6>
											</div>
											<hr className='my-4' />
											{cart?.products.map(row => (
												<div key={row.item.id} className='row mb-4 d-flex justify-content-between align-items-center'>
													<div className='col-md-2 col-lg-2 col-xl-2'>
														<img src={row.item.image} className='img-fluid rounded-3' alt='Cotton T-shirt' />
													</div>
													<div className='col-md-3 col-lg-3 col-xl-3'>
														<h6 className='text-muted'>{row.item.name}</h6>
														<h6 className='text-black mb-0'>Brand: {row.item.brand}</h6>
													</div>
													<div className='col-md-3 col-lg-3 col-xl-2 d-flex'>
														<button className='btn btn-link px-2' onClick={() => changeProductCount(parseInt(row.count) - 1, row.item.id)}>
															<RemoveIcon fontSize='small' />
														</button>

														<input id='form1' min='0' name='quantity' value={row.count} type='text' className='form-control form-control-sm' onChange={e => changeProductCount(parseInt(e.target.value), row.item.id)} />

														<button className='btn btn-link px-2 btn-size' onClick={() => changeProductCount(parseInt(row.count) + 1, row.item.id)}>
															<AddIcon fontSize='small' />
														</button>
													</div>
													<div className='col-md-3 col-lg-2 col-xl-2 offset-lg-1'>
														<h6 className='mb-0' style={{ color: "black" }}>
															${row.subPrice}
														</h6>
													</div>
													<div className='col-md-1 col-lg-1 col-xl-1 text-end'>
														<DeleteIcon style={{ color: "black" }} onClick={() => deleteProductFromCart(row.item.id)} />
													</div>
												</div>
											))}
											<hr className='my-4' />

											<div className='pt-5'>
												<h6 className='mb-0'>
													<h6 style={{ color: "black" }}>Total Price: ${cart?.totalPrice}</h6>
													<a href='/' className='text-body'>
														<i className='fas fa-long-arrow-alt-left me-2'></i>
														Back to shop
													</a>
													<br />
													<button onClick={cartCleaner} className='cartCleaner_btn'>
														Clean Cart
													</button>
												</h6>
											</div>
										</div>
									</div>
									<div className='col-lg-4 bg-grey'>
										<div className='p-3 '>
											<h3 className='fw-bold mb-0 p-4 ' style={{ color: "black" }}>
												Summary
											</h3>
											{/* <hr className='my-4' /> */}

											<div className='d-flex justify-content-between mb-4'></div>
											<hr className='my-4' />

											<div className='d-flex justify-content-between mb-5'>
												<h5 className='text-uppercase' style={{ color: "black" }}>
													Total price: ${cart?.totalPrice}
												</h5>
											</div>
											<button type='button' onClick={() => navigate("/cart/order")} className='btn btn-dark btn-block btn-lg' data-mdb-ripple-color='dark'>
												Checkout
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

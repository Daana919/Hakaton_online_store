import React from "react";
import "../styles/FormOrderPage.css";
import { useCart } from "../contexts/CartContextProvider";

const FormOrderPage = () => {
	const { getCart, cart } = useCart();
	return (
		<>
			<div class='row'>
				<div class='col-75'>
					<div class='con'>
						<form action='/action_page.php'>
							<div class='row'>
								<div class='col-50'>
									<h3>Billing Address</h3>
									<label for='fname'>
										<i class='fa fa-user'></i> Full Name
									</label>
									<input className='order_inp' type='text' id='fname' name='firstname' placeholder='John M. Doe' />
									<label for='email'>
										<i class='fa fa-envelope'></i> Email
									</label>
									<input className='order_inp' type='text' id='email' name='email' placeholder='john@example.com' />
									<label for='adr'>
										<i class='fa fa-address-card-o'></i> Address
									</label>
									<input className='order_inp' type='text' id='adr' name='address' placeholder='542 W. 15th Street' />
									<label for='city'>
										<i class='fa fa-institution'></i> City
									</label>
									<input className='order_inp' type='text' id='city' name='city' placeholder='New York' />

									<div class='row'>
										<div class='col-50'>
											<label for='state'>State</label>
											<input className='order_inp' type='text' id='state' name='state' placeholder='NY' />
										</div>
										<div class='col-50'>
											<label for='zip'>Zip</label>
											<input className='order_inp' type='text' id='zip' name='zip' placeholder='10001' />
										</div>
									</div>
								</div>

								<div class='col-50'>
									<h3>Payment</h3>
									<label for='fname'>Accepted Cards</label>
									<div class='icon-container'>
										<i class='fa fa-cc-visa' style={{ color: "navy" }}></i>
										<i class='fa fa-cc-amex' style={{ color: "blue" }}></i>
										<i class='fa fa-cc-mastercard' style={{ color: "red" }}></i>
										<i class='fa fa-cc-discover' style={{ color: "orange" }}></i>
									</div>
									<label for='cname'>Name on Card</label>
									<input className='order_inp' type='text' id='cname' name='cardname' placeholder='John More Doe' />
									<label for='ccnum'>Credit card number</label>
									<input className='order_inp' type='text' id='ccnum' name='cardnumber' placeholder='1111-2222-3333-4444' />
									<label for='expmonth'>Exp Month</label>
									<input className='order_inp' type='text' id='expmonth' name='expmonth' placeholder='September' />
									<div class='row'>
										<div class='col-50'>
											<label for='expyear'>Exp Year</label>
											<input className='order_inp' type='text' id='expyear' name='expyear' placeholder='2018' />
										</div>
										<div class='col-50'>
											<label for='cvv'>CVV</label>
											<input className='order_inp' type='text' id='cvv' name='cvv' placeholder='352' />
										</div>
									</div>
								</div>
							</div>
							<label>
								<input type='checkbox' name='sameadr' /> Shipping address same as billing
							</label>
							<div>
								<p>Total Price: ${cart?.totalPrice}</p>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div style={{ width: "100%" }}>
				<div className='btn_div'>
					<input type='submit' value='Place the order' class='btn_order' />
				</div>
			</div>
		</>
	);
};

export default FormOrderPage;

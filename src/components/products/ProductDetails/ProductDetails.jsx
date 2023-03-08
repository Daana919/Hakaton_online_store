import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useCart } from "../../../contexts/CartContextProvider";
import { useLike } from "../../../contexts/LikeContextProvider";

import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styled from "@emotion/styled";
import "../../../assets/icons/icon_payment.svg";

import "..//../../styles/ProductDetails.css";

//accordion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

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
  const { addProductToLike, checkProductInLike } = useLike();


	useEffect(() => {
		getProductDetails(id);
	}, []);

  return (
    <div>
      {productDetails ? (
        <>
          <div className="wrapper_details">
            <div className="container">
              <div className="container_left_sight animate__animated animate__backInLeft">
                <img src={productDetails.image} alt="" />
              </div>
              <div className="container_right_sight animate__animated animate__backInDown">
                <h3>{productDetails.name}</h3>
                <p>{productDetails.description}</p>
                <p style={{ fontSize: "18px", color: "#a8741a" }}>
                  <b>${productDetails.price}</b>
                </p>

                <StyledButton onClick={() => addProductToCart(productDetails)}>
                  Add to Cart
                </StyledButton>
                <br />
                <div className="btn_icon">
                  <IconButton
                    size="small"
                    onClick={() => addProductToLike(productDetails)}
                    className="icon"
                  >
                    <FavoriteBorderIcon
                      style={{
                        color: `${
                          checkProductInLike(productDetails.id)
                            ? "#a8741a"
                            : "#C8BCAC"
                        }`,
                      }}
                    />
                  </IconButton>
                  <a onClick={() => addProductToLike(productDetails)}>
                    ADD TO WISHLIST
                  </a>
                </div>

                <div className="wrapper_accordion">
                  <Accordion className="accordion">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="accordion_title"
                    >
                      <div className="title_contain">
                        <LocalShippingOutlinedIcon
                          style={{ color: "#7a7a7a", marginRight: "10px" }}
                        />
                        <Typography>Free shipping & Returns</Typography>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails className="accordion_details">
                      <Typography>
                        All orders placed on the online boutique are expedited
                        with free shipping and returns with a 14-day return
                        period.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className="accordion">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                      className="accordion_title"
                    >
                      <div className="title_contain">
                        <LockOutlinedIcon
                          style={{ color: "#7a7a7a", marginRight: "10px" }}
                        />
                        <Typography>Payment Methods</Typography>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails className="accordion_details">
                      <ul className="accordion_list">
                        <li>
                          <img
                            src="https://cdn3.iconfinder.com/data/icons/payment-method-1/64/_Mastercard-512.png"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src="https://cdn3.iconfinder.com/data/icons/payment-method-1/64/_Paypal-39-1024.png"
                            alt=""
                          />
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
            <div className="container_features animate__animated animate__backInLeft">
              <h2>SPECIFICATIONS</h2>
              <div className="features_content">
                <div className="features_ls">
                  <h4>Case</h4>
                  <ul>
                    <li className="features_list_item">
                      <p className="mini_title">Material</p>
                      <span>{productDetails.material}</span>
                    </li>
                    <li className="features_list_item">
                      <p className="mini_title">Diameter</p>
                      <span>{productDetails.diameter} mm</span>
                    </li>
                    <li className="features_list_item">
                      <p className="mini_title">Function</p>
                      <span>{productDetails.function}</span>
                    </li>
                    <li className="features_list_item">
                      <p className="mini_title">Strap</p>
                      <span>{productDetails.strap}</span>
                    </li>

                    <li className="features_list_item">
                      <p className="mini_title">Frequency</p>
                      <span>{productDetails.frequency}</span>
                    </li>
                  </ul>
                </div>
                <div className="features_rs">
                  <img src={productDetails.hoverImage} alt="" />
                </div>
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

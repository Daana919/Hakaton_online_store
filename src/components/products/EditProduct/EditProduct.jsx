import React, { useState, useEffect } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import "../../../styles/EditProduct.css";

const EditProduct = () => {
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();

  const [product, setProduct] = useState(productDetails);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const handleInp = (e) => {
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
    <div style={{ height: "30%", fontFamily: "Chakra Petch" }} className='edit_page'>
      <h2 className="edit_title">Edit Watch Information</h2>
      {product ? (
        <div className="edit_container">
          <div className="edit_block">
            <input
              className="edit_inp"
              type="text"
              placeholder="Title"
              name="name"
              onChange={handleInp}
              value={product.name}
            />
            <input
              className="edit_inp"
              type="text"
              placeholder="Description"
              name="description"
              onChange={handleInp}
              value={product.description}
            />
            <input
              className="edit_inp"
              type="number"
              placeholder="Price"
              name="price"
              onChange={handleInp}
              value={product.price}
            />

            <input
              className="edit_inp"
              type="text"
              placeholder="Image"
              name="image"
              onChange={handleInp}
              value={product.image}
            />
            <input
              className="elem"
              type="text"
              placeholder="HoverImage"
              name="hoverImage"
              onChange={handleInp}
              value={product.hoverImage}
            />
            <input
              className="elem"
              type="text"
              placeholder="Brand"
              name="brand"
              onChange={handleInp}
              value={product.brand}
            />
            <input
              className="elem"
              type="text"
              placeholder="Gender"
              name="gender"
              onChange={handleInp}
              value={product.gender}
            />
            <input
              className="elem"
              type="text"
              placeholder="Function"
              name="function"
              onChange={handleInp}
              value={product.function}
            />
            <input
              className="elem"
              type="text"
              placeholder="Strap"
              name="strap"
              onChange={handleInp}
              value={product.strap}
            />
            <input
              className="elem"
              type="text"
              placeholder="Frequency"
              name="frequency"
              onChange={handleInp}
              value={product.frequency}
            />
            <input
              className="elem"
              type="text"
              placeholder="Material"
              name="material"
              onChange={handleInp}
			  value={product.material}
            />
            <br />

            <button
              className="btn_edit"
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

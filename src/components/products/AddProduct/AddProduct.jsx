import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import "../../../styles/AddProduct.css";

const AddProduct = () => {
  const navigate = useNavigate();

  const { addProduct } = useProducts();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    brand: "",
    gender: "",
    image: "",
    hoverImage: "",
    frequency: "",
    function: "",
    strap: "",
    material: "",
    diameter: "",
    water_resistance: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        price: Number(e.target.value),
      };
      setProduct(obj);
      console.log(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      console.log(setProduct(obj));
    }
  };

  // console.log(setProduct);
  return (
    <div className="admin_panel">
      <div>
        {/* <img className='img_admin' src='https://content.rolex.com/dam/watches/family-pages/datejust/2023/a-date-with-destiny/classic-watches-datejust-a-date-with-destiny-rolesor-datejust-jubilee.jpg?imwidth=1920' alt='' /> */}
      </div>
      <h2 className="admin_panel_title">Add New Product</h2>
      <div className="add_block">
        <input
          className="elem"
          type="text"
          placeholder="Title"
          name="name"
          onChange={handleInp}
        />
        <input
          className="elem"
          type="text"
          placeholder="Description"
          name="description"
          onChange={handleInp}
        />
        <input
          className="elem"
          type="number"
          placeholder="Price"
          name="price"
          onChange={handleInp}
        />
        <input
          className="elem"
          type="text"
          placeholder="Image"
          name="image"
          onChange={handleInp}
        />
        <input
          className="elem"
          type="text"
          placeholder="HoverImage"
          name="hoverImage"
          onChange={handleInp}
        />
        <input
          className="elem"
          type="text"
          placeholder="Brand"
          name="brand"
          onChange={handleInp}
        />
        <input
          className="elem"
          type="text"
          placeholder="Gender"
          name="gender"
          onChange={handleInp}
        />
        <input
          className="elem"
          type="text"
          placeholder="Function"
          name="function"
          onChange={handleInp}
        />
        <input
          className="elem"
          type="text"
          placeholder="Strap"
          name="strap"
          onChange={handleInp}
        />
        <input
          className="elem"
          type="text"
          placeholder="Frequency"
          name="frequency"
          onChange={handleInp}
        />
        <input
          className="elem"
          type="text"
          placeholder="Material"
          name="material"
          onChange={handleInp}
        />
        <button
          className="btn_admin"
          onClick={() => {
            addProduct(product);
            navigate("/products");
          }}
        >
          Save
        </button>
      </div>
    </div>
  );

};

export default AddProduct;

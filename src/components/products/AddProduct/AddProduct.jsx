import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";

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
    water_resistance:""
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
    <div>
      <h2>Add Product</h2>

      <input type="text" placeholder="Title" name="name" onChange={handleInp} />
      <br />

      <input
        type="text"
        placeholder="Description"
        name="description"
        onChange={handleInp}
      />
      <br />

      <input
        type="number"
        placeholder="Price"
        name="price"
        onChange={handleInp}
      />
      <br />

      <input
        type="text"
        placeholder="image"
        name="image"
        onChange={handleInp}
      />
      <br />
      <input
        type="text"
        placeholder="hoverImage"
        name="hoverImage"
        onChange={handleInp}
      />
      <br />

      <input
        type="text"
        placeholder="Diameter"
        name="diameter"
        onChange={handleInp}
      />
      <br />

      <button
        onClick={() => {
          addProduct(product);
          navigate("/products");
        }}
      >
        Save
      </button>
    </div>
  );
};

export default AddProduct;

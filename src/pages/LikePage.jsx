import React from "react";
import Like from "../components/Like/Like";
import "../styles/Like.css";

const LikePage = () => {
  return (
    <div className="save_container">
      <div className="save_container__content">
        <p>Favorites Feed</p>
      </div>
      <Like />
    </div>
  );
};

export default LikePage;

import React from "react";
import Like from "../components/Like/Like";

const LikePage = () => {
	return (
		<div>
			<div className='saved'>
				<p style={{ display: "flex", justifyContent: "center", fontSize: "30px" }}>Saved items</p>
			</div>
			<Like />
		</div>
	);
};

export default LikePage;

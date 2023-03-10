import React from "react";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import LikeContextProvider from "./contexts/LikeContextProvider";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<LikeContextProvider>
			<CartContextProvider>
				<ProductContextProvider>
					<AuthContextProvider>
						<Navbar />
						<MainRoutes />
						<Footer />
					</AuthContextProvider>
				</ProductContextProvider>
			</CartContextProvider>
		</LikeContextProvider>
	);
};

export default App;

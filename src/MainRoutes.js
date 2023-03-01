import React from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import EditPage from "./pages/EditPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import FormOrderPage from "./pages/FormOrderPage";

const MainRoutes = () => {
	const PUBLIC_ROUTES = [
		{
			link: "/register",
			element: <RegistrationPage />,
			id: 1,
		},
		{
			link: "/login",
			element: <LoginPage />,
			id: 2,
		},
		{
			link: "/",
			element: <HomePage />,
			id: 3,
		},
		{
			link: "*",
			element: <NotFoundPage />,
			id: 4,
		},
		{
			link: "/admin",
			element: <AdminPage />,
			id: 5,
		},
		{
			link: "/products",
			element: <ProductsPage />,
			id: 6,
		},
		{
			link: "/details/:id",
			element: <ProductDetailsPage />,
			id: 7,
		},
		{
			link: "/edit/:id",
			element: <EditPage />,
			id: 8,
		},
		{
			link: "/cart",
			element: <CartPage />,
			id: 9,
		},
		{
			link: "/order",
			element: <FormOrderPage />,
			id: 10,
		},
	];
	return (
		<Routes>
			{PUBLIC_ROUTES.map(item => (
				<Route path={item.link} element={item.element} key={item.id} />
			))}
		</Routes>
	);
};

export default MainRoutes;

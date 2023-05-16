import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Products } from "./components/Products.jsx";
import ProductDetail from "./ProductDetail.jsx";
import Home from "./components/Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Home />} />
					<Route path="home" element={<Home />} />
					<Route path="products" element={<Products />} />
					<Route path="products/:id" element={<ProductDetail />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

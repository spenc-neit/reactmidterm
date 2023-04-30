import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ReadAll } from "./readAll.jsx";
import OneEntry from "./OneEntry.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route index element={<App />} />
				<Route path="prodview" element={<ReadAll />}>
        {/* <Route path="prodview" element={<OneEntry id="1"/>}> */}
					<Route path=":id" element={<OneEntry />} />
				</Route>
				<Route path="*" element={<div>Route not found</div>} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Products } from "./components/Products";
import {
	Link,
	Route,
	Routes,
	useNavigate,
	BrowserRouter,
  Outlet,
} from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const handleShowHome = () =>{
    navigate("home")
  }

  const handleShowProducts = () => {
    navigate("products")
  }

	return (
		<div className="App">
      <div className="navstyling">
        <button className="button" onClick={handleShowHome}>
          Home
        </button>
        <button className="button" onClick={handleShowProducts}>
          Product
        </button>
      </div>
      <hr />
      <Outlet />
		</div>
	);
}

export default App;

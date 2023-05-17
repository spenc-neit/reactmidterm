import { useContext, useState, useEffect } from "react";
import "./App.css";
import {
	useNavigate,
  Outlet,
} from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import { ThemeProvider } from "./ThemeContext";

function App() {
  const navigate = useNavigate();
  
  const [selectValue, setSelectValue] = useState("light")

  const {changeTheme, theme} = useContext(ThemeContext);

  useEffect(() => {
    document.body.style.backgroundColor = theme.background;
  }, [theme]);

  useEffect(()=>{
    changeTheme(selectValue)
  }, [selectValue])

  const handleShowHome = () =>{
    navigate("home")
  }

  const handleShowProducts = () => {
    navigate("products")
  }

  const themeSelect = (event) =>{
    const val = event.target.value
    setSelectValue(val)
  }

	return (
      <div className="App">
        <div className="navstyling">
          <button className="button" onClick={handleShowHome} style={{backgroundColor:theme.boxbg, color:theme.linkcolor}}>
            Home
          </button>
          <button className="button" onClick={handleShowProducts} style={{backgroundColor:theme.boxbg, color:theme.linkcolor}}>
            Product
          </button>
          <select onChange={themeSelect} style={{backgroundColor:theme.boxbg, color:theme.linkcolor, borderRadius:"8px", border:"0", boxShadow: "0 0px 1px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.2)", fontWeight:"bold", fontFamily:"inherit"}}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="pastel">Pastel</option>
          </select>
        </div>
        <hr />
        <Outlet />
      </div>
	);
}

export default App;

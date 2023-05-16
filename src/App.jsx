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
  
  document.querySelector('html').setAttribute("style", "height:auto;")
  //when I didn't have the above line, the background colors I set only filled the initial screen size - 
    //past the initial screen size, it would be reset to black, my default for chrome, for the rest of the page.
  //it seemed be the height of the HTML element causig issues, so I fixed it the only way I could think of, with JS.
  //please let me know if there was a way I could have avoided this, or a better way to solve it, since this way isn't perfect 
  //                                                                                 (it caused problems in Home and ProductDetail that I had to fix with more JS)
  //or, I suppose, if this didn't fix it and it comes up somewhere else...

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

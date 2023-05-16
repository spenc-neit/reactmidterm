import { useContext, useEffect } from "react";
import { ThemeContext } from "../ThemeContext";

function Home(){

    const {theme} = useContext(ThemeContext);

    document.querySelector('html').setAttribute("style", "height:100%;")
	//had to put this in here else the content would be vertically centered
	//if you get here before app.jsx, go there, lines 13-17 for more info

    useEffect(() => {
        document.body.style.backgroundColor = theme.background;
    }, [theme]);

    return(
        <div style={{color:theme.foreground}}>
            <h2>Home Page</h2>
            <p>Welcome to the store</p>
        </div>
        
    )
}

export default Home;
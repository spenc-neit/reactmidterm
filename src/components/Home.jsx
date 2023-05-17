import { useContext, useEffect } from "react";
import { ThemeContext } from "../ThemeContext";

function Home(){

    const {theme} = useContext(ThemeContext);

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
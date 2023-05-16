import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Box = (props) => {

    const {theme} = useContext(ThemeContext)

    if(props.detail){
        return (
            <div className="box" style={{width:"100%", backgroundColor:theme.boxbg, border:theme.border}}>{props.children}</div>
        )  
    }

    return (
        <div className="box" style={{backgroundColor:theme.boxbg, border:theme.border}}>{props.children}</div>
    )

}
export {Box};
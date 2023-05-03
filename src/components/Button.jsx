const Button = (props) =>{
    return(
        <button style={{backgroundColor: props.bgcolor}} onClick={props.onClick}>{props.children}</button>
    )
}
export {Button};
const Button = (props) =>{
    console.log(props.onClick)
    return(
        <button style={{backgroundColor: props.bgcolor}} onClick={props.onClick}>{props.children}</button>
    )
}
export {Button};
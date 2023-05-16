const Box = (props) => {

    if(props.detail){
        return (
            <div className="box" style={{width:"100%"}}>{props.children}</div>
        )  
    }

    return (
        <div className="box">{props.children}</div>
    )

}
export {Box};
import React from "react";

const Header =(props)=> {
    return(
        <header style={{height:300, width:"100%", backgroundColor:"pink"}}>
            <button onClick={props.onClick} type="button" style={{width: 100, backgroundColor:"grey"}}>НАжми меня</button>
        </header>
    )
}
export default Header;
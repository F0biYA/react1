import React from "react";

    const Square =(props)=> {

    return (
             <div style={props.status===true 
                ? {width: 100, height: 100, backgroundColor: `${props.color}`, color:"white"}
            : {width: 100, height: 100, backgroundColor: "grey", color:"white"}}>{props.name}</div>
            // <div style={{width: 100, height: 100, backgroundColor: "red"}}>{title}</div>
    )
}
export default Square;
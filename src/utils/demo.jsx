import React, { useEffect, useState } from "react";
import { arr } from "../utils/array";
import ArrContainers from "./ArrContainer";
import Div from "./Div";
import Header from "./Header";
function Mai () {
    const [counter, setCounter] = useState(0)
    const [status, setStatus] =useState(false);
    const handleClick=()=> setStatus(!status);

    useEffect(()=>{
        console.log('click')
    setCounter(counter + 1)}
    ,[status])

return (
    <>
    <Header onClick={handleClick}/>
    <ArrContainers array={arr} status={status}/>
    <h1>{counter}</h1>

    </>
)
}
function Di(props) {
    console.log(props)
    return (
        <div style={props.status===true ? { backgroundColor:`grey`, width:100, height: 100}:{ backgroundColor:`${props.color}`, width:100, height: 100} }>{props.name}</div>
    )
}


const ArrContaine = (props) => {
    return (
        <section style={{ height: 700, width: 700, backgroundColor: "pink", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            {props.array.map((item, index) => (<Div name={item.name} color={item.color} status={props.status} />))}
        </section>
    )
}



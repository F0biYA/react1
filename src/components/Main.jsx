import React, {useState, useEffect} from "react";
import { arr } from "../utils/array";
import Header from "./Header";
import Square from "./Square";
function Main() {
const [status, setStatus] = useState(false);
const [counter, setCounter] = useState(0);

useEffect(()=> {

    setCounter(counter + 1);

}, [status])

const handleClick =()=> setStatus(!status);

    return (
        <section>
        <Header onClick={handleClick}/>
        <h1>{counter}</h1>
            {arr.map((item, index)=> (<Square name={item.name} color={item.color} status={status}/>))}
        </section>
    )
}
export default Main;
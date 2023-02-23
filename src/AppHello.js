import React, { useState } from "react";
import "./App.css";

function Hello({inintmsg = "Hi Hello"}) {

    const [msg, setMsg] = useState(inintmsg)

    const onClick = () => {
        if (msg === "Hi Hello") {
            setMsg("Hi Jack")
        } else {
            setMsg("Hi Hello")
        }
    }

    return (
        <>
            <h1>{msg}</h1>
            <button onClick={()=>onClick()}>click !</button>
        </>
    );

}
export default Hello;
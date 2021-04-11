import React from "react";
import {Redirect} from "react-router-dom"

function Color({hex, color}) {
    if(hex){
        return (
            <div classname={color} style={{backgroundColor: hex}}>
                <h1>{`The Color you have all been waiting for: ${color}`}</h1>
            </div>
         )
    } else{
        return <Redirect to="/colors" />;
    }
    
}

export default Color;


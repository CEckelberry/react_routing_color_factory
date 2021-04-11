import React from "react";
import { Link } from "react-router-dom";

function ColorList({colors}){
    const colorLinks = Object.keys(colors).map(colorName => (
        <li key={colorName}>
            <Link to={`/colors/${colorName}`}>{colorName}</Link>
        </li>
    ));

    return (
        <div>
            <h1><Link to="/colors/new">Add Color</Link></h1>
            <ul>
                {colorLinks}
            </ul>
        </div>
    )
}

export default ColorList;
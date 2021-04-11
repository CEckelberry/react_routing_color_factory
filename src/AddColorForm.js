import React, {useState} from "react";
import {Redirect, useHistory} from "react-router-dom"

function AddColorForm({addColor}){
    const [form, updateForm] = useState({name: "", hex: ""})
    const history = useHistory();

    function handleChange(e){
        e.persist();
        updateForm(f => ({...f, [e.target.name]: e.target.value}))
    }

    function handleSubmit(e){
        e.preventDefault();
        addColor({[form.name]: form.hex})
        history.push("/colors");
    }

    const {hex, name} = form;

    return(
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Color name</label>
                <input 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="enter color name" 
                    name="name" 
                    value={name}>
                </input>
                <label htmlFor="hex">Color Hex #</label>
                <input 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="enter color hex code" 
                    name="hex" 
                    value={hex}>
                </input>
                <button>Add Color</button>
            </form>
        )

}

export default AddColorForm;
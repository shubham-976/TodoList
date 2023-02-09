import React from 'react'
import { useState } from 'react'

export default function add_todo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (event)=>{
        event.preventDefault(); //for avoid reloading of page on clicking submit button
        if(title=="" || desc==""){
            alert("Pleas fill both details 'Title and description' of todo.")
        }else{
            props.onAdding(title, desc);
            setTitle("") //after adding todo 
            setDesc("")
        }
    }
    const handle_onChange1 = (event)=>{
        setTitle(event.target.value);
    }
    const handle_onChange2 = (event)=>{
        setDesc(event.target.value);
    }
    let styling = {
        backgroundColor: "#dde7f1",
        borderRadius: "10px",
        padding: "6px 5px",
        border: "0.01px dashed pink"
    }
    return (
        <form onSubmit={submit} className='container my-3' style={styling}>
            <h4 className='text-center'>Add a New To-do</h4>
            <div className="mb-3">
                <label htmlFor="todo_title" className="form-label">Title : </label>
                <input type="text" value = {title} onChange={handle_onChange1} className="form-control" id="todo_title"/>
            </div>
            <div className="mb-3">
                <label htmlFor="todo_desc" className="form-label">Description : </label>
                <input type="text" value={desc} onChange={handle_onChange2} className="form-control" id="todo_desc"/>
            </div>
            <button type="submit" className="btn btn-success">Add</button>
        </form>
    )
}

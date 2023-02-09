import React from 'react'
import Todo_Item from './todo_item'
export default function todos(props) {
    let styling = {
        
        backgroundColor: "#f5f5f7",
        padding: "5px",
        borderRadius: "10px",
        minHeight: "40vh",
        border: "0.01px dashed grey"
    }
  return (
    <div className="container my-3 " style={styling}>
        <h3 className="text-center my-3">To-do List</h3>
        {props.todo_obj_arr.length==0 ? <><hr/>No todo for display.</> : 
        props.todo_obj_arr.map((todo_obj)=>{
            return <Todo_Item todo_obj={todo_obj} key={todo_obj.s_no} onDelete={props.onDelete}/>
        })}
    </div>
  )
}

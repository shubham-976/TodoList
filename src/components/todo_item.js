import React from 'react'

export default function todo_item(props) {
    // let styling = {
    //     backgroundColor: "#fbfbfd"
    // }
  return (
    <div className="container">
      <hr/>
        <h4>{props.todo_obj.title}</h4>
        <p>{props.todo_obj.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={()=>props.onDelete(props.todo_obj)}>Delete</button>
    </div>
  )
}

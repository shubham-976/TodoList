import React from 'react'

export default function about() {
    var styling = {
        border: "1px solid black",
        minHeight: "77vh"
    }
  return (
    <div className='container my-4 mx-2 text-center' style={styling}>
        <h3>www.ShubhamTodoList.com</h3>
        <hr/>
        <p>Developed by me, just for the purpose of learning reactJs.</p>
        <p> Add and reomve todo items in this app, and it will be stored in your local storage.</p>
    </div>
  )
}

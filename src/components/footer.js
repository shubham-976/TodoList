import React from 'react'

export default function footer() {
    let styling = {
        padding : "15px",
        position: "absolute",
        down : "1vh",
        width : "100%"
    }
  return (
    <footer className='bg-dark text-light text-center' style={styling}>
        <p>Copyright &copy; 2023 | All Rights Reserved | www.ShubhamToDoList.com</p>
    </footer>
  )
}

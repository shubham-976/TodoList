import logo from './logo.svg';
import './App.css';
import Header from './components/navHeader'
import Todos from './components/todos'
import Footer from './components/footer'
import Add_todo from './components/add_todo'
// import About from'./components/about'
// alias_name after import MUST start from capital letter otherwise its not working IDK why?
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  //when app starts or reloads, taking care of  initally stord todos from local storage
  let init_todos;
  if (localStorage.getItem("todos") == null)
    init_todos = [];
  else
    init_todos = JSON.parse(localStorage.getItem("todos"));

  const [todo_obj_arr, set_todo_obj_arr] = useState(init_todos); //initially empty array

  function onAdding(title, desc) {
    console.log("Added a todo");
    var s_n =  (todo_obj_arr.length==0 ? 1 : todo_obj_arr[todo_obj_arr.length-1].s_no+1);
    const new_todo = {
      s_no: s_n,
      title: title,
      desc: desc
    }
    set_todo_obj_arr([...todo_obj_arr, new_todo]) //array concatenation , new_todo added to existing array
    console.log(new_todo)
  }

  function onDelete(todo_obj) {
    console.log("onDelete function called.")

    set_todo_obj_arr(todo_obj_arr.filter((obj) => {
      return obj != todo_obj
    }))
  }
  //whenever todo_obj_arr 'changed' and 'UPDATED using 2nd variable set___ of usestate',  means (item added or deleted), update local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo_obj_arr) )
  }, [todo_obj_arr])
  

  return (
    // These are complete things, complete app.
    // <Router>
    // <>
    //   <Header title="TodoList" searchBar={true} /> 
    //   <Routes>
    //     <Route exact path="/" element={[<Add_todo onAdding={onAdding} />,<Todos todo_obj_arr={todo_obj_arr} onDelete={onDelete} />]}></Route>
    //     <Route exact path="/about" element={<About/>}></Route>
    //   </Routes>
    //   <Footer />
    // </>
    // </Router>

    //Just to host it on github pages, router and links will not work, so remove routes and links and about page becoz thats also linked.
    <>
      <Header title="TodoList" searchBar={true} /> 
      <Add_todo onAdding={onAdding} />
      <Todos todo_obj_arr={todo_obj_arr} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;

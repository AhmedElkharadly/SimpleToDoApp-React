import { useState } from "react";
import "./hero.css";
import ToDoList from "./toDoList";
// import { Scrollbars } from "react-custom-scrollbars";

function Myhero() {
  const [todo, setToDo] = useState({ value: "", tasks: [] });

  const handleChange = (e) => {
    setToDo({
      ...todo,
      value: e.target.value,
    });
  };

  const pushList = (e) => {
    e.preventDefault();
    const allList = [...todo.tasks];
    allList.push(todo.value);
    setToDo({
      ...todo,
      tasks: allList,
    });
    console.log(todo.tasks, allList);
  };

  const handleDelete = (index) => {
    const allList = [...todo.tasks];
    allList.splice(index, 1);
    setToDo({
      ...todo,
      tasks: allList,
    });
  }

  return (
    <div className="hero">
      <form onSubmit={pushList} className="cont">
        <h1>To-Do App!</h1>
        <label htmlFor="toDoInput">Add New To-Do</label>
        <input
          type="text"
          value={todo.value}
          id="toDoInput"
          name="toDoInput"
          className="toDoInput"
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>

      <h2 style={{ textAlign: "center" }}>Lets Get Some Tasks Done!</h2>
      
      {/* <Scrollbars > */}
        <div style={{ paddingLeft: "5px", overflowY: "scroll", height: "355px" }}>
          {todo.tasks.map((task, index) => {
            return (
              <ToDoList key={index} taskContent={task} delete={handleDelete} />
            );
          })}
        </div>
      {/* </Scrollbars > */}
    </div>
  );
}

export default Myhero;

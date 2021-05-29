// import { useState } from "react";
import "./App.css";
import Table from "./Table";

function App() {
  // let localTodos = JSON.parse(localStorage.getItem("allTodos"));
  // const [todo, setTodo] = useState([]);
  // const [allTodos, setAllTodos] = useState(localTodos || []);
  // const [counter, setCounter] = useState(0);

  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   localStorage.setItem("allTodos", JSON.stringify(allTodos));
  //   setCounter(counter + 1);
  //   setAllTodos([...allTodos, { id: counter, todo }]);

  //   setTodo("");
  // };

  // const deleteHandler = (id) => {
  //   setAllTodos(allTodos.filter((todo) => todo.id !== id));
  // };

  // const showTodos = allTodos.map((item) => {
  //   return (
  //     <li onClick={() => deleteHandler(item.id)} key={item.id}>
  //       {item.todo}
  //     </li>
  //   );
  // });

  return (
    <div className="App">
      {/* <form onSubmit={onSubmitHandler}>
        <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
        <button>Add Todo</button>
      </form>
      <div style={{ width: "300px", margin: "0 auto" }}>
        <h3>All Todos</h3>
        <ol>{showTodos}</ol>
      </div> */}
      <Table />
    </div>
  );
}

export default App;

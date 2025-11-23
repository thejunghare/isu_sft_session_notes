import { useState, useEffect } from "react";
import "../Todo.css";

const initialTodo = {
  title: "",
  dueDate: "",
  status: false,
};

function Todo() {
  const [todo, setTodo] = useState(() => {
    return initialTodo;
  });

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [editing, setEditing] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(e) {
    e.preventDefault();
    // let normalTodoTitle = document.getElementById("todo-title").value;
    // console.log(normalTodoTitle);
    if (todo.title.length < 3) {
      alert("hey boss todo title can;t less than 3 characters");
      return;
    } else {
      if (editing != null) {
        // update state
        const updateTodos = [...todos];
        updateTodos[editing] = todo;
        setTodos(updateTodos);
        setEditing(null);
      } else {
        setTodos([...todos, todo]);
      }
      // console.log(
      //   `You entered ${todo.title} & its status ${todo.status} and you due date is ${todo.dueDate}`,
      // );

      setTodo(initialTodo);
    }
  }

  function handleChecked(index) {
    const updatedTodo = [...todos];
    updatedTodo[index].status = !updatedTodo[index].status;
    setTodos(updatedTodo);
  }
  function handleUpdateButton(index) {
    // console.log("clicked update");
    setEditing(index);
    setTodo(todos[index]);
    // console.log();
  }

  function handleDeleteButton(index) {
    // console.log("clicked delete");
    const updatedTodos = todos.filter((_, i) => i != index);
    setTodos(updatedTodos);
    console.log(updatedTodos);
  }

  const completedTodos = todos.filter((t) => t.status == true);

  // console.log(completedTodos);
  const inCompletedTodos = todos.filter((t) => t.status == false);
  return (
    <div>
      <p>My Todo's</p>
      <form onSubmit={handleAddTodo}>
        {/* need two inputs 1. input text and 2. date picker*/}
        <div>
          <label>
            Todo title
            <input
              required
              type="text"
              placeholder="Enter your todos here"
              id="todo-title"
              value={todo.title}
              onChange={(e) => {
                setTodo({ ...todo, title: e.target.value });
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Choose a due date
            <input
              required
              type="date"
              id="todo-due-date"
              value={todo.dueDate}
              onChange={(e) => {
                setTodo({ ...todo, dueDate: e.target.value });
              }}
            />
          </label>
        </div>
        <button type="submit">Add todo</button>
      </form>

      {/* list todo here*/}
      <p>Incompleted Todos</p>
      {inCompletedTodos.length > 0 ? (
        <ul>
          {inCompletedTodos.map((t, index) => (
            <li key={index}>
              {t.title} - {t.dueDate}
              <input
                type="checkbox"
                checked={t.status}
                onChange={() => handleChecked(todos.indexOf(t))}
              />
              <button
                className="update-button"
                onClick={() => handleUpdateButton(todos.indexOf(t))}
              >
                Update
              </button>
              <button
                onClick={() => handleDeleteButton(todos.indexOf(t))}
                className="delete-button"
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nothing here!</p>
      )}

      <p>Completed Todos</p>
      {completedTodos.length > 0 ? (
        <ul>
          {completedTodos.map((t, index) => (
            <li key={index}>
              {t.title} - {t.dueDate}
              <button
                className="delete-button"
                onClick={() => handleDeleteButton(todos.indexOf(t))}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nothing Here</p>
      )}
    </div>
  );
}

export default Todo;

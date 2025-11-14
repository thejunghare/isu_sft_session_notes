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
    let saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(e) {
    e.preventDefault();
    // let todo = document.getElementById("todo-input").value;

    // validations -> length of todo title, due date can't be empty
    if (todo.title.length === 3) {
      alert("hey boss todo can't be this short!");
      return;
    }

    if (editIndex !== null) {
      // update flow
      const updated = [...todos];
      updated[editIndex] = todo;
      setTodos(updated);
      setEditIndex(null);
    } else {
      // add flow
      setTodos([...todos, todo]);
    }

    // store the data
    console.log(todo);
    // setTodos([...todos, todo]);

    // empty input placeholder
    setTodo(initialTodo);
  }

  function handleToggleStatus(index) {
    const updatedTodos = [...todos];
    updatedTodos[index].status = !updatedTodos[index].status;
    setTodos(updatedTodos);
  }

  function handleDelete(index) {
    console.log("delete");
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  }

  function handleUpdate(index) {
    console.log("update");
    setEditIndex(index);
    const item = todos[index];
    setTodo(item);
  }

  const completedTodos = todos.filter((t) => t.status === true);
  const inCompletedTodos = todos.filter((t) => t.status === false);

  return (
    <div className="body">
      <form onSubmit={handleAddTodo}>
        <div>
          <label>
            Enter your todo
            <input
              required
              type="text"
              placeholder="Record video"
              id="todo-title"
              // id="todo-input"
              value={todo.title}
              onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            />
          </label>
        </div>
        <div>
          <label>
            Choose a due date
            <input
              required
              type="date"
              placeholder="Record video"
              id="todo-due-date"
              value={todo.dueDate}
              onChange={(e) => setTodo({ ...todo, dueDate: e.target.value })}
            />
          </label>
        </div>
        <button type="submit">Add Todo </button>
      </form>

      <h3>My Todo's</h3>
      {inCompletedTodos.length > 0 ? (
        <ul>
          {inCompletedTodos.map((t, index) => (
            <li key={index} className="todo-item">
              <span className="todo-text">
                {t.title} — due {t.dueDate}
              </span>

              <input
                className="todo-checkbox"
                type="checkbox"
                checked={t.status}
                onChange={() => handleToggleStatus(todos.indexOf(t))}
              />

              <button
                className="update-button"
                onClick={() => handleUpdate(todos.indexOf(t))}
              >
                Update
              </button>
              <button
                className="delete-button"
                onClick={() => handleDelete(todos.indexOf(t))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nothing here!</p>
      )}

      <h3>My Completed Todo's</h3>
      {completedTodos.length > 0 ? (
        <ul>
          {completedTodos.map((t, index) => (
            <li key={index} className="todo-item">
              {t.title}

              <button
                className="delete-button"
                onClick={() => handleDelete(todos.indexOf(t))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nothing here!</p>
      )}
    </div>
  );
}

export default Todo;

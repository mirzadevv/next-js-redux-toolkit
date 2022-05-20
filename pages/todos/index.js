import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../../styles/todos.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../store/slices/todosSlices";

export default function Todos() {
  const [inputValue, setInputValue] = useState("");
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.todosContainer}>
        <input
          className={styles.input}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          value={inputValue}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(addTodo({ id: uuidv4(), title: inputValue }))}
        >
          Add Todo
        </button>
        <div className={styles.todosList}>
          {todos.length === 0 && <h3>THERE ARE NO TODOS</h3>}
          {todos.map((todo) => (
            <div className={styles.todo} key={todo.id}>
              <p>{todo.title}</p>
              <button
                className={styles.deleteBtn}
                // onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

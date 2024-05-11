import { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoReducer } from "./TodoReducer";
import { TodoList } from "./TodoList";


const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
export function TodoApp() {
    const [todos, dispatch] = useReducer(TodoReducer, initialState,  init);
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
  
    const handleNewTodo = (todo) => {
      const action = {
        type: "[TODO] ADD TODO",
        payload: todo,
      };
      dispatch(action);
    };
  
    return (
      <>
        <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
        <hr />
  
        <div>
          <div>
            <TodoList todos={todos}></TodoList>
          </div>
          <div>
            <TodoAdd onNewTodo={handleNewTodo}></TodoAdd>
          </div>
        </div>
      </>
    );
  }
  
import { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoReducer } from "./TodoReducer";
import { TodoList } from "./TodoList";
import * as types from "./types"

const initialState = []

const init = () => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
}

// const init = () => {
//     return JSON.parse(localStorage.getItem(' todos ')) || []
// }

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(TodoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: types.CREATE_TODO,
            payload: todo
        }
        dispatch (action)
    }

    const handleDeleteTodo = (todoId) => {
        const action = {
            type: types.DELETE_TODO,
            payload: todoId
        }
        dispatch(action);
    };
 
    return (
        <>
        <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} onDeleteTodo={handleDeleteTodo}/>
            </div>
            <div className="col-5">
                <TodoAdd onNewTodo={handleNewTodo}/>
            </div>
        </div>
        </>
    )
}
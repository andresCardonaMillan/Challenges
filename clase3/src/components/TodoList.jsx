import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo}) => {
    return (
        <ul className="list-group">
            {
                todos.map( (todo, key) => {
                    return (
                        <TodoItem key={key} todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/>
                    )
                })
            }
        </ul>
    )
}
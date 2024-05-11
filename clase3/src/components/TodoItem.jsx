import React from 'react'

export function TodoItem({todo}) {

  return (
      <li>
          <span>{todo.description}</span>
          <button>Borrar</button>
      </li>
  )
}




// export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {

//     const handleDeleteClick = () => {
//         onDeleteTodo(todo.id);
//     };

//     const handleToggleClick = () => {
//         onToggleTodo(todo.id);
//     };
    
//     return (
//         <li className="list-group-item  d-flex justify-content-between">
//             <span onClick={handleToggleClick} 
//             className={`align-self-center
//             ${ todo.done ? 'text-decoration-line-through': ''}`
//             }>
//                 {todo.description}
//             </span>
//             <button className="btn btn-danger" onClick= {handleDeleteClick}
//             >Borrar</button>
//         </li>   
//     )
// }
import { useReducer } from 'react';

const initialState = '';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return action.payload;
        case 'RESET_INPUT':
            return '';
        default:
            return state;
    }
};

export const TodoAdd = ({ onNewTodo}) => {
    const [inputValue, dispatch] = useReducer(inputReducer, initialState);

    const onFormSubmit = (event) => {
        event.preventDefault();

        // Verificar si el valor del campo de entrada no está vacío
        if (inputValue.trim() !== '') {
            const newTodo = {
                id: new Date().getTime(),
                description: inputValue,
                done: false
            };

            // Llamar a la función onNewTodo con el nuevo TODO
            console.log('Adding new TODO:', newTodo);
            onNewTodo(newTodo);

            // Limpiar el valor del campo de entrada después de agregar el TODO
            dispatch({ type: 'RESET_INPUT' });
        }
    };

    const onInputChange = (event) => {
        // Actualizar el estado del campo de entrada cada vez que cambie el usuario
        dispatch({ type: 'CHANGE_INPUT', payload: event.target.value });
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="Tarea"
                className="form-control"
                value={inputValue}
                onChange={onInputChange}
            />
            <button type="submit" className="btn btn-outline-primary mt-1">Agregar</button>
        </form>
    );
};



// import { useReducer } from 'react';

// const initialState = '';

// const inputReducer = (state, action) => {
//     switch (action.type) {
//         case 'CHANGE_INPUT':
//             return action.payload;
//         case 'RESET_INPUT':
//             return '';
//         default:
//             return state;
//     }
// };

// export const TodoAdd = ({ onNewTodo }) => {
//     const [inputValue, dispatch] = useReducer(inputReducer, initialState);

//     const onFormSubmit = (event) => {
//         event.preventDefault();

//         // Verificar si el valor del campo de entrada no está vacío
//         if (inputValue.trim() !== '') {
//             const newTodo = {
//                 id: new Date().getTime(),
//                 description: inputValue,
//                 done: false
//             };

//             // Llamar a la función onNewTodo con el nuevo TODO
//             onNewTodo(newTodo);

//             // Limpiar el valor del campo de entrada después de agregar el TODO
//             dispatch({ type: 'RESET_INPUT' });
//         }
//     };

//     const onInputChange = (event) => {
//         // Actualizar el estado del campo de entrada cada vez que cambie el usuario
//         dispatch({ type: 'CHANGE_INPUT', payload: event.target.value });
//     };

//     return (
//         <form onSubmit={onFormSubmit}>
//             <input
//                 type="text"
//                 placeholder="Tarea"
//                 className="form-control"
//                 value={inputValue}
//                 onChange={onInputChange}
//             />
//             <button type="submit" className="btn btn-outline-primary mt-1">Agregar</button>
//         </form>
//     );
// };

// export const TodoAdd = ({onNewTodo}) => {
//     const onFormSubmit = (event) => {
//         event.preventDefault()

//         const newTodo = {
//             id: new Date().getTime(),
//             description: 'Hacer el rpoyecto',
//             dane: false
//         }

//         onNewTodo(newTodo)
//     }
//     return(
//         <form onSubmit={(event) => onFormSubmit(event)}>
//             <input type="text" placeholder="Tarea" className="form-control"/>
//             <button type="submit" className="btn btn-outline-primary mt-1">Agregar</button>
//         </form>
//     )
// }
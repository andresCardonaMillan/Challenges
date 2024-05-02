export const TodoReducer = (state = [], action) => {
    switch (action.type) {
        case '[TODO] ADD_TODO':
            return [...state, action.payload];
        case '[TODO] DELETE_TODO':
            console.log('Current state:', state);
            const newState = state.filter(todo => todo.id !== action.payload);
            console.log('New state:', newState);
            return newState;
        default:
            return state;
    }
};

// export const TodoReducer = (state = [], action) => {
//     switch (action.type) {
//         case '[TODO] ADD_TODO':
//             return [...state, action.payload];
//         case '[TODO] DELETE_TODO':
//             return state.filter(todo => todo.id !== action.payload);
//         default:
//             return state;
//     }
// };


// export const TodoReducer = (initialState = [], action) => {
//     switch (action.type){
//         case '[TODO] ADD TODO':
//             return [ ... initialState, action.payload]
//         default:
//             return initialState;
//     }
// }
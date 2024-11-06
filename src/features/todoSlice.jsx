// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const todoSlice = createSlice({
//   name: "todos",
//   initialState: [],
//   reducers: {
//     addTodo: (state, action) => {
//       const newTodo = {
//         id: nanoid(),
//         text: action.payload,
//         completed: false,
//       };
//       state.push(newTodo);
//     },
//     toggleComplete: (state, action) => {
//       const todo = state.find((todo) => todo.id === action.payload);
//       if (todo) {
//         todo.completed = !todo.completed;
//       }
//     },
//     deleteTodo: (state, action) => {
//       const index = state.findIndex((todo) => todo.id === action.payload);
//       if (index !== -1) {
//         state.splice(index, 1);
//       }
//     },
//     editTodo: (state, action) => {
//       const { id, newText } = action.payload;
//       const todo = state.find((todo) => todo.id === id);
//       if (todo) {
//         todo.text = newText;
//       }
//     },
//   },
// });

// export const { addTodo, toggleComplete, deleteTodo, editTodo } =
//   todoSlice.actions;
// export default todoSlice.reducer;

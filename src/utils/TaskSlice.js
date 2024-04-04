import { createSlice } from "@reduxjs/toolkit"
const TaskSlice = createSlice({
    name: "taskList",
    initialState: {
        items: [ "Complete homework assignments",
        "Call mom",
        "Buy groceries",
        "Schedule dentist appointment",
        "Go for a run",
        "Read a book"]
    },
    reducers : {
        addTask: (state, action) => {
            state.items.push(action.payload);
        },
        removeTask: (state, action) => {
            const indextoRemove = state.items.indexOf(action.payload);
            console.log(indextoRemove, state.items[indextoRemove]);
            state.items.splice(indextoRemove, 1);
        },
        clearList: (state, action) => {
            state.items.length = 0;
        }
    }
});

export const {addTask, removeTask, clearList} = TaskSlice.actions;

export default TaskSlice.reducer;
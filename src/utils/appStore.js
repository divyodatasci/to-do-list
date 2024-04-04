import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './TaskSlice';
const appStore = configureStore({
    reducer : {
        taskList: taskReducer
    }
});
export default appStore;
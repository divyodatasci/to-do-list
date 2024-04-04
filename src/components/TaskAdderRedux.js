import React, { useRef, useState } from 'react';
import { demoTaskList } from '../utils/democontent';
import { useDispatch } from 'react-redux';
import { addTask } from '../utils/TaskSlice';
import ListRedux from './ListRedux';

const TaskAdderRedux = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  // const taskObjList = demoTaskList.map((item, index) => {
  //   return {
  //     id: index,
  //     task: item
  //   };
  // })

  // const getUniqueId = (objectList) => {
  //   const newId = objectList.sort((a,b) => a.id - b.id)[objectList.length - 1].id + 1;
  //   return newId;
  // } 
   
  //const [taskList, setTaskList] = useState(taskObjList);
  const submitHandler = (e) => {
    e.preventDefault();
    // const newTask = {
    //   id: getUniqueId(taskList),
    //   task: inputRef.current.value
    // }
    //setTaskList([newTask, ...taskList])
    dispatch(addTask(inputRef.current.value));
    inputRef.current.value = '';

  }
  // const taskClearer = (taskId) => {
  //   setTaskList(taskList.filter(item => item.id !== taskId));
  // }
  return (
    <div className=' m-4'>
        <div className='m-4'> Add Tasks </div>
        <form onSubmit={submitHandler}>
            <input ref ={inputRef} type="text" className=' border-solid h-10 border-black rounded-sm border-2'/>
            <button className=" m-2 bg-gray-950 text-white p-2 rounded-lg" type='submit'> Add </button>
        </form>
        <ListRedux />
      {/* <ListRedux taskList = {taskList} clearTask = {taskClearer}/> */}
    </div>
  )
}

export default TaskAdderRedux
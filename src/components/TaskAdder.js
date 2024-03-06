import React, { useRef, useState } from 'react'
import List from './List';
import { demoTaskList } from '../utils/democontent';
const TaskAdder = () => {
  const inputRef = useRef(null);
  const [taskList, setTaskList] = useState(demoTaskList);
  const submitHandler = (e) => {
    e.preventDefault();
    //console.log(inputRef.current.value)
    setTaskList([inputRef.current.value, ...taskList])
    inputRef.current.value = '';

  }
  return (
    <div className=' m-4'>
        <div className='m-4'> Add Tasks </div>
        <form onSubmit={submitHandler}>
            <input ref ={inputRef} type="text" className=' border-solid h-10 border-black rounded-sm border-2'/>
            <button className=" m-2 bg-gray-950 text-white p-2 rounded-lg" type='submit'> Add </button>
        </form>

      <List taskList = {taskList} />
    </div>
  )
}

export default TaskAdder
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const List = ({taskList, clearTask}) => {
  // const [tasks,setTasks] = useState(taskList);
  // const handleClear = (id) => {
  //   setTasks(tasks.filter(item => item.id !== id));
  //   console.log(id)
  // }
  const handleClear = (id) => {
    clearTask(id);
  }

  return (
    <div className=' m-4'>
      <ul>
        {taskList.map((item) => {
              return <li key={item.id}>
                  <div>
                    <span className=' text-lg'>{item.task}</span> 
                    <span className='mx-4'> <FontAwesomeIcon icon={faTimes} className=' cursor-pointer' onClick={() => handleClear(item.id)}/> </span>
                  </div>
                 </li>;
          })}
      </ul>
    </div>
  )
}

export default List
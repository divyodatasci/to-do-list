import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeTask } from '../utils/TaskSlice';

const ListRedux = () => {

  const taskListItems = useSelector((store) => store.taskList.items);
  const dispatch = useDispatch();

  const handleClear = (item) => {
    dispatch(removeTask(item));
  }

  return (
    <div className=' m-4'>
      <ul>
        {taskListItems.map((item, index) => {
              return <li key={index}>
                  <div>
                    <span className=' text-lg'>{item}</span> 
                    <span className='mx-4'> <FontAwesomeIcon icon={faTimes} className=' cursor-pointer' onClick={() => handleClear(item)}/> </span>
                  </div>
                 </li>;
          })}
      </ul>
    </div>
  )
}

export default ListRedux
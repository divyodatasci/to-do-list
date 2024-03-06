import React from 'react'

const List = ({taskList}) => {

  return (
    <div className=' m-4'>
        {taskList.map((item, index) => {
            return <div key={index}> {item} </div>;
        })}


    </div>
  )
}

export default List
import  React, { useState }  from "react";
import Task from "./Task";

function TaskList({ tasks, setTaskList, filteredList = [], setFilteredList, message = "", setMessage, filtered}) {
  const list = filteredList.length > 0 ? filteredList : tasks;

  if( message != "" ) return (<p>{message}</p>); 
  return (
    <div className="tasks">
      {list.map((task, index) => (
        <Task key={index} text={task.text} category={task.category} setTaskList={setTaskList} taskList={tasks} filteredList={filteredList} setFilteredList={setFilteredList} setMessage={setMessage} filtered={filtered}/>
      ))}
    </div>
  );
}

export default TaskList;

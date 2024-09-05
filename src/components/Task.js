import { React }  from "react";
function Task({ text, category, setTaskList, taskList, filteredList, setFilteredList, setMessage, filtered }) {

  const handleDeleteTask = (event) => {
     const updatedTasks = taskList.filter((task) => task.text !== event.target.id);
     const updatedFilter = filteredList.filter((task) => task.text !== event.target.id);
    setTaskList(updatedTasks)
    setFilteredList(updatedFilter);
    if(updatedFilter.length == 0 && filtered) setMessage("No List Items for that Category");
    if(updatedTasks.length == 0 && !filtered) setMessage("No List Items for that Category");
  }
  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button className="delete" id={text} onClick={handleDeleteTask}>X</button>
    </div>
  );
}
export default Task
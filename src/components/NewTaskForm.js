import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit, setTaskList = (data)=>console.log(data) , taskList = [] }) {
  const [category, setCategory] = useState("Code")
  
  const [ detail, setDetail ] = useState("")
  const handleSubmit = (event) => {
    
    event.preventDefault();
    const newTask = {
      text: detail,
      category: category,
    };
    onTaskFormSubmit(newTask);
    setTaskList([...taskList, newTask])
     // Reset the form inputs
     setDetail("");
     setCategory("Code");
  };
  return (
    <form className="new-task-form" onSubmit={handleSubmit}  >
      <label>
        Details
        <input value={detail} type="text" name="text" onChange={(event) => setDetail(event.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={ (event) => setCategory(event.target.value)}>
          {categories.filter((category) => category !== "All").map((category) => (<option key={category} >{category}</option>) )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [taskList, setTaskList] = useState(TASKS);
  const [filteredList, setFilteredList] = useState([]);
  const [message, setMessage] = useState("");
  const [filtered, setFiltered] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      text: event.target.text.value,
      category: event.target.category.value,
    };
    setTaskList([...taskList, newTask])
  };
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        setTaskList={setTaskList}
        taskList={taskList}
        setFilteredList={setFilteredList}
        setMessage={setMessage}
        setFiltered={setFiltered}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={(info) => {console.log(info)}} setTaskList={setTaskList} taskList={taskList} />
      <TaskList
        tasks={taskList}
        filteredList={filteredList}
        setTaskList={setTaskList}
        setFilteredList={setFilteredList}
        message={message}
        setMessage={setMessage}
        filtered={filtered}
      />
    </div>
  );
}

export default App;

import React, { useState } from "react";

function CategoryFilter({categories, setTaskList, taskList, setFilteredList, setMessage, setFiltered}) {
  const [selectedCategory, setSelectedCategory] = useState("All"); 
  const handleClick = (event) => {
    setSelectedCategory(event.target.id);    
    if (event.target.id=="All") {
      setFiltered(false);
      setTaskList(taskList);
      setFilteredList([]);
      setMessage("");
      if(taskList.length == 0)setMessage("No List Items for that Category");
    } else {
      setFiltered(true);
      const filtered = taskList.filter((task) => task.category === event.target.id);
      setFilteredList(filtered); 
      if(filtered.length == 0) {
        setMessage("No List Items for that Category");
      }else {
        setMessage("");
      }
        
    }
  } 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (<button key={category} className={selectedCategory === category ? "selected" : ""} id={category} onClick={handleClick}>{category}</button>))}
    </div>
  );
}

export default CategoryFilter;

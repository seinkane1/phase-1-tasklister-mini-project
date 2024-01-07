document.addEventListener("DOMContentLoaded", () => {
  const createTaskForm = document.getElementById("create-task-form");

  createTaskForm.addEventListener("submit", (event) => {
    
    event.preventDefault();
   const taskDescription = document.getElementById("new-task-description").value;
   const newTask = document.createElement("li");
    newTask.textContent = taskDescription;
  
    
    const taskList = document.getElementById("task-list");
    taskList.appendChild(newTask);
  
    
    document.getElementById("new-task-description").value = "";
  });
});




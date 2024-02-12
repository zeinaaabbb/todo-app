import React, {useState} from 'react';

function ToDO(){

  const [tasks, setTasks] = useState(["Do coding", "Book flights", "Turn on Washing"]);
  const [newTask, setNewTask] = useState("");

  const handleUpdateTask = (e) => {
    setNewTask(e.target.value);
  }

  const handleAddTask = () => {
    //using state updater function
    //updating the state variable tasks by spreading its current values (...t) and adding a new task (newTask) at the end
    setTasks(t => [...t, newTask]);
    setNewTask("");
  }

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i!==index));
  }

  const handleMoveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
      setTasks(updatedTasks);
    }
  }

  const handleMoveTaskDown = (index) => {
    const updatedTasks = [...tasks];
    if (index < tasks.length - 1) {
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
      setTasks(updatedTasks);
    }

    setTasks(updatedTasks);
  }

  return(<>
    <div className="todo-container">
      <h1>To Do List</h1>

      <div className="todo-input">
        <input type="text" placeholder="Enter Your Task..." value={newTask} onChange={handleUpdateTask}/>
        <button className="todo-add-btn" onClick={handleAddTask}>Add</button>
      </div>

      <ol>
        {tasks.map((task, index) =>
          <li className="task" key={index}>
            {task}
            <button className="todo-delete-btn" onClick={() => handleDeleteTask(index)}>Delete</button>
            <button className="todo-up-btn" onClick={() => handleMoveTaskUp(index)}>🔼</button>
            <button className="todo-down-btn" onClick={() => handleMoveTaskDown(index)}>🔽</button>
          </li>
        )}
      </ol>
    </div>
  </>)
}

export default ToDO

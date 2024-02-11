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

  }

  const handleMoveTaskUp = (index) => {

  }

  const handleMoveTaskDown = (index) => {

  }

  return(<>
    <div>
      <h1>To Do List</h1>

      <div>
        <input type="text" placeholder="Enter Your Task..." value={newTask} onChange={handleUpdateTask}/>
        <button onClick={handleAddTask}>Add</button>
      </div>

      <ol>
        {tasks.map((task, index) =>
          <li key={index}>
            {task}
          </li>
        )}
      </ol>

      <button>Delete</button>
      <button>🔼</button>
      <button>🔽</button>

    </div>
  </>)
}

export default ToDO

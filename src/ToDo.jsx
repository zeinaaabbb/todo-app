import React, {useState} from 'react';

function ToDO(){

  const [tasks, setTasks] = useState(["Do coding", "Book flights", "Turn on Washing"]);
  const [newTask, setNewTask] = useState("");

  const handleUpdateTask = (e) => {
    setNewTask(e.target.value);
  }

  const handleAddTask = () => {
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
        <input type="text" placeholder="Enter Your Task..."/>
        <button onClick={handleAddTask}>Add</button>
      </div>

      <ol>
        <li onChange={handleUpdateTask}>{newTask}</li>
      </ol>

    </div>
  </>)
}

export default ToDO

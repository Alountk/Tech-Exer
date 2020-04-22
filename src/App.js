import React, { useState , useEffect } from 'react';
import Todo from './components/Todo';
import Tasks from './components/Tasks';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [tasks, setTasks] = useState([]);
  const [change,setChange] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/todos')
    .then((res) => setTasks(res.data))
  }, [change])


  const createTarea = tarea => {
    setTasks([ ...tasks, tarea ]);
    const { title , body } = tarea;
    axios.post('http://localhost:4000/api/v1/todos/',{title,body})
    setChange(!change)
  }

  const deleteTask = id => {
    axios.delete(`http://localhost:4000/api/v1/todos/${id}`)
    setChange(!change)
  }
  const updateTask = id => {
    console.log('llego al update',id);
  }


  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <Todo createTarea={createTarea}/>  
          </div>
          <div className="col-6">
              {tasks.map( task => { return (
                <Tasks key={task._id} task={task} deleteTask={deleteTask} updateTask={updateTask}/>  )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


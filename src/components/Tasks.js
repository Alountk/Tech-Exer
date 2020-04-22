import React from 'react'

function Tasks({task,deleteTask,updateTask}) {
    return (
        <div className="card">
            <div className="card-title bg-dark text-light text-center">
                <h3>{task.title}</h3>   
            </div>
            <div className="card-body">
                <p>{task.body}</p>
            </div>
            <button
            className="btn btn-danger"
            onClick={()=> deleteTask(task._id)}
            >
            Borrar Tarea
            </button>
            <button
            className="btn btn-info"
            onClick={()=> updateTask(task._id)}
            >
            Actualizar Tarea
            </button>
            
        </div>
    )
}


export default Tasks


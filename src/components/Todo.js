
import React, { useState } from 'react';

const Todo = ({createTarea}) => {

    const [task, setTask] = useState({
        title: '',
        body: ''
    });
    const [ error, setError ] = useState(false);

    const actualizarState = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value 
        })
    }

    const { title, body } = task;

    const submitTarea = e => {
        e.preventDefault();

        if(title.trim() === '' || body.trim() === '' ){
            setError(true);
            return;
        }

        setError(false);

        
        createTarea(task);

        // Reiniciar el form
        setTask({
            title: '',
            body: ''
        })
    }

    return ( 
        <>
        <div className="container">
            <div className="text-center">

                <h2>Crear Tarea</h2>
            </div>
            <div>
            { error ? <p className="bg-danger">Todos los campos son obligatorios</p> : null }

            <form onSubmit={submitTarea} >
                <div className="form-group">
                    <label>Tareas</label>
                    <input 
                        type="text"
                        name="title"
                        placeholder="Nombre tarea"
                        onChange={actualizarState}
                        value={title}
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label>Body</label>
                    <textarea
                        name="body"
                        className="form-control"
                        onChange={actualizarState}
                        value={body}
                    ></textarea>

                </div>
                <button
                    type="submit"
                    className="btn btn-dark"
                >Agregar Tarea</button>
            </form>

            </div>
        </div>
        </>
    );
}

 
export default Todo;
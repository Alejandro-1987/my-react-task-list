import React, { useState } from 'react';
import Tarea from './Tarea';
import useTaskManager from './useTaskManager'; // Asegúrate de tener la ruta correcta

const ListaTareas = () => {
  const [nota, setNota] = useState('');
  const { tasks, createTask, deleteTask, updateTask } = useTaskManager();

  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskText, setEditTaskText] = useState('');

  function addTarea() {
    createTask(nota);
    setNota('');
  }

  function borrarElemento(id) {
    deleteTask(id);
  }

  function editarElemento(id) {
    const taskToEdit = tasks.find((task) => task.id === id);
    setEditTaskId(id);
    setEditTaskText(taskToEdit.task);
  }

  function actualizarTarea() {
    updateTask(editTaskId, editTaskText);
    setEditTaskId(null); 
    setEditTaskText(''); 
  }

  return (
    <div className='Card'>
      <input
        type="text"
        value={nota}
        onChange={(e) => setNota(e.target.value)}
        placeholder='Escribe aquí'
      />
      <button onClick={addTarea}>Añadir</button>
      <div className='dato'>
        <ul>
          {tasks.map((task, i) => (
            <div key={i}>
              {editTaskId === task.id ? (
                <div>
                  <input
                    type="text"
                    value={editTaskText}
                    onChange={(e) => setEditTaskText(e.target.value)}
                  />
                  <button onClick={actualizarTarea}>Actualizar</button>
                </div>
              ) : (
                <>
                  <Tarea nota={task.task} />
                  <button onClick={() => borrarElemento(task.id)}>Borrar</button>
                  <button onClick={() => editarElemento(task.id)}>Editar</button>
                </>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListaTareas;

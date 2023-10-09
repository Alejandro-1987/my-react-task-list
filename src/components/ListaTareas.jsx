import React, { useState, useEffect } from 'react';
import Tarea from './Tarea'; 

const ListaTareas = () => {
  const [listaTareas, setListaTareas] = useState([]);
  const [nota, setNota] = useState('');

  
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(listaTareas));
  }, [listaTareas]);

  function addTarea() {
    const nuevaListaTareas = [...listaTareas];
    nuevaListaTareas.push({ id: Date.now(), tarea: nota });
    setListaTareas(nuevaListaTareas);
    setNota('');
  }

  function borrarElemento(id) {
    const nuevaListaTareas = listaTareas.filter((e) => e.id !== id);
    setListaTareas(nuevaListaTareas);
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
          {listaTareas.map((e, i) => (
            <div key={i}>
              <Tarea nota={e.tarea} /> {}
              <button onClick={() => borrarElemento(e.id)}>Borrar</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListaTareas;

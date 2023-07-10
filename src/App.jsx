
import './App.css';

import Header from './components/Header';
import Tarea from './components/Tarea';

import ListaTareas from './components/ListaTareas';
import { useState } from 'react';



function App() {
  const [ListaTareas, setListaTareas]= useState([])
  const [Nota, setNota] = useState('');
  
  const addTarea =(e) =>{
    e.preventDefault()
    setListaTareas([...ListaTareas, Nota])
    setNota("")
  }
  

  return (
     
      
  
    <div className='App'>
      <Header/>
      <div className='Card'>
      <input type="text"value ={Nota} onChange={(e) => setNota(e.target.value)}placeholder='Escribe aqui' />

      <button onClick={addTarea} >añadir</button>
      </div>
     
      <ul className='Caja'>
        {
          ListaTareas.map((e,i)=>(
            <li key ={i}>{e}

                        <button onClick={() => deleteTarea(i)}>Borrar</button>

                        <button onClick={() => editarTarea(i)}>Editar</button>
            

            </li>
          ))
        }
      </ul>
      
    </div>
   
  );
}

export default App

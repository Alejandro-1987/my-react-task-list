//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

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
      <input type="text"value ={Nota} onChange={(e) => setNota(e.target.value)} />
      <button onClick={addTarea}>añadir</button>
      <h3>Lista de Tareas</h3>
       
      <ul>
        {
          ListaTareas.map((e,i)=>(
            <li key ={i}>{e}</li>
          ))
        }
      </ul>
      
    </div>
  );
}

export default App

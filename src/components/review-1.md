
Buenas noches 

Mi nombre es Alejandro Martinez, soy desarrollo junior front-end

les presento una App de lista de Tareas
 es una herramienta que ayuda al usuario a organizar tareas o proyectos de manera efectiva

 como funciona y que nos permite hacer?
  le mostrare el funcionamiento basico del App que esta en proceso de desarrollo, 
  como poder observar menu principal tenemos un inciso para ecribir nuestra tareas y un boton para ir añadiendolas

  ya teniendo nuestra tareas el usuario puedo editarla o borrarla de acuerdo sea el caso.

  cuya app esta en proceso de desarrollo para ir añadiendo mas funcionalidad

  gracias por su atencion 

 const addTarea =(e) =>{
    e.preventDefault()
    setListaTareas([...ListaTareas, Nota])
    setNota("")
  }
  

 codigo viejo 

 function App() {
  const [ListaTareas, setListaTareas]= useState([])
  const [Nota, setNota] = useState('');
  
 
  function addTarea() {
    const nuevaListaTareas = [...ListaTareas];
    nuevaListaTareas.push({id: Date.now(), tarea: Nota});
    setListaTareas(nuevaListaTareas);
    setNota('');
  }
  
  function borrarElemento(id) {
    const nuevaListaTareas = ListaTareas.filter((e) => e.id !== id);
    setListaTareas(nuevaListaTareas);
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

                       <button onClick={() => editarTarea(e.id)}>Editar</button>

                      <button onClick={() => borrarElemento(e.id)}>Borrar</button>

            </li>
          ))
        }
      </ul>
      
    </div>
   
  );
}

export default App






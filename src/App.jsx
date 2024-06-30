import './App.css';
import { useState } from 'react'
function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        {/* e.target.value: for getting typing value */}
        <i onClick={() => setToDos([...toDos, {id:Date.now(), text:toDo, status:false}])} className="fas fa-plus"></i>
        {/* Add button */}
      </div>
      <div className="todos">

        {toDos.map((object) => {
          return (
            <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  // console.log(object); //object may object, contain text and status 
                  // Change todo status
                  setToDo(toDos.filter(eachObjects=>{
                    // For filter, return the needed objects
                    if(eachObjects.id===object.id){
                      eachObjects.status=e.target.checked;
                      // console.log(eachObjects.status); //may be boolean
                    }
                    return eachObjects
                  }))
                // For accessing text from Todos 
                }} value={object.status} type="checkbox" name="" id="" />
                {/* Display Todo */}
                <p>{object.text}</p>
                
              </div>
              <div className="right">
              {/* Remove button */}
              <i onClick={() => setToDos(toDos.filter(eachObjects => eachObjects.id !== object.id))} className="fas fa-times"></i>
              </div>
            </div>
          )
        })}
        {/* {toDos.map((object)=>{
          if(object.status){
            return (<h1>{object.text}</h1>)
          }
          return null
        })} */}
        
      </div>
    </div>
  );
}

export default App;

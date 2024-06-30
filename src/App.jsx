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
        <i onClick={() => setToDos([...toDos, toDo])} className="fas fa-plus"></i>
        {/* Add button */}
      </div>
      <div className="todos">

        {toDos.map((value) => {
          return (
            <div className="todo">
              <div className="left">
                <input type="checkbox" name="" id="" />
                <p>{value}</p>
                {/* Display Todo */}
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
                {/* Remove button */}
              </div>
            </div>
          )
        })
        }
      </div>
    </div>
  );
}

export default App;
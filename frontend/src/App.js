import { useEffect, useState } from "react";
import ToDo from "./components/ToDo"
import {ReactToPrint} from 'react-to-print'
import { addToDo, getAllToDo, updateToDo, deleteToDo, doneToDo } from "./utils/HandleApi";
import ReactPaginate from "react-paginate"
function App() {

  const [toDo,setToDo]=useState([])
  const [text, setText]=useState("")
  const [isUpdating, setisUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")
  const [isdone, setisdone] = useState(false)

  useEffect(()=>{
    getAllToDo(setToDo)
     },[])

  const updateMode = (_id, text, isdone)=>{
    setisUpdating (true)
    setText(text)
    setToDoId(_id)
  }

  const doneMode = (_id, text)=>{
    setisdone (true)
    
  }
//display screen
  return (
    <div className="App">
    <div className='container'> 
    <h1> Pilot Deployment Project</h1>
        
    <div className="top">
      <input 
      type="text" 
      placeholder="Add the list..."
      value={text}
      onChange= {(e)=>setText(e.target.value)}
        />

      <div className="add" 
      onClick={isUpdating ? 
      ()=> updateToDo(toDoId, text, setToDo, setText, setisUpdating, isdone)
      :()  =>addToDo(text, setText, setToDo, isdone)}> {isUpdating ? "update" : "Add" }</div>


</div>
    <div className="list">
    {toDo.map((item) => <ToDo 
          key={item._id} 
          text={item.text}
          isdone={item.isdone}
          updateMode = {() => updateMode(item._id, item.text)}
          // deleteToDo = {()=> deleteToDo(item._id, setToDo)}
          deleteToDo = {()=>  deleteToDo(item._id, setToDo) }
          doneToDo= {() => doneToDo(item._id, item.text,setToDo, setText,isdone)}
           />)}

    </div>
    </div>
    </div>
      
    // </div>
  );
}

export default App;

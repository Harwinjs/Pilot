import { useEffect, useState, useMemo} from "react";
import ToDo from "./components/ToDo"
import {ReactToPrint} from 'react-to-print'
import { addToDo, getAllToDo, updateToDo, deleteToDo, doneToDo, App1 } from "./utils/HandleApi";
import ReactPaginate from "react-paginate";
import Pagination from "./components/Pagination";

function App() {

  const [toDo,setToDo]=useState([])
  const [text, setText]=useState("")
  const [isUpdating, setisUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")
  const [isdone, setisdone] = useState(false)
//Pagination 
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
//Calculation to show the number of records per page, in Pagination
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  //Slicing
  const slicedData = toDo.slice(firstPostIndex, lastPostIndex);
  
  useEffect(()=>{
    getAllToDo(setToDo)
    console.log(typeof(setToDo))
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
    {slicedData.map((item) => <ToDo 
          key={item._id} 
          text={item.text}
          isdone={item.isdone}
          updateMode = {() => updateMode(item._id, item.text)}
          // deleteToDo = {()=> deleteToDo(item._id, setToDo)}
          deleteToDo = {()=>  deleteToDo(item._id, setToDo) }
          doneToDo= {() => doneToDo(item._id, item.text,setToDo, setText,isdone)}
          />)}
           <Pagination
                totalPosts={toDo.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
    </div>
    </div>
    </div>
      
    // </div>
  );
}

export default App;

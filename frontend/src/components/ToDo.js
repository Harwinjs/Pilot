import React, {useState} from "react";
import {BiEdit} from "react-icons/bi"
import {AiFillDelete, AiFillCheckSquare,AiFillPlusCircle} from "react-icons/ai"
// import App from "../App";
//asdasdasdasd
//asdas
const ToDo =({text, updateMode, deleteToDo, doneToDo, subToDo}) => {
    return(
        <div className="todo">
            <div className="text"> {text} </div>
            <div className="icons">
                <BiEdit className="icon" onClick={({})=>
                {
                    var answer = window.confirm("Are you sure to update?");
                            if (answer) {
                            updateMode()
                                }
                            else {
                                    alert("Not updated")
                                    }
                }} />
                {/* Delete confirmation */}
                <AiFillDelete className="icon" 
                onClick={({})=>
                {
                    var answer = window.confirm("Are you sure to delete?");
                            if (answer) {
                            deleteToDo()
                                }
                            else {
                                    alert("Not Deleted")
                                    }
                }
                } />
                <AiFillCheckSquare className="icon" onClick={doneToDo} />
                {/* <AiFillPlusCircle className="icon" onClick={subToDo} /> */}

                
            </div>
        </div>
    )
}

export default ToDo
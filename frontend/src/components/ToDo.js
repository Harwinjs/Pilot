import React, {useState} from "react";
import {BiEdit} from "react-icons/bi"
import {AiFillDelete, AiFillCheckSquare, AiFillPlusCircle} from "react-icons/ai"
// import App from "../App";

const ToDo =({text, updateMode, deleteToDo, doneToDo, subToDo, checkStat}) => {
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
                            
                }} />
                {/* Delete confirmation */}
                <AiFillDelete className="icon" 
                onClick={({})=>
                {
                    var answer = window.confirm("Are you sure to delete?");
                            if (answer) {
                            deleteToDo()
                                }
                            
                }
                } />
                <div className="icon">
                <div className="check">
                <input  id="checkStat" type="checkbox" value="true" onClick= {doneToDo} />
                </div>
                </div>
                {/* <AiFillPlusCircle className="icon" onClick={subToDo} /> */}

                
            </div>
        </div>
    )
}

export default ToDo
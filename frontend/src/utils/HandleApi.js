import axios from "axios"
import Pagination from "../components/Pagination";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { BsSquare, BsCheckSquare } from "react-icons/bs";
import styled, { css } from "styled-components";

const baseUrl ="http://localhost:5000"

const getAllToDo = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data})=>{
        console.log('data--->',data);
        setToDo(data)   
    })
}

//Adding data to the list
const addToDo = (text, setText, setToDo, isdone) => {
axios
.post(baseUrl+'/save', {text})
.then((data)=>{
    isdone=false
    console.log(data);
    setText("")
    
    getAllToDo(setToDo)
})
}
//sub task
// const subToDo = (toDoId, text, setText, setToDo) => {
//     axios
//     .post(baseUrl+'/subtask', {_id:toDoId,text})
//     .then((data)=>{
//         console.log(data);
//         setText("")
//         getAllToDo(setToDo)
//     })
//     }

//updating the already added list
const updateToDo = (toDoId, text, setToDo, setText, setisUpdating) => {
    
    axios
    .post(baseUrl+'/update', {_id:toDoId, text})
    .then((data)=>{
        console.log(data);
        setText("")
        setisUpdating(false)
        getAllToDo(setToDo)
        })
        .catch((err)=>console.log(err))
    }
//Marking the task as complete
//    const doneToDo = (toDoId, text, setToDo, setText, isdone) => {
//        axios
//        .post(baseUrl+'/done', {_id:toDoId, text:"done--- [ " + text + " ] ---done"})
//        .then((data)=>{   
//        console.log(data);
//        setText("")
//        getAllToDo(setToDo)
//        isdone = true
//        console.log(isdone);
//            })
//            .catch((err)=>console.log(err))
//        }
// 
        export const CheckBox = (props) => {
            const [checked, setChecked] = useState(false);
            const checkHandler = (e) => {
              setChecked(e.currentTarget.checked);
           };
          
            return (
              <>
                <label htmlFor="checkbox">
                  <Input
                    type="checkbox"
                    {...props}
                    onClick={checkHandler}
                    id="checkbox"
                    style={{ opacity: 0 }}
                  />
                  {!checked && <BsSquare fill={"grey"} size={24} />}
                  {checked && <BsCheckSquare fill={"green"} size={24} />}
                </label>
              </>
            );
          };
          
          const Input = styled.input`
            ${({ theme }) => css`
              border: 1px solid white;
              position: absolute;    
              /* &:checked + svg {
     
            fill:blue;
                  } */
               /* background-color:transparent
              
                  accent-background:transparent; */
                }
              `}
            `;    

//Delete the item from the list
    const deleteToDo = (_id, setToDo) => {
        console.log("delete")
        axios
        .post(baseUrl+'/delete', {_id})
        .then((data)=>{
            getAllToDo(setToDo)
            })
            .catch((err)=>console.log(err))
        }

        export {getAllToDo, addToDo, updateToDo, deleteToDo}
// export {getAllToDo, addToDo, updateToDo, deleteToDo, doneToDo}
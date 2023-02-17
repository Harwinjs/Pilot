const { text } = require('express')
const ToDoModel = require('../models/ToDoModel')

module.exports.getToDo = async (req,res) => {
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

module.exports.saveToDo = async (req,res) => {

    const {text} = req.body
    

    ToDoModel
    .create ({text})
    .then ((data) => {
        console.log("added Successfully....");
        console.log(data);
        res.send(data )
            })
  }

  module.exports.subToDo = async (req,res) => {

    const {text} = req.body

    ToDoModel
    .create ({text})
    .then ((data) => {
        console.log("Added Subtask Successfully....");
        console.log(data);
        res.send(data)
            })
    
}

module.exports.updateToDo = (req, res) => {
    const { _id, text } = req.body;
    console.log({text});
    ToDoModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.set(201).send("Updated Successfully..."))
        .catch((err) => console.log(err));
}
    
//Done
    module.exports.doneToDo = async (req,res) => {
      
        const {_id, text} = req.body
console.log({text});
        
            ToDoModel
        .findByIdAndUpdate(_id,{ text})
        .then(()=> res.set(201).send("Done Successfully..."))
        .catch((err)=> console.log(err))
        }

    module.exports.deleteToDo = async (req,res) => {

        const {_id} = req.body
    
        ToDoModel
        .findByIdAndDelete(_id)
        .then(()=> res.send("Deleted Successfully..."))
        .catch((err)=> console.log(err))
        }


        
    
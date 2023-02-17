const {Router}= require ("express");
const { getToDo, saveToDo, deleteToDo, updateToDo, doneToDo, subToDo} = require("../controllers/ToDoController");

const router = Router()
//Routing
router.get("/",getToDo)
router.post("/save",saveToDo)
router.post("/delete",deleteToDo)
router.post("/update",updateToDo)
router.post("/done",doneToDo)
router.post("/subtask",subToDo)


module.exports = router;
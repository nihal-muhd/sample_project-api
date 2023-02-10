const express=require('express')
const router=express.Router()
const { addTask,getTask,deleteTask,moveTask } = require('../controllers/taskControllers')

router.post('/add-task',addTask)
router.get('/get-task',getTask)
router.post('/delete-task',deleteTask)
router.post('/move-task',moveTask)

module.exports=router
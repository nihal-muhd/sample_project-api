const TaskModel=require('../models/taskModel')

module.exports.addTask=async(req,res)=>{
    const {newTask,status}=req.body
    console.log(newTask)
    console.log(status)
    await TaskModel.create(newTask)
    res.status(201).json('task added')
}

module.exports.getTask=async(req,res)=>{
    try {
        const data=await TaskModel.find().lean()
        res.status(201).json(data)
    } catch (error) {
        
    }
}

module.exports.deleteTask=async(req,res)=>{
    try {
        console.log(req.body)
        const {taskId}=req.body
        await TaskModel.deleteOne({id:taskId})
        res.status(201).json('task deleted')
    } catch (error) {
        
    }
}

module.exports.moveTask=async(req,res)=>{
    try {
        console.log(req.body)
        const {id,stepStatus}=req.body
        await TaskModel.updateOne({id:id},{
            $set:{
                status:stepStatus
            }
        })
        res.status(201).json('task moved')
    } catch (error) {
        
    }
}

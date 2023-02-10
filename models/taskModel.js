const mongoose=require('mongoose')

const taskSchema=mongoose.Schema({
    id:{
        type:String
    },
    title:{
        type:String
    },
    status:{
        type:String
    }
},
{
    timestamps:true
})

const TaskModel=mongoose.model('task',taskSchema)
module.exports=TaskModel
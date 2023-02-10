const mongoose=require('mongoose')

const connectDB=async()=>{
    try {
        const conn=await mongoose.connect('mongodb://localhost:27017/shantisoft')
        console.log('Database connected')
    } catch (error) {
        console.log(error)
    }
}

module.exports=connectDB
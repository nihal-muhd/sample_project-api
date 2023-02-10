const express=require('express')
// const dotenv=require('dotenv').config({path:'./.env'})
const connectDB=require('./config/db')
const cors=require('cors')

const port=5000
const app=express()
connectDB()

const taskRouter=require('./routes/taskRouter')

app.use(express.json())
app.use(cors())

app.use('/',taskRouter)

app.listen(port,()=>console.log('server connected to port'))
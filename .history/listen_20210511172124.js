const express =require('express')
const app=express()
const router=express.Router()
let userRouter=require('./router')
app.use('/add',userRouter)

app.listen(3000,()=>{
    console.log('服务器启动');
})
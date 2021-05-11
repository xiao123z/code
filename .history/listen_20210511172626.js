const express =require('express')
const app=express()
const router=express.Router()
let userRouter=require('./router')
app.use('/add',userRouter)
app.use(express.static("public"))
router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //访问控制允许来源：所有
    next();
});
app.listen(8081,()=>{
    console.log('服务器启动');
})
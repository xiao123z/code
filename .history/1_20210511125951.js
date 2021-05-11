var express = require('express');
var app = express();
const path = require('path');
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //访问控制允许来源：所有
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //访问控制允许报头 X-Requested-With: xhr请求
    res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS'); //访问控制允许方法
    res.header('X-Powered-By', 'nodejs');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
app.use(express.static(path.join(__dirname,)))
var math=0
app.get('/get', (req,res) => { 
   
   var posh=req.query.suggest
   var pos=req.query.mox
   console.log(pos);
  math=Math.round(Math.random()*10000)
    var time =setTimeout(() => {
        math=Math.round(Math.random()*0)
        return math
    },6000)
    console.log(math);
if(pos.err==posh&&math==pos.msg){
    res.send({err1:0,msg1:"登陆成功"})
}
res.send({err:posh,msg:math})
})
app.get('/logo', (req,res) => { 
  
   var posh=req.query.suggest
   var pos=req.query.mox
   console.log(pos);
  math=Math.round(Math.random()*10000)
    var time =setTimeout(() => {
        math=Math.round(Math.random()*0)
        return math
    },6000)
    console.log(math);
if(pos.err==posh&&math==pos.msg){
    res.send({err1:0,msg1:"登陆成功"})
}
res.send({err:posh,msg:math})
})
app.listen(8081,re=>{
    console.log('服务器开启');
})
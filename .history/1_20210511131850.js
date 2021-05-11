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
var math
var posh
app.get('/get', (req,res) => { 
  posh=req.query.suggest
  math=Math.round(Math.random()*10000)
    var time =setTimeout(() => {
        math=Math.round(Math.random()*0)
        return math,
        clearTimeout(time)
    },6000)
    return math,
res.send({err:posh,msg:math})
})
app.get('/logo', (req,res) => { 
   var pos=Number( req.query.phone)
   var code=Number(req.query.code) 
    console.log(pos,code);
    if(math==0){
        res.send({err1:0,msg1:"验证码过期"})
        re
    }
if(pos==posh&&math==code){
    res.send({err1:0,msg1:"登陆成功"})
}else{
    res.send({err1:0,msg1:"登录失败"})
}

})
app.listen(8081,re=>{
    console.log('服务器开启');
})
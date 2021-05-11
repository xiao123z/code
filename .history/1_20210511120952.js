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
app.post('/get', (req,res) => { 
    var time=60*2
setInterval(()=>{
console.log();
},6000)
  var math=  Math.round(Math.random()*10000)

    res.send({err:0,msg:math})
})
app.listen(8081,re=>{
    console.log('服务器开启');
})
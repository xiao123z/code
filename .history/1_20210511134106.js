var express = require('express');
var app = express();
 var request = require('request');
const path = require('path');
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //访问控制允许来源：所有
    next();
});

app.use(express.static("public")).listen(8081)
var math
var posh
app.get('/get', (req,res) => { 
  posh=req.query.suggest

  math=Math.round(Math.random()*10000)
    var time =setTimeout(() => {
        math=Math.round(Math.random()*0)
        return math,
        clearTimeout(time)
    },300000)
   
request(`https://way.jd.com/jixintong/hyapi?tos=13580305095&msg=【中正云通信】您的JD验证码为：6266，欢迎注册使用。&appkey=657e29eb1bf4be8ea5e4d3bf291f48de', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body)
  }
})　　
    return math,
res.send({err:posh,msg:math})
})
app.get('/logo', (req,res) => { 
   var pos=Number( req.query.phone)
   var code=Number(req.query.code) 
    console.log(pos,code);
    if(math==0){
        res.send({err1:0,msg1:"验证码过期"})
        return false
    }
if(pos==posh&&math==code){
    res.send({err1:0,msg1:"登陆成功"})
}else{
    res.send({err1:0,msg1:"登录失败"})
}

})


var express = require('express')
var cookieParser = require('cookie-parser')
var app = new express()
app.use(cookieParser());
const path = require('path');

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //访问控制允许来源：所有
    next();
});
app.use(express.static("public")).listen(8081)
let mails={}
var phi=
app.get('/get', (req, res) => {
    let {phone}=req.query //手机号
    phi=req.query.phone
  
    let code =parseInt(Math.random()*(10000-1000)+1000)//随机验证码
    let timer=(new Date).getTime()
    mails[phone]=code+timer.toString()
    var vv=code+timer
    // mails.timer=(new Date).getTime()
    // console.log(mails,mails[phone].substr(4));
    res.cookie('username',{phone,vv},{maxAge:600000})
    console.log(req.cookies.username);
    res.send({err:0,msg:code})
      
})
app.get('/logo', (req, res) => {
    let {phone,code}=req.query 
    let a=300000
    var pho= req.cookies.username.phone);
    console.log(req.cookies.username.phone);
    if(phone!=phi){
        res.send({ err1: -2, msg: "登陆失败" })
        return false
    }
    if ((new Date).getTime()-a>Number(mails[phone].substr(4))) {
        res.send({ err1: 0, msg: "验证码过期" })
      
    }else if(mails[phone].substr(0,4)!=code){
        res.send({err:-1,msg:'验证码错误'})
     
    } else {
        res.send({ err1: 0, msg: "登陆成功" })
    } 
})


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
let mails=[]
var phi=''
app.get('/get', (req, res) => {
    let mail={}
    let {phone}=req.query //手机号
    let code =parseInt(Math.random()*(10000-1000)+1000)//随机验证码
    let timer=(new Date).getTime()//请求的时间
    mail.phone=phone
    mail.code=code
    mail.timer=timer
    mails.push(mail)
    mails.forEach((item, i) => {
        console.log(item.phone.indexOf(phone));
        if (item.phone.indexOf(phone)==-1) {
            mails.splice(i, 1); 
           console.log(mails);
        }
      })
     
    res.send({err:0,msg:code})
      
})
app.get('/logo', (req, res) => {
    let {phone,code}=req.query 
    let a=300000
    let aaa=mails.filter(item=> item.phone==phone)
    if(aaa[0].phone==phone){
        if(aaa[0].code!=code){
            res.send({err:-2,msg:'验证码错误'})
        }else if((new Date).getTime()-a>Number(aaa[0].timer)){
            res.send({err:-1,msg:'时间超时'})
        }else{
            res.send({err:0,msg:'登录成功'})
        }
    }else{
        res.send({err:-1,msg:'手机号错误'})
    }
})

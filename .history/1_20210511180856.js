
var express = require('express')
var app = new express()

const path = require('path');

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //访问控制允许来源：所有
    next();
});
app.use(express.static("public")).listen(8081)
let mails={}
app.get('/get', (req, res) => {
    let {phone}=req.query //手机号
    let code =parseInt(Math.random()*(10000-1000)+1000)//随机验证码
    let timer=(new Date).getTime()
    mails[phone]=code+timer.toString()
    // mails.timer=(new Date).getTime()
    // console.log(mails,mails[phone].substr(4));
    res.send({err:0,msg:code})
      
})
app.get('/logo', (req, res) => {
    var pos = Number(req.query.phone)
    var code = Number(req.query.code)
    let a=1000*30 
    if ((new Date).getTime()-a>Number(mails[phone].substr(4))) {
        res.send({ err1: 0, msg1: "验证码过期" })
        return false
    }else 
   
    if (pos == posh && math == code) {
        res.send({ err1: 0, msg1: "登陆成功" })
    } else {
        res.send({ err1: 0, msg1: "登录失败" })
    }

})

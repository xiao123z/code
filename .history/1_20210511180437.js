
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
app.get('/get', (req, res) => {
    posh = req.query.phone
    math = parseInt(Math.random()*(10000-1000)+1000)
    let timer=(new Date).getTime()
    mails[phone]=code+timer.toString()

        res.send({err: posh, msg: math })
      
})
app.get('/logo', (req, res) => {
    var pos = Number(req.query.phone)
    var code = Number(req.query.code)
    console.log(pos, code);
    console.log(math);
    if (math == 0) {
        res.send({ err1: 0, msg1: "验证码过期" })
        return false
    }
    if(mails[phone].substr(0,4)!=code){
        res.send({err:-1,msg:'验证码错误'})
    }
    if (pos == posh && math == code) {
        res.send({ err1: 0, msg1: "登陆成功" })
    } else {
        res.send({ err1: 0, msg1: "登录失败" })
    }

})

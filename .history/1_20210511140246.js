var express = require('express');
var app = express();
const axios = require('axios');
const path = require('path');
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //访问控制允许来源：所有
    next();
});

app.use(express.static("public")).listen(8081)
var math
var posh
app.get('/get', (req, res) => {
    posh = req.query.suggest
    math = Math.round(Math.random() * 10000)
    var time = setTimeout(() => {
        math = Math.round(Math.random() * 0)
        return math,
            clearTimeout(time)
    }, 300000)
console.log(posh);
var url=`https://way.jd.com/chuangxin/dxjk?mobile=${posh}&content=【创信】你的验证码是：${math}，5分钟内有效！&appkey=657e29eb1bf4be8ea5e4d3bf291f48de`
axios.get(url)
    return math,
        res.send({ err: posh, msg: math })
})
app.get('/logo', (req, res) => {
    var pos = Number(req.query.phone)
    var code = Number(req.query.code)
    console.log(pos, code);
    if (math == 0) {
        res.send({ err1: 0, msg1: "验证码过期" })
        return false
    }
    if (pos == posh && math == code) {
        res.send({ err1: 0, msg1: "登陆成功" })
    } else {
        res.send({ err1: 0, msg1: "登录失败" })
    }

})

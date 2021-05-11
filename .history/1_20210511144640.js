var express = require('express');
var app = express();
const axios = require('axios');
const https = require('https');
const path = require('path');
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //访问控制允许来源：所有
    next();
});
app.use(function (req, res) {
    if (req.url === '/favicon.ico') {
      return
    }
  
    // 设置常规cookie, 有效期为20s, 客户端脚本不能访问它的值
    res.cookie('name', 'abc', { signed: false, maxAge: 20 * 1000, httpOnly: true });
    console.log(req.cookies, req.url, req.signedCookies);
  })
app.use(express.static("public")).listen(8081)
var math
var posh
app.get('/get', (req, res) => {
    posh = req.query.suggest
    math = Math.round(Math.random() * 10000)
    var username=getCookie(posh)
    var time = setTimeout(() => {
        math = Math.round(Math.random() * 0)
        return math,
            clearTimeout(time)
    }, 300000)
    return math,  
    console.log(math,posh),
        res.send({err: posh, msg: math })
      
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

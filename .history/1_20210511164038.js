
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
var math
var posh
var list=[]
app.get('/get', (req, res) => {
    posh = req.query.suggest
   
    math = Math.round(Math.random() * 10000)
    var time = setTimeout(() => {
        math = Math.round(Math.random() * 0)
        return math,
            clearTimeout(time)
    }, 300000)
    return math,  
    console.log(math,posh),
   
     data={
        err:posh,
        msg: math 
        },
      
        <% if(entRet.lstContent.headImg ){ %>
            <img src="<%= entRet.lstContent.headImg %>" alt="用户头像">
        <% }else{%>
            <img src="/images/share-pages/icn2.png" alt="用户头像">
       <%} %>
————————————————
版权声明：本文为CSDN博主「Ted_Rong」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/Shirley_Ying/article/details/52678849
      
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
    if (pos == posh && math == code) {
        res.send({ err1: 0, msg1: "登陆成功" })
    } else {
        res.send({ err1: 0, msg1: "登录失败" })
    }

})


本帖最后由 chenbo235 于 2018-8-31 12:19 编辑


首先安装express在命令行输入：npm install express -g
安装完成后可以查看安装情况：npm ls -g


然后创建server.js文件
var express = require("express");
var app = express();
app.use(express.static("public")).listen(8080);
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
        return false
    }
if(pos==posh&&math==code){
    res.send({err1:0,msg1:"登陆成功"})
}else{
    res.send({err1:0,msg1:"登录失败"})
}

})

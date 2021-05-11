const express=require('express') 
const router=express.Router()

let mails={}
//获取验证码

router.get('/getCode',(req,res)=>{
    let {phone}=req.query //手机号
    let code =parseInt(Math.random()*(10000-1000)+1000)//随机验证码
    let timer=(new Date).getTime()
    mails[phone]=code+timer.toString()
    // mails.timer=(new Date).getTime()
    // console.log(mails,mails[phone].substr(4));
    res.send({err:0,msg:code})
    // console.log(mails);
})

//登录
router.get('/reg',(req,res)=>{
    let {phone,code}=req.query //手机 验证码
    let a=1000*30 //3秒a
    if(mails[phone].substr(0,4)!=code){
        res.send({err:-1,msg:'验证码错误'})
    }else if((new Date).getTime()-a>Number(mails[phone].substr(4))){
        res.send({err:-2,msg:'时间超时'})
    }else{
        res.send({err:0,msg:'登录成功'})
    }
})

module.exports=router
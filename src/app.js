const express=require("express");

const app=express()

app.use("/",(re,res)=>{
    res.send(": reached")
})

app.use("/hello",(re,res)=>{
    res.send(":hello reached")
})



app.use("/test",(re,res)=>{
    res.send(":test reached")
})

app.listen(7000,()=>{
    console.log("listening from 7000")
})
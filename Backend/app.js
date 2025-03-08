const express=require("express");
const app=express();
app.listen(8080,()=>{
    console.log("App is listening on port 8080");
})

app.get("/",(req,res)=>{
    res.send(<h1> "Hello World" </h1>);
})
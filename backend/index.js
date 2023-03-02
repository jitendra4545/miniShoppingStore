
require('dotenv').config()
const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('Welcome to My Website')
})



app.listen(process.env.port,()=>{
    console.log(`server running on port ${process.env.port}`)
})
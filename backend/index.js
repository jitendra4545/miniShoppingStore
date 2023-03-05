
require('dotenv').config()
const express = require('express')
const { connection } = require('./config/db')
const { UserModel } = require('./model/UserModel')
const app = express()
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Welcome to My Website')
})

app.post('/register', async (req, res) => {
    let data=req.body
    try{
       let update=new UserModel(data)
       await update.save()
       res.send(update)
    }catch(err){
   res.send(err)
    }
})

app.post('/login', async (req, res) => {

})

app.listen(process.env.port, async () => {
    try {
        await connection
        console.log('connected to db')
    } catch (err) {
        console.log('error')
    }
    console.log(`server running on port ${process.env.port}`)
})
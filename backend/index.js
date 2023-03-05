const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config()

const express = require('express')
const { connection } = require('./config/db')
const { UserModel } = require('./model/UserModel')
const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to My Website')
})

app.post('/register', async (req, res) => {
    let { username, password, mobileNo, name, email, is_active, shipping_address } = req.body
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                res.send('error')
            } else {
                let update = new UserModel({ username, password: hash, mobileNo, name, email, is_active, shipping_address })
                await update.save()
                res.send(update)
            }
        });
    } catch (err) {
        res.send(err)
    }
})

app.post('/login', async (req, res) => {
    const {username,password}=req.body
    console.log(req.body)
    try {
        let data=await UserModel.findOne({username})
        console.log(data)
        if(data){
            bcrypt.compare(password, data.password, async function(err, result) {
                if(result){
                    let token = jwt.sign({ foo: 'bar' }, 'jitendra');
                    await UserModel.findByIdAndUpdate({_id:data._id},{is_active:true})
                    res.send(token)
                }else{
                console.log(err)
                }
             });
        }
      
    } catch (err) {
              console.log(err)
    }
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
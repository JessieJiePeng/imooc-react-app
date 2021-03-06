const express = require('express')
const utils = require('utility')
const bodyParse = require('body-parser')
const cookieParse = require('cookie-parser')
const userRouter = require('./user')


const app = express();
app.use(cookieParse())
app.use(bodyParse.json())
app.use('/user', userRouter)

app.listen(9093, function() {
    console.log('Node app start at port 9093')
})
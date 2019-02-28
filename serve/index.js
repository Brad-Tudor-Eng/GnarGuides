const express = require('express')
const compression = require('compression')
const app = express()
const path = require('path')
require('dotenv').config()

app.use(express.static(path.join(__dirname, "client")))
app.use(compression())

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, "client", "index.html"))
})

app.listen(process.env.PORT, ()=>{
    console.log('started')
})
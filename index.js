"use strict"
const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 3000

//app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get("/webhook",(req,res)=>{
    res.send({message:"Hola mundo"})
})

app.post("/webhook",(req,res)=>{
    let data = req.body;
    console.log("inicio")
    console.log(data)
    res.sendStatus(200)
    console.log("fin")
})

app.listen(port , ()=>{
    console.log(`Servicio corriendo en el puerto ${port}`)
})
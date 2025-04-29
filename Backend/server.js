import express from "express"
import dotenv from 'dotenv'
import dbconnect from "./db/dbConnection.js"
import app from "./app.js"

app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(3000,(req,res)=>{
    dbconnect()
    console.log("app running on port 3000")
})
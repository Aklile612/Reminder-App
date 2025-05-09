import express from "express"
import authRoute from "./Routes/authRoute.js"
import courseRoute from "./Routes/courseRoute.js"
import calanderRoute from "./Routes/calanderRoute.js"

const app=express()

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


app.use("/auth",authRoute)
app.use("/course",courseRoute)
app.use("/calander",calanderRoute)
export default app
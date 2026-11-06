import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authroute from './Router/authRoute.js'
import dbConnect from './Config/db.js'

dotenv.config()
dbConnect()

const exp = express()

exp.use(cors())
exp.use(express.json())
exp.use("/api/route",authroute)

const Port_number = process.env.PORT || 5000

exp.listen(Port_number,()=>{
    console.log(`Server Connected  http://localhost:${Port_number}`)
})

// http://localhost:3000/api/route
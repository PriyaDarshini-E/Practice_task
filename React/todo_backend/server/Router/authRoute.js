import express from 'express'
import { createtodo, getAllTodo } from '../Controller/authController.js'

const Route = express.Router()

Route.post("/create",createtodo)
// http://localhost:3000/api/route/create

Route.get("/gettodo",getAllTodo)
// http://localhost:3000/api/route/gettodo

export default Route
import userModel from "../Model/Todo.js"

export const createtodo = async (req,res)=>{
    try {
        const newTodo = await userModel.create(req.body)
        res.status(201).json({msg:"data added",newTodo})
    } catch (error) {
        console.log(error)
        res.status(400).json({msg:error})
    }
}

export const getAllTodo = async(req,res) =>{
    try {
        const gettodo = await userModel.find()
        res.status(200).json({msg:"Data Found",gettodo})
    } catch (error) {
        console.log(error)
        res.status(400).json({msg:error})
    }

}
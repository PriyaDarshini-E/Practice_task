import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    task : {type:String,required:true},
    completed : {type:Boolean,default:false},
},{timestamps:true})

const userModel = mongoose.model("todoList",userSchema)

export default userModel;
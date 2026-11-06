import mongoose from "mongoose";

const dbConnect = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database connected ${conn.connection.host}`)
    } catch (error) {
        console.log(`Something went wrong ${error}`)
    }
}

export default dbConnect
import mongoose from "mongoose";

const connectDB = async (params) => {
    mongoose.connection.on('connected',() =>{
        console.log("DB connected");
    })
    await mongoose.connect('${process.env.MONGODB_URI}/forever')
}

export default connectDB;
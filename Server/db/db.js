import mongoose from "mongoose"
const connectDB = async ()  => {
    try{
        const connectionInstancce = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`\n🍃 MongoDB connected: DB HOST: ${connectionInstancce.connection.host}`)
    }catch(err){
        console.log(err);
        console.log('MongoDB connection error:', err);
    }
}

export default connectDB;
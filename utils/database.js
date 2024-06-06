import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async()=>{
    if(isConnected) {
        console.log("Connected")
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'invoice_system',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Now connected")
    } catch (error) {
        console.log(error)
    }
}
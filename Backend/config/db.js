import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://vedtellawar:31052006@cluster0.ycrn8a1.mongodb.net/food-del')
    .then(()=>{
        console.log('db connected');
    })
}
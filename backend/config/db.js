import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mdrafin008:sufianmealmate008@cluster0.8os7dgl.mongodb.net/mealmate').then(()=>console.log("DB Connected"))
}
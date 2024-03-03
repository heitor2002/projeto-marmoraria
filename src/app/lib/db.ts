import mongoose from "mongoose";

export default async function connectMongo(){
  try{
    await mongoose.connect(`${process.env.MONGODB_URI_NEXT}`)
    console.log("Connected to mongo!")
  }catch(error){
    console.log("Connection to mongo failed...")
  }
}
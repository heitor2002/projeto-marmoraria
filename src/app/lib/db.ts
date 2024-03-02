// import mysql from "mysql2/promise";

import mongoose from "mongoose";

// export async function query({ query, values = [] }) {
//   console.log(query);
//   const pool = await mysql.createConnection({
//     host: process.env.HOST,
//     database: process.env.DATA_BASE,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//   });

//   try {
//     const [results] = await pool.execute(query, values);
//     pool.end();
//     return results;
//   } catch (error: any) {
//     throw Error(error.message);
//     return { error };
//   }
// }

export default async function connectMongo(){
  try{
    await mongoose.connect(`${process.env.MONGODB_URI_NEXT}`)
    console.log("Connected to mongo!")
  }catch(error){
    console.log("Connection to mongo failed...")
  }
}
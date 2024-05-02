import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

async function dbConnect() {
  try {
    await connect(MONGODB_URI, {
      dbName: "DadScript",
    });

  } catch (err) {
    throw err;
  }
}

export default dbConnect;

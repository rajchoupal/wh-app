import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const MONGODB_URI = "mongodb+srv://rajchoupal323:Nanu6789@cluster1.lptghzi.mongodb.net/WA-app";

const connectDB = async () => {
  try {
    const connectionInstances = await mongoose.connect(
      `${MONGODB_URI}/${DB_NAME}`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log(
      `DATABASE Connection successful !! DB_HOST:${connectionInstances.connection.host}`
    );
  } catch (error) {
    console.log(`Error in Connecting to Database: ${error}`);
    process.exit(1);
  }
};

export default connectDB;

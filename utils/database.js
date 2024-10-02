import mongoose from "mongoose";

let isConnected = false;

const connectToDB = async () => {
  /*
        Strict-Query enforces security and throws errors for any invalid queries (by potential query injections or data corruption in general)
    */
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("DATABASE ALREADY CONNECTED");
    return;
  }

  try {
    const response = await mongoose.connect(
      process.env.MONGODB_CONNECTION_URI,
      {
        dbName: "share_prompts",
      }
    );
    if (response.connections[0].readyState) {
      console.log(
        `DATABASE CONNECTED SUCCESSFULLY | PORT: ${response.connection.port} | Host: ${response.connection.host}`
      );
      isConnected = true;
    }
  } catch (error) {
    console.log(`MONGODB CONNECTION FAILED`, error);
  }
};

export default connectToDB;

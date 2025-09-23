import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shivas2710cool00_db_user:RnpVAk0nkDN5Dl8f@cluster0.hrjwknd.mongodb.net/",
      {
        dbName: "NextJS_Auth_App",
      }
    );
    console.log("MongoDB Connected Successfully...!");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;

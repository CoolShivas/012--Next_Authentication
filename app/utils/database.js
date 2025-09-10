import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shivas2710cool00_db_user:hwFABcCHGosHbXmT@cluster0.7zyp80x.mongodb.net/",
      {
        dbName: "Authen_NextJS_App",
      }
    );
    console.log("MongoDB Connected Successfully...!");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;

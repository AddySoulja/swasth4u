import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database...");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  }
};
export default connectDatabase;

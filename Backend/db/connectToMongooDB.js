import mongoose from "mongoose";

const conectToMongooDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};
export default conectToMongooDB;

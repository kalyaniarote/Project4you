import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://hrtecnobij_db_user:Kalyani12345@cluster0.bmoin05.mongodb.net/project4u?appName=Cluster0";

export async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI not found");
  }

  if (mongoose.connection.readyState >= 1) {
    return;
  }

  await mongoose.connect(MONGODB_URI);
}

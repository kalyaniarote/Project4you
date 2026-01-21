import { connectDB } from "@/lib/db";
import User from "@/models/User";

export async function POST(req: Request) {
  await connectDB();

  const { name, email, password } = await req.json();

  // check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return Response.json(
      { message: "User already exists" },
      { status: 400 }
    );
  }

  // save user
  await User.create({ name, email, password });

  return Response.json({ message: "User registered successfully" });
}

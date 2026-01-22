import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";

export async function GET() {
  try {
    console.log("🧪 Testing MongoDB Connection...");
    console.log(`📍 MONGODB_URI defined: ${!!process.env.MONGODB_URI}`);
    
    const startTime = Date.now();
    
    await dbConnect();
    
    const connectTime = Date.now() - startTime;
    
    return NextResponse.json(
      {
        status: "✅ Connected",
        message: "MongoDB Atlas connection successful",
        connectTime: `${connectTime}ms`,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("🧪 Connection Test Failed:", error);
    return NextResponse.json(
      {
        status: "❌ Connection Failed",
        message: error.message,
        details: {
          code: error.code,
          name: error.name,
        },
        timestamp: new Date().toISOString(),
      },
      { status: 503 }
    );
  }
}

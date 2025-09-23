import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

/////////******************************************************************************////////
/////////******************************************************************************////////

// // // Starting of GET route function;

export async function GET(request) {
  await connectDB();

  try {
    console.log("Testing the Get request");
    /**
     * MongoDB Connected Successfully...!
Testing the Get request
 GET /api/user 200 in 99ms
     */
    return NextResponse.json({
      message: "Testing the Get request",
      success: true,
    });
    // // // Open the POSTMAN select the GET request and enter url (http://localhost:3000/api/user) and hit send btn. You will get the response as :-
    /**
     * {
    "message": "Testing the Get request",
    "success": true
}
     */
  } catch (error) {
    return NextResponse.json({ message: "Server Error", success: false });
  }
}

// // // Ending of GET route function;

/////////******************************************************************************////////
/////////******************************************************************************////////

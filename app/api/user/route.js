import { userRegisterFunc } from "@/app/Controllers/authController";
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

// // // Starting of POST route for User Register function of Controller;

export async function POST(request) {
  await connectDB();
  //   try {
  //     const { searchParams } = new URL(request.url);
  //     console.log("Printing searchParams => ", searchParams);
  //     /**
  //      * MongoDB Connected Successfully...!
  // Printing searchParams =>  URLSearchParams { 'signup' => 'true' }
  //  POST /api/user?signup=true 200 in 816ms
  //  GET / 200 in 599ms
  //      */
  //     return NextResponse.json({
  //       messag: "Get posted successfully",
  //       success: true,
  //     });
  //     // // // Open the POSTMAN select the POST request and enter url (http://localhost:3000/api/user?signup=true) and then select body enter the data (such as name, email, password) hit send btn. You will get the response as :-
  //     /**
  //      * {
  //     "messag": "Get posted successfully",
  //     "success": true
  // }
  //      */
  //   } catch (error) {
  //     return NextResponse.json({ message: error.message, success: false });
  //   }

  try {
    const { searchParams } = new URL(request.url);

    if (searchParams.get("signup")) {
      return userRegisterFunc(request);
    }
    return NextResponse.json({ message: "Data posted on DB", success: true });
  } catch (error) {
    return NextResponse.json({ message: error.message, success: false });
  }
}

// // // Ending of POST route for User Register function of Controller;

/////////******************************************************************************////////
/////////******************************************************************************////////

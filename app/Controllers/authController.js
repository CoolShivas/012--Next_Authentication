import { NextResponse } from "next/server";

/////////******************************************************************************////////
/////////******************************************************************************////////

// // // Starting of User Register function;

export const userRegisterFunc = async (request) => {
  console.log("Testing the Post Request => ", request.json());
  return NextResponse.json({
    message: "Testing the Post Request",
    success: true,
  });
};

// // // Ending of User Register function;

/////////******************************************************************************////////
/////////******************************************************************************////////

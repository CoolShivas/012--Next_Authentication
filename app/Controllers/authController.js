import { NextResponse } from "next/server";

/////////******************************************************************************////////
/////////******************************************************************************////////

// // // Starting of User Register function;

export const userRegisterFunc = async (request) => {
  const { name, email, password } = await request.json();
  console.log("Register data successfully => ", name, email, password);
  /**
   * MongoDB Connected Successfully...!
Register data successfully =>  shiva shiva@gmail.com 123
 POST /api/user?signup=true 200 in 2903ms
 GET / 200 in 2650ms
   */
  return NextResponse.json({
    message: "Register data successfully..",
    success: true,
    data: { name, email, password },
  });
  /**
   * {
    "message": "Register data successfully..",
    "success": true,
    "data": {
        "name": "shiva",
        "email": "shiva@gmail.com",
        "password": "123"
    }
}
   */
};

// // // Ending of User Register function;

/////////******************************************************************************////////
/////////******************************************************************************////////

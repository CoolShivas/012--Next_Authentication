import { NextResponse } from "next/server";
import UserSCHEMA from "../Models/UserSCHEMA";

/////////******************************************************************************////////
/////////******************************************************************************////////

// // // Starting of User Register function;

export const userRegisterFunc = async (request) => {
  const { name, email, password } = await request.json();
  try {
    let userReg = await UserSCHEMA.findOne({ userEmail: email });

    if (userReg) {
      console.log("User already registered");
      return NextResponse.json({
        message: "User already registered",
        success: false,
      });
    }

    userReg = await UserSCHEMA.create({
      userName: name,
      userEmail: email,
      userPassword: password,
    });

    console.log("User registered successfully => ", userReg);
    return NextResponse.json({
      message: "User registered successfully....!",
      success: true,
      userReg,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Server error in user register",
      success: false,
      error: message.error,
    });
  }
};

// // // Ending of User Register function;

/////////******************************************************************************////////
/////////******************************************************************************////////

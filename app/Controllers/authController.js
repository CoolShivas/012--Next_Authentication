import { NextResponse } from "next/server";
import UserSCHEMA from "../Models/UserSCHEMA";
import bcrypt from "bcryptjs";

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

    const hashPassWord = await bcrypt.hash(password, 10);

    userReg = await UserSCHEMA.create({
      userName: name,
      userEmail: email,
      userPassword: hashPassWord,
    });

    console.log("User registered successfully => ", userReg);
    return NextResponse.json({
      message: "User registered successfully....!",
      success: true,
      userReg,
    });
    // // // Open the POSTMAN select the POST request and enter url (http://localhost:3000/api/user?signup=true) and then make the body as :-
    /**
     * {
    "name":"piyush",
    "email":"piyush@gmail.com",
    "password":"123"
}
     */
    // // // Then, hit send btn. You will get the response as :-
    /**
     * {
    "message": "User registered successfully....!",
    "success": true,
    "userReg": {
        "userName": "himanshu",
        "userEmail": "himanshu@gmail.com",
        "userPassword": "$2b$10$qwh14rGjgh.uCUXCvbsiCuMEk.XJQzbaznUAH2FDIOAMFsOzfeKb2",
        "_id": "68d2e13da93c0ac1b54aab32",
        "createdAt": "2025-09-23T18:04:45.040Z",
        "updatedAt": "2025-09-23T18:04:45.040Z",
        "__v": 0
    }
}
     */
    // // // Then, Again hit send btn. You will get the response as :-
    /**
         * {
    "message": "User already registered",
    "success": false
}
         */
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

// // // Starting of User Login function;

export const userLoginFunc = async (request) => {
  const { email, password } = await request.json();

  try {
    let userLogin = await UserSCHEMA.findOne({ userEmail: email });

    if (!userLogin) {
      console.log("User login not exists...!");
      return NextResponse.json({
        message: "User login not exists...!",
        success: false,
      });
    }

    const unHashPassWord = await bcrypt.compare(
      password,
      userLogin.userPassword
    );

    if (!unHashPassWord) {
      console.log("Invalid login password...!");
      return NextResponse.json({
        message: "Invalid login password...!",
        success: false,
      });
    }

    console.log(`Welcome ${userLogin.userName}`);
    return NextResponse.json({
      message: `Welcome ${userLogin.userName}`,
      success: true,
      userLogin,
    });
    // // // Open the POSTMAN select the POST request and enter url (http://localhost:3000/api/user?login=true) and then make the body as :-
    /**
     * {
     "email":"himanshu@gmail.com",
    "password":"123"
}
     */
    // // // Then, hit send btn. You will get the response as :-
    /**
     * {
    "message": "Welcome himanshu",
    "success": true,
    "userLogin": {
        "_id": "68d2e13da93c0ac1b54aab32",
        "userName": "himanshu",
        "userEmail": "himanshu@gmail.com",
        "userPassword": "$2b$10$qwh14rGjgh.uCUXCvbsiCuMEk.XJQzbaznUAH2FDIOAMFsOzfeKb2",
        "createdAt": "2025-09-23T18:04:45.040Z",
        "updatedAt": "2025-09-23T18:04:45.040Z",
        "__v": 0
    }
}
     */
  } catch (error) {
    return NextResponse.json({
      message: "Server error in user login",
      success: false,
      error: message.error,
    });
  }
};

// // // Starting of User Login function;

/////////******************************************************************************////////
/////////******************************************************************************////////

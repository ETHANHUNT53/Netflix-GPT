import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { NETFLIX_LOGIN_BACKGROUND } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // ('Button Clicked');
    const message = checkValidData(
      isSignInForm,
      name.current ? name.current.value : "",
      email.current.value,
      password.current.value
    );
    setErrMessage(message);

    if (message) return;
    // (message)
    if (!isSignInForm) {
      //Sign Up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        updateProfile(user, {
            displayName: name.current.value
          }).then(() => {
            // Profile updated!
            const {uid,email,displayName} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}));
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode+ " " + errorMessage);
          // ..
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrMessage(errorCode+" "+errorMessage);
        });
            }
  };

  return (
    <div className="relative min-h-screen bg-black">
      <Header />
      <div className="absolute hidden lg:block w-full h-full">
        <img
          className="object-cover w-full h-full"
          src={NETFLIX_LOGIN_BACKGROUND}
          alt="background"
        />
      </div>
      <div className="relative flex items-center justify-center min-h-screen">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="p-8 w-full max-w-md bg-black bg-opacity-85 text-white rounded-md"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              ref={name}
              placeholder="Full Name"
              className="p-3 bg-gray-700 rounded-md my-4 w-full"
            />
          )}
          <input
            type="text"
            autoComplete="email"
            ref={email}
            placeholder="Email Address"
            className="p-3 bg-gray-700 rounded-md my-4 w-full"
          />
          <input
            type="password"
            autoComplete="current-password"
            ref={password}
            placeholder="Password"
            className="p-3 bg-gray-700 my-4 w-full rounded-md"
          />
          <p className="text-red-600 font-semibold">{errMessage}</p>
          <button
            className="p-2 w-full my-4 bg-red-600 hover:bg-red-700 rounded-md"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-gray-400">
            {isSignInForm ? "New to Netflix? " : "Already Registered? "}
            <span
              onClick={toggleSignInForm}
              className="text-white hover:underline cursor-pointer"
            >
              {isSignInForm ? "Sign Up Now." : "Sign In Now."}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

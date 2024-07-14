import React, { useState } from "react";
import Apple from "../../assets/images/Apple.svg";
import Facebook from "../../assets/images/Facebook.svg";
import Google from "../../assets/images/Google.svg";
import Cancel from "../../assets/images/Cancel.svg";
import Password from "../../assets/images/Password.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Toggle from "./Toggle";
import { Navigate, useNavigate } from "react-router";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../firebase/auth";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSigningIn, setIsSigningIn] = useState(false)


  const navigate = useNavigate();

  const gotoSignUp = () => {
    navigate("/SignUp");
  };

  const gotoOverall = () => {
    navigate("/Overall");
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isSigningIn) {
      setIsSigningIn(true)
       doSignInWithEmailAndPassword(email, password)
    }

   
    

    // const onGoogleSignIn = (e) => {
    //   e.preventDefault()
    //   if (!isSigningIn) {
    //     setIsSigningIn(true)
    //     doSignInWithGoogle().catch(err => {
    //       setIsSigningIn(false)
    //     })
    //   }

    }

    return (
      <div className="sm:flex sm:justify-center sm:h-screen sm:items-center mt-6 sm:mt-0">
        {/* {userLoggedIn && (<Navigate to={gotoOverall} replace={true}/>)} */}
        <div className="register bg-offWhite p-2 w-[96%] lg:w-[40%] 2xl:w-[30%]  md:h-[60%] lg:h-fit sm:p-8 rounded-3xl m-auto sm:shadow-lg my-auto">
          <div className="first-row flex justify-between">
            <Toggle />
            <div className="cancel">
              <button onClick={gotoSignUp}>
                <img src={Cancel} alt="" />
              </button>
            </div>
          </div>
          <div className=" py-6">
            <div className="icons flex space-x-6 text-2xl">
              <div className="apple-icon rounded-full w-12 h-12 text-center flex items-center justify-center  ">
                <img src={Apple} alt="" />
              </div>
              <div className="facebook-icon rounded-full w-12 h-12 text-center flex items-center justify-center  ">
                <img src={Facebook} alt="" />
              </div>
              <div className="google-icon rounded-full w-12 h-12 text-center flex items-center justify-center  ">
                <img src={Google} alt="google" />
              </div>
            </div>
          </div>
          <p className="text-[#757475b6]">or login with email</p>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 pt-4"
                >
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    // onChange={(e) => setEmail(e.target.value)}
                    onBlur={handleBlur}
                    value={values.email}
                    className="p-5 border rounded-2xl outline-[#5932EA]"
                    placeholder="Email Address"
                  />
                  {errors.email && touched.email && errors.email}
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      // onChange={(e) => setPassword(e.target.value)}
                      onBlur={handleBlur}
                      value={values.password}
                      className="p-5 border-2 rounded-2xl outline-[#5932EA] border-borderCol w-full "
                      placeholder="Password"
                    />
                    <img
                      src={Password}
                      alt=""
                      className="absolute top-6 right-4 text-2xl/>  "
                    />
                  </div>
                  {errors.password && touched.password && errors.password}
                  <button
                    className="register-btn mt-7 py-5 rounded-2xl text-white font-semibold text-xl w-full text-center bg-[#5932EA]"
                    type="submit"
                    // onClick={gotoOverall}
                    // onSubmit={gotoOverall && handleSubmit}
                  >
                    Login to Dashboard
                  </button>
                </form>
                {/* <p className="text-[#757475b6]"></p> */}
          
              </div>
            )}
          </Formik>

          <div className="terms flex mt-4 mb-20 space-x-5">
            <input
              type="checkbox"
              name=""
              id="custom-checkbox"
              className="w-4 h-4 border border-pink-400 rounded bg-pink-400 focus:ring-3 focus:ring-blue-300 dark:bg-pink-600 dark:border-pink-500 dark:focus:ring-blue-600 dark:ring-offset-pink-800 dark:focus:ring-offset-pink-800"
              required
            />
            <p className="text-sm">Remember me</p>
          </div>
        </div>
      </div>
    );
  };


export default Login;

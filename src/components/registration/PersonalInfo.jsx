import React from "react";
import { useRef, useEffect } from "react";
import Cancel from "../../assets/images/Cancel.svg";
import Warning from "../../assets/images/Warning.svg";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const initialValues = {
  fullName: "",
  phoneNumber: "",
  birthday: "",
};

const validate = (values) => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = "This field is Required";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "This field is Required";
  }
  if (!values.birthday) {
    errors.birthday = "This field is Required";
  }

  return errors;
};


const PersonalInformation = () => {
  const navigate = useNavigate();

  const onSubmit = () => {
    gotoAddress()
  }

  const gotoAddress = () => {
    navigate('/AddAddress')
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const gotoSignUp = () => {
    navigate('/')
  }

//   }, []);

  return (
    <div className="sm:flex sm:justify-center sm:h-screen sm:items-center mt-6 sm:mt-0">
    <div className="register bg-offWhite p-2 w-[90%] lg:w-[40%] sm:h-fit sm:p-12 rounded-3xl sm:shadow-lg m-auto 2xl:w-[30%]">
      <div className="first-row flex justify-between">
        <div className="pages flex space-x-5">
          <h2 className=" font-semibold text-xl sm:text-2xl">
            Personal Information
          </h2>
          <p className="text-[#6BC62D] font-semibold text-xl sm:text-2xl">2 of 3</p>
        </div>
        <div className="cancel">
          <button onClick={gotoSignUp}>
            <img src={Cancel} alt="" className="text-2xl" />
          </button>
        </div>
      </div>
        <form onSubmit={formik.handleSubmit}>
          
      <input
        type="text"
        name="fullName"
        className="p-5 border rounded-2xl outline-none w-full mt-7 sm:mt-10"
            placeholder="Full name"
            value={formik.values.fullName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className="text-red-600 mt-2">{formik.errors.fullName}</div>
          ) : null}
      <div className="gender sm:mt-10 mt-5 flex space-x-4">
        <label htmlFor="gender" className="text-regTextCol">
          Gender:
        </label>
        <div className="flex space-x-2">
          <input type="radio" name="gender" id="male" />
          <p>Male</p>
        </div>
        <div className="flex space-x-2">
          <input type="radio" name="gender" id="female" />
          <p>Female</p>
        </div>
      </div>
      <p className="flex items-center space-x-3 text-[#302e30cb] font-medium mt-7 ">
        <span className="">
          <img src={Warning} alt="" />
        </span>
        <span>The phone number and birthday are only visible to you</span>
      </p>
      <div className="mt-7  flex justify-between gap-4 ">
        <select
          id="custom-select"
          className="rounded-2xl border px-7 text-[#302e30cb] outline-[#5932EA]"
        >
          <option value="Uruguay">+598</option>
          <option value="nigeriaCOde">+234</option>
          <option value=" Bahamas ">+242</option>
          <option value="USA">+1</option>
          <option value="Venezuela ">+58</option>
        </select>
        <input
          type="number"
          name="phoneNumber"
          id="phoneNumber"
          className="border p-5 w-[80%] rounded-2xl outline-[#5932EA] "
              placeholder="Phone number"
              value={formik.values.phoneNumber}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
        />
          </div>
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="text-red-600 mt-2 float-left">
              {formik.errors.phoneNumber}
            </div>
          ) : null}
      <input
            type="date"
            name="birthday"
        className="p-5 border rounded-2xl w-full mt-5 outline-[#5932EA]"
            placeholder="Birthday"
            value={formik.values.birthday}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.birthday && formik.errors.birthday ? (
            <div className="text-red-600 mt-2">{formik.errors.birthday}</div>
          ) : null}
      <p className="text-[#757475b6] text-sm font-medium mt-1">
        Let us know about your birthday so as not to miss a gift
      </p>
      <button
        className="register-btn mt-7 py-5 rounded-2xl text-white font-semibold text-xl w-full text-center bg-[#5932EA]"
        type="submit"
        // onClick={gotoAddress}
      >
        Save Information
      </button>
    </form>
    </div></div>
  );
};

export default PersonalInformation;

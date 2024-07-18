import React from "react";
import Cancel from "../../assets/images/Cancel.svg";
import { useNavigate } from "react-router";
import { useFormik } from "formik";

const initialValues = {
  street: "",
  apartment: "",
  city: "",
  state: "",
  zip: "",
};

const validate = (values) => {
  const errors = {};
  if (!values.street) {
    errors.street = "This field is Required";
  }
  if (!values.city) {
    errors.city = "This field is Required";
  }
  if (!values.state) {
    errors.state = "This field is Required";
  }
  if (!values.zip) {
    errors.zip = "This field is Required";
  }
  if (!values.apartment) {
    errors.apartment = "This field is Required";
  }
  return errors;
};

const AddressTwo = () => {
  const navigate = useNavigate();

  const onSubmit = () => {
    gotoSuccess();
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const gotoSuccess = () => {
    navigate("/Success");
  };

  const gotoAddAddress = () => {
    navigate("/AddAddress");
  };

  return (
    <div className="sm:flex sm:justify-center sm:h-screen sm:items-center mt-6 sm:mt-0">
      <div className="register bg-offWhite p-2 w-[90%] lg:w-[35%] sm:h-fit sm:p-12 rounded-3xl 2xl:w-[30%]  m-auto sm:shadow-lg my-auto">
        <div className="first-row flex justify-between">
          <div className="pages flex space-x-5">
            <h2 className="text-textCol font-semibold text-xl sm:text-2xl">
              Add address
            </h2>
            <p className="text-[#6BC62D] font-semibold sm:text-2xl text-xl">
              3 of 3
            </p>
          </div>
          <div className="cancel">
            <button onClick={gotoAddAddress}>
              <img src={Cancel} className="text-2xl" />
            </button>
          </div>
        </div>
        <form action="address" className="mt-10" onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="street"
            id="street"
            className="p-4 border rounded-2xl outline-none w-full mt-5"
            placeholder="Street address"
            value={formik.values.street}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.street && formik.errors.street ? (
            <div className="text-red-600 mt-2">{formik.errors.street}</div>
          ) : null}

          <input
            type="text"
            name="apartment"
            id="apartment"
            className="p-4 border rounded-2xl outline-none w-full mt-5 custom-flex"
            placeholder="Apartment Optional"
            value={formik.values.apartment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.apartment && formik.errors.apartment ? (
            <div className="text-red-600 mt-2">{formik.errors.apartment}</div>
          ) : null}
          <input
            type="text"
            name="city"
            id="city"
            className="p-4 border rounded-2xl outline-none w-full mt-5"
            placeholder="City "
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.city && formik.errors.city ? (
            <div className="text-red-600 mt-2">{formik.errors.city}</div>
          ) : null}
          <div className="flex space-x-5">
            <div>
              <input
                type="text"
                name="state"
                id="state"
                className="p-4 border rounded-2xl outline-none w-full mt-5"
                placeholder="State"
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.state && formik.errors.state ? (
                <div className="text-red-600 mt-2">{formik.errors.state}</div>
              ) : null}
            </div>
            <div>
              <input
                type="number"
                name="zip"
                id="zip"
                className="p-4 border rounded-2xl outline-none w-full mt-5"
                placeholder="Zip code"
                value={formik.values.zip}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.zip && formik.errors.zip ? (
                <div className="text-red-600 mt-2">{formik.errors.zip}</div>
              ) : null}
            </div>
          </div>
          <button
            className="register-btn mt-32 py-5 rounded-2xl text-white font-semibold text-xl w-full text-center bg-[#5932EA]"
            type="submit"
            // onClick={gotoSuccess}
          >
            Save information
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressTwo;

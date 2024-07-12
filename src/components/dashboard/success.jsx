import React from 'react'
import Success from '../../assets/images/Success.svg'
import Cancel from "../../assets/images/Cancel.svg";


const success = () => {
  


  return (
    <div className="sm:flex sm:justify-center sm:h-screen sm:items-center">
      <div className="register bg-offWhite   lg:w-[35%] sm:h-fit  rounded-3xl 2xl:w-[30%]  m-auto sm:shadow-lg my-auto flex flex-col sm:overflow-hidden relative">
        <img src={Success} alt="" />\
        <img src={Cancel} alt="" className='w-8 absolute top-6 right-6'/>
        <div className='p-2 sm:p-12 flex flex-col justify-between items-center align-middle'>
          <p className='text-[#1A0710] text-6xl font-semibold mt-6 text-center sm:text-left'>You are Successfully registered!</p>
          <button
            className=" mt-24 py-5 rounded-2xl text-white font-semibold text-xl w-full text-center bg-[#5932EA]"
            type="submit"
            // onClick={gotoSuccess}
          >
            Go To Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default success
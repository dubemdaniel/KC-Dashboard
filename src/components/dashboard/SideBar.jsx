import React, { useState } from "react";
import People from "../../assets/images/People.svg";
import '../../index.css';

const Bar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };
    
return (
    <div className="flex flex-col h-screen bg-[white] text-black w-16 hover:w-64 transition-width duration-300  group hover:items-start">
      <ul className="flex flex-col items-start  p-4 space-y-4 group-hover:items-start">
        <li className="flex items-start space-x-4 ">
          <img src={People} />
          <span className="hidden group-hover:inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">Home</span>
        </li>
        <li className="group flex items-start space-x-4">
        <img src={People} />
          <span className="hidden group-hover:inline-block">Profile</span>
        </li>
        <li className="group flex items-start space-x-4">
        <img src={People} />
          <span className=" hidden group-hover:inline-block">Settings</span>
        </li>
      </ul>
    </div>
  );
  
  
    // return (
    //     <div className="sidebar h-screen bg-blue-800 text-white w-16 hover:w-64 transition-width duration-300">
    //     <ul className="flex flex-col items-center hover:items-start p-4 space-y-4">
    //       <li className="flex items-center space-x-4">
    //         <img src={People} />
    //         <span className="sidebar-text hidden hover:block">Home</span>
    //       </li>
    //       <li className="flex items-center space-x-4">
    //       <img src={People} />
    //         <span className="sidebar-text hidden hover:inline">Profile</span>
    //       </li>
    //       <li className="flex items-center space-x-4">
    //       <img src={People} />
    //         <span className="sidebar-text hidden hover:inline">Settings</span>
    //       </li>
    //     </ul>
    //   </div>
    // );
  
  
    
  

//   return (
//     <div className="flex align-middle text-center items-center w-screen relative">
//       <button
//         onClick={toggleSidebar}
//         className="p-2 bg-blue-500 text-white items-center absolute right-5 top-5"
//       >
//         Toggle Sidebar
//       </button>
//       <div
//         className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out`}
//       >
//         <ul>
//           <li className="p-4 border-b border-gray-700 flex align-middle gap-4">
//             <span>
//                           <img src={People} alt="" className="text-white" />
                          
//             </span>{" "}
//             Home
//           </li>
//           <li className="p-4 border-b border-gray-700">About</li>
//           <li className="p-4 border-b border-gray-700">Contact</li>
//         </ul>
//       </div>
//     </div>
//   );
};

export default Bar;

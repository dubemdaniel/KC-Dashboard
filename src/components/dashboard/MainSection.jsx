import { useState } from "react";
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainDashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-screen">
     

      <div className="hidden w-full h-screen px-20 py-10  sm:block bg-slate-400 bg-opacity-15">
        <div className="flex justify-between ">
          <h1 className="text-3xl font-bold">Hello Evano 👋,</h1>

          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="w-full p-3 text-sm text-gray-900 border-0 rounded-lg shadow-lg outline-none  ps-10 bg-gray-50"
              placeholder="Search"
              required
            />
          </div>
        </div>
        <div className="mt-10 ">
          <div className="grid items-center justify-center w-full h-40 grid-cols-1 px-10 bg-white shadow-lg md:grid-cols-2 lg:grid-cols-3 rounded-3xl">
            <div className="flex space-x-6 wrap">
              <div className="image">
                <img src="images/Group 10.png" alt="" />
              </div>
              <div className="text">
                <p className="text-dbCol">Total Customers</p>
                <h2 className="text-4xl font-bold text-textCol">5,423</h2>
                <span className="text-green-500">
                  <FontAwesomeIcon icon={faArrowUp} /> 16%
                  <span className="text-base text-textCol">this month</span>
                </span>
              </div>
              <div className="border-r border-border-dbCol"></div>
            </div>
            <div className="flex space-x-6 wrap">
              <div className="image">
                <img src="images/Group 10 (1).png" alt="" />
              </div>
              <div className="text">
                <p className="text-dbCol">Members</p>
                <h2 className="text-4xl font-bold text-textCol">1,893</h2>
                <span className="text-red-700">
                  <FontAwesomeIcon icon={faArrowDown} /> 16%
                  <span className="text-base text-textCol">this month</span>
                </span>
              </div>
              <div className="border-r border-border-dbCol"></div>
            </div>
            <div className="flex space-x-6 wrap">
              <div className="image">
                <img src="images/Group 10 (2).png" alt="" />
              </div>
              <div className="text">
                <p className="text-dbCol">Active Now</p>
                <h2 className="text-4xl font-bold text-textCol">189</h2>
                <div className="flex -space-x-2">
                  <img src="images/Ellipse 58.png" alt="" />
                  <img src="images/Ellipse 59.png" alt="" />
                  <img src="images/Ellipse 60.png" alt="" />
                  <img src="images/Ellipse 61.png" alt="" />
                  <img src="images/Ellipse 62.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-screen mt-10 bg-white shadow-lg rounded-3xl">
          <div className="flex flex-col justify-between p-10 sm:flex-row">
            <div className="">
              <h1 className="text-3xl font-bold">All Customers</h1>
              <h2 className="text-base text-activeCol">Active Members</h2>
            </div>
            <div className="flex space-x-5">
              <label
                htmlFor="default-search"
                className="mb-5 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                  <svg
                    className="w-4 h-4 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="w-full p-3 text-sm text-gray-900 border-0 rounded-lg shadow-lg outline-none  ps-10 bg-gray-50"
                  placeholder="Search"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="flex flex-col items-center px-2 py-1 border-0 rounded-lg shadow-lg sm:flex-row bg-gray-50">
                  <p className="text-sm text-gray-500">Short by:</p>

                  <select
                    name="newest"
                    id="newest"
                    className="text-sm font-bold border-0 outline-none bg-gray-50"
                  >
                    <option value="New">Newest</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="h-screen ">
            <div className="flex flex-col justify-between px-10 pb-2 font-semibold border-b sm:flex-row ">
              <h2 className="text-dbCol ">Customer Name</h2>
              <h2 className="text-dbCol ">Company</h2>
              <h2 className="text-dbCol">Phone Number</h2>
              <h2 className="text-dbCol">Email</h2>
              <h2 className="text-dbCol">Country</h2>
              <h2 className="text-dbCol">Status</h2>
            </div>
            <div className="flex flex-col items-center justify-between px-10 py-2 pb-4 font-semibold border-b sm:flex-row">
              <p>Jane Cooper</p>
              <p>Microsoft</p>
              <p>(255) 555-0118</p>
              <p>jane@microsoft.com</p>
              <p>United States</p>
              <button className="px-6 py-2 border rounded-md bg-backgroundActiveGreen text-activeGreen border-activeGreen">
                Active
              </button>
            </div>
            <div className="flex flex-col items-center justify-between px-10 py-2 pb-4 text-base font-semibold border-b sm:flex-row">
              <p>Floyd Miles</p>
              <p>Yahoo</p>
              <p>(205) 555-0100</p>
              <p>floyd@yahoo.com</p>
              <p>Kiribati</p>
              <button className="px-4 py-2 border rounded-md bg-backgroundActiveRed text-activeRed border-activeRed">
                Inactive
              </button>
            </div>
            <div className="flex flex-col items-center justify-between px-10 py-2 pb-2 font-semibold border-b sm:flex-row">
              <p>Ronald Richards</p>
              <p>Adobe</p>
              <p>(302) 555-0107</p>
              <p>ronald@adobe.com</p>
              <p>Israel</p>
              <button className="px-4 py-2 border rounded-md bg-backgroundActiveRed text-activeRed border-activeRed">
                Inactive
              </button>
            </div>
            <div className="flex flex-col items-center justify-between px-10 py-2 pb-2 font-semibold border-b sm:flex-row">
              <p>Marvin McKinney</p>
              <p>Tesla</p>
              <p>(252) 555-0126</p>
              <p>marvin@tesla.com</p>
              <p>Iran</p>
              <button className="px-6 py-2 border rounded-md bg-backgroundActiveGreen text-activeGreen border-activeGreen">
                Active
              </button>
            </div>
            <div className="flex flex-col items-center justify-between px-10 py-2 pb-2 font-semibold border-b sm:flex-row">
              <p>Jerome Bell</p>
              <p>Google</p>
              <p>(629) 555-0129</p>
              <p>jerome@google.com</p>
              <p>Reunion</p>
              <button className="px-6 py-2 border rounded-md bg-backgroundActiveGreen text-activeGreen border-activeGreen">
                Active
              </button>
            </div>
            <div className="flex flex-col items-center justify-between px-10 py-2 pb-2 font-semibold border-b sm:flex-row">
              <p>Kathryn Murphy</p>
              <p>Microsoft</p>
              <p>(406) 555-0120</p>
              <p>kathryn@microsoft.com</p>
              <p>Curacao</p>
              <button className="px-6 py-2 border rounded-md bg-backgroundActiveGreen text-activeGreen border-activeGreen">
                Active
              </button>
            </div>
            <div className="flex flex-col items-center justify-between px-10 py-2 font-semibold border-b sm:flex-row">
              <p>Jacob Jones</p>
              <p>Yahoo</p>
              <p>(208) 555-0112</p>
              <p>jacob@yahoo.com</p>
              <p>Brazil</p>
              <button className="px-6 py-2 border rounded-md bg-backgroundActiveGreen text-activeGreen border-activeGreen">
                Active
              </button>
            </div>
            <div className="flex flex-col items-center justify-between px-10 py-2 font-semibold sm:flex-row ">
              <p>Kristin Watson </p>
              <p>Facebook</p>
              <p>(704) 555-0127</p>
              <p>kristin@facebook.com</p>
              <p>Aland Islands</p>
              <button className="px-4 py-2 border rounded-md bg-backgroundActiveRed text-activeRed border-activeRed">
                Inactive
              </button>
            </div>
            <div className="flex justify-between px-10 mt-5">
              <p className="text-base text-dbCol">
                Showing data 1 to 8 of 256k entries
              </p>

              <nav aria-label="Page navigation example">
                <ul className="flex items-center h-8 space-x-3 text-sm">
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 ms-0 border-e-0 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="w-2.5 h-2.5 rtl:rotate-180 rounded-md"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 1 1 5l4 4"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center h-8 px-3 leading-tight text-white border border-gray-300 rounded-md bg-borderCol hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      className="z-10 flex items-center justify-center h-8 px-3 leading-tight border rounded-md text-dbCol hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      4
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      5
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-md rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="w-2.5 h-2.5 rtl:rotate-180 rounded-md"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;

import React from "react";
import { useState } from "react";
import { AiOutli, IoIosArrowBack } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { GoDashboard } from "react-icons/go";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";


function Sidebar({ showSidebar, setShowSidebar }) {
  const [showdrop, setShowdrop] = useState(false);

  return (
    <div className="">
      <aside className="w-full h-[100vh]" aria-label="Sidebar">
        <div className="h-full overflow-y-auto py-5 px-5 bg-white  dark:bg-gray-600">
          <div classNameName="flex items-center gap-2">
            <a
              href="/"
              className="flex items-center pl-2.5 mb-5"
            >
              <img
                src="./image/blue black landscape.png"
                className="mr-3 h-6 sm:h-16"
                alt=""
              />
            </a>
            <IoIosArrowBack
              className={`flex ${
                showSidebar && "md:hidden"
              } cursor-pointer  text-red-600`}
              // color='black'
              size={30}
              onClick={() => setShowSidebar(false)}
            />
          </div>
          <ul className="space-y-2">
            <li>
              <a
                href="./Dashboard"
                className=" flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-lg "
              >
                <GoDashboard />
                <span className="ml-3">Progress</span>
              </a>
            </li>
            

            <li>
              <button
                type="button"
                className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 hover:shadow-lg"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={() => setShowdrop((prev) => !prev)}
              >
                <MdOutlineHistoryEdu />
                <span
                  className="flex-1 ml-3 text-left whitespace-nowrap"
                  sidebar-toggle-item=""
                >
                  History
                </span>
                <svg
                  sidebar-toggle-item=""
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns=""
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={`${!showdrop && "hidden"} py-2 space-y-2 `}
              >
                <li>
                  <a
                    href="/add"
                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 hover:shadow-lg"
                  >
                    Add Journey
                  </a>
                </li>
                <li>
                  <a
                    href="appointmentlist"
                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 hover:shadow-lg "
                  >
                    Last Week
                  </a>
                </li>
                <li>
                  <a
                    href="appointmentlist"
                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 hover:shadow-lg "
                  >
                    Last Month
                  </a>
                </li>
              </ul>
            </li>
            
            <li>
              <a
                href="./user"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-lg"
              >
                <AiOutlineSetting />
                <span className="flex-1 ml-3 whitespace-nowrap">Setting</span>
              </a>
            </li>
            <li>
              <a
                href="./report"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-lg"
              >
                <FaAward />
                <span className="flex-1 ml-3 whitespace-nowrap">About ss</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-lg"
              >
                <FiLogOut />
                <span className="flex-1 ml-3 whitespace-nowrap">Log out</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;

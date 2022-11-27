import React, { useState } from "react";
import Serach from "./Serach";
import { BsBell } from "react-icons/bs";
import useOutsideAlerter from "../../../Hook/useOutSideHandler";
import { useRef } from "react";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

function Navbar({ showSidebar, setShowSidebar }) {
  const [show, setShow] = useState(false);
  const [shownotf, setShownotf] = useState(false);
  const ref = useRef(null);
  const profRef = useRef(null);
  useOutsideAlerter(ref, setShownotf);
  useOutsideAlerter(profRef, setShow);

  return (
    <div className="flex justify-between items-center px-6  h-full  ">
      <div className="flex gap-3 items-center">
        <AiOutlineMenuUnfold
          className={`flex ${showSidebar && "md:hidden"} cursor-pointer`}
          color="black"
          size={30}
          onClick={() => setShowSidebar(true)}
        />
        <AiOutlineMenuFold
          className={`hidden md:flex cursor-pointer ${
            !showSidebar && "md:hidden"
          }`}
          color="black"
          size={30}
          onClick={() => setShowSidebar(false)}
        />
        <Serach />
      </div>
      <div className="flex gap-5 items-center">
        <div className="relative">
          <BsBell
            size="20"
            className=" cursor-pointer"
            onClick={() => setShownotf((prev) => !prev)}
          />

          <div
            ref={ref}
            id="userDropdown"
            className={`${
              !shownotf && "hidden"
            } w-44 z-40 absolute top-o right-[60%] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 block `}
            data-popper-reference-hidden=""
            data-popper-escaped=""
            data-popper-placement="bottom-start"
          >
            <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
              <div>Abel Yitages</div>
              <div className="font-medium truncate">abelyitages10@gmail.com</div>
            </div>
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="avatarButton"
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Report
                </a>
              </li>
            </ul>
            <div className="py-1">
              <a
                href="#"
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Log out
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            id="avatarButton"
            type="button"
            data-dropdown-toggle="userDropdown"
            data-dropdown-placement="bottom-start"
            className="w-10 h-10 rounded-full cursor-pointer"
            src="./image/abela-photo.jpg"
            alt="User dropdown"
            onClick={() => setShow((prev) => !prev)}
          />

          <div
            ref={profRef}
            id="userDropdown"
            className={`${
              !show && "hidden"
            } z-10 w-44 absolute top-o right-[60%] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 block `}
            data-popper-reference-hidden=""
            data-popper-escaped=""
            data-popper-placement="bottom-start"
          >
            <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
              <div>Abel Yitages</div>
              <div className="font-medium truncate">abelyitages10@gmail.com</div>
            </div>
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="avatarButton"
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Report
                </a>
              </li>
            </ul>
            <div className="py-1">
              <a
                href="#"
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Log out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

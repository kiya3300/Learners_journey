import React from "react";
import { useNavigate } from "react-router-dom";

function Changepsd() {
  const navigate = useNavigate();

  function handleclick() {
    navigate("/Login");
  }
  return (
    <div>
      <div className="">
        <div className="min-h-screen  sm:flex sm:flex-row  justify-center bg-gray-600 p-5 ">
          <div className="flex-col flex  self-center lg:p-10 sm:max-w-5xl xl:max-w-lg  z-10">
            <div className="self-start hidden lg:flex flex-col  text-white">
              <div className="flex items-center mb-5">
                <img src="./image/lan.png" className="w-60" />
                {/* <h3 className="text-3xl font-semibold ml-2">Herani</h3> */}
              </div>
              <h1 className="my-3 font-semibold text-2xl ">
                Welcome to our
                <br /> Learners' Journey{" "}
              </h1>
              <img src="./image/lo.svg" className="w-200 " />
              {/* <p className="pr-3 text-sm opacity-75">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups
              </p> */}
            </div>
          </div>
          <div className="flex justify-center self-center  z-10">
            <div className="p-12 bg-gray-800 mx-auto rounded-3xl w-96 ">
              <div className="mb-7">
                <h3 className="font-semibold text-2xl text-gray-100">
                  New Password{" "}
                </h3>
              </div>
              <div className="space-y-6">
                <div className="">
                  <input
                    className=" w-full text-sm text-white px-4 py-3 bg-gray-900 border  border-gray-700 rounded-lg focus:outline-none focus:border-purple-400"
                    type="password"
                    placeholder="Password"
                  />
                </div>

                <div className="relative" x-data="{ show: true }">
                  <input
                    placeholder="confirm Password"
                    type="password"
                    className="text-sm text-gray-200 px-4 py-3 rounded-lg w-full bg-gray-900 border border-gray-700 focus:outline-none focus:border-purple-400"
                  />

                  <div className="">
                    <svg
                      className="h-4 text-purple-500"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewbox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
                    onClick={handleclick}
                  >
                    Continue
                  </button>
                </div>

                <div className="flex justify-center gap-5 w-full "></div>
              </div>
              <div className="mt-7 text-center text-gray-400 text-xs"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Changepsd;

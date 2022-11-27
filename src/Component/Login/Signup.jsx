import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";



function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  console.log(name, email, password);
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://web-02.kalabsisay.tech/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify({
        
          user_name: name,
          email: email,
          password: password
        
      }),
      }).then(() => {
        console.log("posted");
      });
    };

 
  function handleclick() {
    Navigate("/dash")
  }

  return (
    <div className="">
      <div className="min-h-screen  sm:flex sm:flex-row  justify-center bg-white p-5 ">
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
              print, and publishing industries for previewing layouts and visual
              mockups
            </p> */}
          </div>
        </div>
        <div className="flex justify-center self-center  z-10">
          <div className="p-12 bg-gray-800 mx-auto rounded-3xl w-96 ">
            <div className="mb-7">
              <h3 className="font-semibold text-2xl text-gray-100">Sign Up </h3>
              <p className="text-gray-500">
                have an account?{" "}
                <a
                  href="#"
                  className="text-sm text-purple-700 hover:text-purple-600"
                  onClick={handleclick}
                >
                  Sign In
                </a>
              </p>
            </div>
            <div className="space-y-6">
              <form onSubmit={handleSubmit}>
                <div className="">
                  <input
                    className=" w-full text-sm text-white px-4 py-3 bg-gray-900 border  border-gray-700 rounded-lg focus:outline-none focus:border-purple-400"
                    type="name"value={name} onChange={(e)=>{setName(e.target.value)}}
                    id="name"
                    placeholder="User name"
                  />

                  <input
                    className=" w-full text-sm text-white px-4 py-3 bg-gray-900 border  border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 mt-4 mb-4"
                    type="text"value={email} onChange={(e)=>{setEmail(e.target.value)}}
                    id="email"
                    placeholder="Email"
                  />
                </div>

                <div className="relative" x-data="{ show: true }">
                  <input
                    placeholder="Password"
                    type="password"value={password} onChange={(e)=>{setPassword(e.target.value)}}
                    id="password"
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

                <div className=" items-center justify-between"></div>
                <div>
                  <button
                    type="submit"
                    id="submit-btn"
                    className="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
                  >
                    Sign up
                  </button>
                </div>
              </form>
              <div className="flex items-center justify-center space-x-2 my-5">
                <span className="h-px w-16 bg-gray-700"></span>
                <span className="text-gray-400 font-normal">or</span>
                <span className="h-px w-16 bg-gray-700"></span>
              </div>
              <div className="flex justify-center gap-5 w-full ">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-700 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-300 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500"
                >
                  <svg
                    className="w-4 mr-2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#EA4335"
                      d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"
                    />
                    <path
                      fill="#34A853"
                      d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"
                    />
                    <path
                      fill="#4A90E2"
                      d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"
                    />
                  </svg>
                  <svg
                    className="w-4"
                    fill="#fff"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                  <span>Google</span>
                </button>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-700 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-300 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500 px-"
                >
                  <svg
                    className="w-4"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M9.945 22v-8.834H7V9.485h2.945V6.54c0-3.043 1.926-4.54 4.64-4.54 1.3 0 2.418.097 2.744.14v3.18h-1.883c-1.476 0-1.82.703-1.82 1.732v2.433h3.68l-.736 3.68h-2.944L13.685 22"
                    ></path>
                  </svg>
                  <span>Facebook</span>
                </button>
              </div>
            </div>
            <div className="mt-7 text-center text-gray-400 text-xs"></div>
          </div>
        </div>
      </div>
    </div>
    //  <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js"></script>
  );
}
export default Signup;

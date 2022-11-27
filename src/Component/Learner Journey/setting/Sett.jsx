import React from "react";
import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Sett() {
  const [fname, setFname] = useState();
  const [middlename, setMiddlename] = useState();
  const [dis, setDis] = useState();
  const [location, setLocation] = useState();
  const [web, setWeb] = useState();
  const [home, setHome] = useState();
  const [pbonenum, setPbonenum] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/patient", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({
        firstName: fname,
        middleName: middlename,
        lastName: dis,
        mothersFullName: location,
        bloodType: home,
        baptistName: "ato",
        phoneNumber: "+251912466771",
      }),
    }).then(() => {
      console.log("posted");
    });
  };
  return (
    <div>
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
          <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
            <div className="grid  gap-8 grid-cols-1">
              <div className="flex flex-col ">
                <div className="flex flex-col sm:flex-row items-center">
                  <h2 className="font-semibold text-lg mr-auto">User Info</h2>
                  <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mt-5">
                    <div className="form">
                      <div className="md:space-y-2 mb-3">
                        <label className="text-xs font-semibold text-gray-600 py-2">
                          User photo
                          <abbr className="hidden" title="required">
                            *
                          </abbr>
                        </label>
                        <div className="flex items-center py-6">
                          <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                            <img
                              className="w-12 h-12 mr-4 object-cover"
                              src="./image/my.jpg"
                              alt="Avatar Upload"
                            />
                          </div>
                          <label className="cursor-pointer ">
                            <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">
                              Browse
                            </span>
                            <input type="file" className="hidden" />
                            {/* :multiple="multiple" :accept="accept" */}
                          </label>
                        </div>
                      </div>
                      <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                        <div className="mb-3 space-y-2 w-full text-xs">
                          <label className="font-semibold text-gray-600 py-2">
                            First Name <abbr title="required">*</abbr>
                          </label>
                          <input
                            placeholder="dawit"
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                            required="required"
                            type="text"
                            name="integration[shop_name]"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                          />
                          <p className="text-red text-xs hidden">
                            Please fill out this field.
                          </p>
                        </div>
                        <div className="mb-3 space-y-2 w-full text-xs">
                          <label className="font-semibold text-gray-600 py-2">
                            Father name
                          </label>
                          <input
                            placeholder="mezgebu"
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                            required="required"
                            type="text"
                            name="integration[shop_name]"
                            value={middlename}
                            onChange={(e) => setMiddlename(e.target.value)}
                          />
                          <p className="text-red text-xs hidden">
                            Please fill out this field.
                          </p>
                        </div>
                      </div>
                      <div className="mb-3 space-y-2 w-full text-xs">
                        <label className=" font-semibold text-gray-600 py-2">
                          Phone Number
                        </label>
                        <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                          <div className="flex">
                            <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-gray-500 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-gray-700 justify-center rounded-lg text-white">
                              <BsFillTelephoneFill />
                            </span>
                          </div>
                          <input
                            type="tel"
                            className="flex-shrink flex-grow flex-auto leading-normal w-px  border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                            placeholder="098765421"
                            value={pbonenum}
                            onChange={(e) => setPbonenum(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                        <div className="w-full flex flex-col mb-3">
                          <label className="font-semibold text-gray-600 py-2">
                            Gender
                          </label>
                          <select
                            className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                            required="required"
                            name="integration[city_id]"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                          >
                            <option value="a"></option>
                            <option value="ab">Male</option>
                            <option value="cb">Female</option>
                          </select>
                          <p
                            className="text-sm text-red-500 hidden mt-3"
                            id="error"
                          >
                            Please fill out this field.
                          </p>
                        </div>
                        <div className="w-full flex flex-col mb-3">
                          <label className="font-semibold text-gray-600 py-2">
                            Location<abbr title="required">*</abbr>
                          </label>
                          <select
                            className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                            required="required"
                            name="integration[city_id]"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                          >
                            <option value="a"></option>
                            <option value="ab">Addis Ababa</option>
                            <option value="cb">Gonder</option>
                            <option value="cd">Adama</option>
                          </select>
                          <p
                            className="text-sm text-red-500 hidden mt-3"
                            id="error"
                          >
                            Please fill out this field.
                          </p>
                        </div>
                      </div>
                      <div className="mb-3 space-y-2 w-full text-xs">
                        <label className=" font-semibold text-gray-600 py-2">
                          Email
                        </label>
                        <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                          <div className="flex">
                            <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-gray-500 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-gray-700 justify-center rounded-lg text-white">
                              <MdEmail />
                            </span>
                          </div>
                          <input
                            type="text"
                            className="flex-shrink flex-grow flex-auto leading-normal w-px  border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                            placeholder="dawit22@gmail.com"
                            value={web}
                            onChange={(e) => setWeb(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                        <div className="w-full flex flex-col mb-3">
                          <label className="font-semibold text-gray-600 py-2">
                            Woreda
                          </label>
                          <input
                            placeholder="Address"
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                            type="text"
                            name="integration[street_address]"
                            value={home}
                            onChange={(e) => setHome(e.target.value)}
                          />
                        </div>
                        <div className="w-full flex flex-col mb-3">
                          <label className="font-semibold text-gray-600 py-2">
                            Home Address
                          </label>
                          <input
                            placeholder="Address"
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                            type="text"
                            name="integration[street_address]"
                            value={home}
                            onChange={(e) => setHome(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* <div className="flex-auto w-full mb-1 text-xs space-y-2">
                        <label className="font-semibold text-gray-600 py-2">
                          Description
                        </label>
                        <textarea
                          required=""
                          name="message"
                          className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                          placeholder="Enter your comapny info"
                          spellcheck="false"
                          value={dis}
                          onChange={(e) => setDis(e.target.value)}
                        ></textarea>
                      </div> */}
                      {/* <p className="text-xs text-red-500 text-right my-3">Required fields are marked with an
									asterisk <abbr title="Required field">*</abbr></p> */}
                      <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                        <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                          {" "}
                          Cancel{" "}
                        </button>
                        <button className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
          <div className="relative w-full max-w-2xl h-full md:h-auto">
            <form
              action="#"
              className="relative bg-white rounded-lg shadow-lg dark:bg-gray-700"
            >
              <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Edit user
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="editUserModal"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="first-name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Bonnie"
                      required=""
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Green"
                      required=""
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="example@company.com"
                      required=""
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="phone-number"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="phone-number"
                      id="phone-number"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="e.g. +(12)3456 789"
                      required=""
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="department"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Department
                    </label>
                    <input
                      type="text"
                      name="department"
                      id="department"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Development"
                      required=""
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="company"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Company
                    </label>
                    <input
                      type="number"
                      name="company"
                      id="company"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="123456"
                      required=""
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="current-password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Current Password
                    </label>
                    <input
                      type="password"
                      name="current-password"
                      id="current-password"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="••••••••"
                      required=""
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="new-password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      name="new-password"
                      id="new-password"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="••••••••"
                      required=""
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Save all
                </button>
              </div>
            </form>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Sett;

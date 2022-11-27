import React from "react";
import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Usermgt() {
  const [fname, setFname] = useState();
  const [middlename, setMiddlename] = useState();
  const [lastName, setLastName] = useState();
  const [position, setPosition] = useState();
  const [dis, setDis] = useState();
  const [location, setLocation] = useState();
  const [web, setWeb] = useState();
  const [home, setHome] = useState();
  const [pbonenum, setPbonenum] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://web-02.kalabsisay.tech/api/users/", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({
        
          "email": "Abel",
          "password": "Password",
          "user_name": "abelyitages10@gmail.com"

       // user_name: fname,
      //  password: middlename,
      //  email: dis,
       // mothersFullName: location,
       // bloodType: home,
      //  baptistName: "ato",
      //  phoneNumber: "+251912466771",
      }),
    }).then(() => {
      console.log("posted");
    });
  };
  return (
    <div>
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 justify-center px-8 pt-8 pl-96">
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2 ">
          <div>
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
                            <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-gray-500 hover:bg-gray-800 hover:shadow-lg">
                              Upload
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
                            Middle Name <abbr title="required">*</abbr>
                          </label>
                          <input
                            placeholder="dawit"
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
                        <div className="mb-3 space-y-2 w-full text-xs">
                          <label className="font-semibold text-gray-600 py-2">
                            Last name
                          </label>
                          <input
                            placeholder="mezgebu"
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                            required="required"
                            type="text"
                            name="integration[shop_name]"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
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
                        <div className="w-full flex flex-col mb-3">
                          <label className="font-semibold text-gray-600 py-2">
                            Position<abbr title="required">*</abbr>
                          </label>
                          <select
                            className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                            required="required"
                            name="integration[city_id]"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                          >
                            <option value="a"></option>
                            <option value="ab">Doctor</option>
                            <option value="cb">Nurse</option>
                            <option value="cd">Data Center</option>
                            <option value="cd">Finance </option>
                            <option value="cd">Pharmacist </option>
                            <option value="cd">Labratory Specialist </option>
                          </select>
                          <p
                            className="text-sm text-red-500 hidden mt-3"
                            id="error"
                          >
                            Please fill out this field.
                          </p>
                        </div>
                      </div>

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
      </div>
    </div>
  );
}

export default Usermgt;

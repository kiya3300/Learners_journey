import React from "react";
import { useRef } from "react";
import { useState } from "react";
import useOutsideAlerter from "../../../../../Hook/useOutSideHandler";
import Menu from "./Menu";

function Newrecor() {
  const [fnames, setFnames] = useState();
  const [drop, setDrop] = useState(false);
  const ref = useRef(null);
  const [list, setList] = useState(false);
  const [result, setResult] = useState(null);
  useOutsideAlerter(ref, setDrop);

  const [options, setOptions] = useState("COT-D");
  const [test, setTest] = useState();
  const [description, setDescription] = useState();
  const [addform, setAddform] = useState(false);
  const [ pnumer, setPnumber] = useState();
  const [ room, setRoom] = useState();
  const [ diag, setDiag] = useState();
  const [ des, setDes] = useState();
  const [ date, setDate] = useState();
  const [ drname, setDrname] = useState();
  const [ dates, setDates] = useState();


  const [btn, setBtn] = useState();


  

  const handleAddform = () => {
    setAddform();
};

  const handleSubmit = (e) => {
    e.preventDefault();

   
    fetch("http://localhost:4000/profile/new", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({
        firstName: fnames,
        middleName: fnames,
        mothersFullName: fnames,
        gender: 0,
        marriageStatus: 0,
        title: 4,
        phoneNumber: "+251987654321",
      }),
    }).then(() => {
      console.log("posted");
    });
  };

  

 return (
    <div className="px-8 pt-8">
      
      <Menu />
      
      
      <div className="">
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
        <div className="mt-5 sm:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="mt-5 md:col-span-2 md:mt-0">
            
              <form onSubmit={handleSubmit}>
                <div class="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                  <div class="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                  <div className=" sm:mt-0 px-8">
      <div className="md:col-span-1 mb-2">
        <div className="px-4 sm:px-0 mb-4">
          <h3 className="text-lg font-medium leading-6 text-gray-100">
            Description Form
          </h3>
        </div>
      </div>
      <div className="md:grid md:grid-cols-1 md:gap-6">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form onSubmit={handleSubmit}>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-9 gap-6">
                  <div className="col-span-10 sm:col-span-4">
                    <label
                      for="last_name"
                      className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-800"
                    >
                      Title
                    </label>
                    <input
                      type="phone"
                      id="last_name"
                      className="w-full text-gray-700 text-sm  px-4 py-3  shadow-md hover:shadow-xl  border-gray-700 rounded-lg focus:outline-none focus:border-purple-400"
                      placeholder="Sport, Reading, Music, ..."
                      required
                      value={pnumer}
                      onChange={(e) => setPnumber(e.target.value)}
                    />
                  </div>
                  <br/>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="countries"
                      class="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-800"
                    >
                      Description
                    </label>
                    <textarea
                      type="text"
                      id="last_name"
                      class="w-full text-gray-700 text-sm  px-4 py-3  shadow-md hover:shadow-xl  border-gray-700 rounded-lg focus:outline-none focus:border-purple-400"
                      placeholder="To day is ..."
                      required
                      value={des}
                      onChange={(e) => setDes(e.target.value)}
                    />
                  </div>

                </div>
              </div>
              
            </div>
          </form>
        </div>
      </div>
    </div>
                    <label for="comment" class="sr-only">
                      Your Journey ... ...
                    </label>
                    <textarea
                      id="comment"
                      rows="4"
                      className="mt-5 w-full text-gray-700 text-sm  px-4 py-3  shadow-md hover:shadow-xl  border-gray-700 rounded-lg focus:outline-none focus:border-purple-400"
                      placeholder="Write Your Journey ..."
                      name="history"
                      required=""
                      value={fnames}
                      onChange={(e) => setFnames(e.target.value)}
                    ></textarea>
                    <div className=" px-4 py-3 text-right sm:px-6">
                      <button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
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
  );
}

export default Newrecor;

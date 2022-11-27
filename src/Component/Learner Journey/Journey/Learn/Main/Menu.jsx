import React, { useState } from "react";
import { useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useOutsideAlerter from "../../../../../Hook/useOutSideHandler";

function Menu() {
  const [record, setRecord] = useState(false);
  const [history, setHistory] = useState(false);
  const [investigation, setInvestigation] = useState(false);
  const [drugorder, setDrugorder] = useState(false);
  const ref = useRef(null);
  const proRef = useRef(null);
  const investRef = useRef(null);
  useOutsideAlerter(ref, setRecord);
  useOutsideAlerter(proRef, setHistory);
  useOutsideAlerter(investRef, setInvestigation);

  const Navigate = useNavigate();

  function medicalrecord() {
    Navigate("/add");
  }

  function invest() {
    Navigate("/investigation");
  }

  function newrecord() {
    Navigate("/newrecord");
  }

  function drugor() {
    Navigate("/drugorder");
  }

  function appoint() {
    Navigate("/appointment");
  }

  return (
    <div>
      <div className="overflow-x-auto  shadow-md sm:rounded-lg mt-4 mb-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
          <tbody>
            <tr className="text-white bg-slate-800 border-b dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600 ">
              <td className="p-4 w-4"></td>
              <th
                scope="row"
                className="py-4 px-6 font-medium whitespace-nowrap dark:text-white"
              >
                User name
              </th>
              <td className="py-4 px-6">1219</td>
              <td className="py-4 px-6">0987654321</td>
              <td className="py-4 px-6">IPD</td>
              <td className="py-4 px-6">
                <button className="font-medium text-white dark:text-blue-500 hover:underline">
                  Clear
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4"></td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button
                  className="text-gray-900 dark:text-white hover:bg-slate-800 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded"
                  aria-current="page"
                  onClick={medicalrecord}
                >
                 Journey Record List
                </button>
              </th>
              <br/>
              <br/><br/>
              <td className="py-4 px-6">
                <button
                  className="text-gray-900 dark:text-white hover:bg-slate-800 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  onClick={newrecord}
                >
                  New Record form
                </button>
              </td>
              <td className="py-4 px-6"></td>
              
              <td className="py-4 px-6">
                <button
                  className="text-gray-900 dark:text-white hover:bg-slate-800 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  onClick={appoint}
                >
                  Appointment form
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Menu;

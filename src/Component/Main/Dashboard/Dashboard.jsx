import React from "react";
import ReactPlayer from 'react-player'

function Dashboard() {

  return (
    <div>
      <div className="mb-4">Progress</div>
      
      
      <div className="mb-3 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="bg-gray-600 shadow hover:shadow-2xl rounded-lg p-4 sm:p-6 xl:p-8 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl sm:text-3xl leading-none font-bold text-white">
                Login: 4 <br/>
                 20Min
              </span>
              <h3 className="text-base font-normal text-gray-100">
                Today Progress
              </h3>
            </div>
            <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
              90.6%
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns=""
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-gray-600 shadow hover:shadow-2xl rounded-lg p-4 sm:p-6 xl:p-8 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl sm:text-3xl leading-none font-bold text-white">
                Login: 35 <br/>
                 2H : 20Min
              </span>
              <h3 className="text-base font-normal text-gray-200">
              Weekly Progress
              </h3>
            </div>
            <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
              90.9%
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-gray-600 shadow hover:shadow-2xl rounded-lg p-4 sm:p-6 xl:p-8 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl sm:text-3xl leading-none font-bold text-white">
                Login: 150 <br/>
                 9H : 20Min
              </span>
              <h3 className="text-base font-normal text-gray-200">
                Monthly Progress
              </h3>
            </div>
            <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
              89.1%
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border py-2 graph-before-activity-overview">
      <div className="js-calendar-graph mx-md-2 mx-3 d-flex flex-column flex-items-end flex-xl-items-center overflow-hidden pt-1 is-graph-loading graph-canvas ContributionCalendar height-full text-center" data-graph-url="/users/kiya3300/contributions" data-url="/kiya3300" data-from="2021-11-21 00:00:00 +0300" data-to="2022-11-24 23:59:59 +0300" data-org="">
        

<svg width="823" height="128" className="js-calendar-graph-svg">
  <g transform="translate(15, 20)" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:99829666,&quot;target&quot;:&quot;CONTRIBUTION_CALENDAR_SQUARE&quot;,&quot;user_id&quot;:99829666,&quot;originating_url&quot;:&quot;&quot;}}" data-hydro-click-hmac="ca643e800841c55e7bb37d31809725f180a362bd19e428866cde518d901c4499">
      <g transform="translate(0, 0)">
          <rect width="11" height="11" x="16" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-11-21" data-level="0"></rect>
          <rect width="11" height="11" x="16" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-11-22" data-level="0"></rect>
          <rect width="11" height="11" x="16" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-11-23" data-level="0"></rect>
          <rect width="11" height="11" x="16" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-11-24" data-level="0"></rect>
          <rect width="11" height="11" x="16" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-11-25" data-level="0"></rect>
          <rect width="11" height="11" x="16" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-11-26" data-level="0"></rect>
          <rect width="11" height="11" x="16" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-11-27" data-level="0"></rect>
      </g>
      <g transform="translate(16, 0)">
          <rect width="11" height="11" x="15" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-11-28" data-level="0"></rect>
          <rect width="11" height="11" x="15" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-11-29" data-level="0"></rect>
          <rect width="11" height="11" x="15" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-11-30" data-level="0"></rect>
          <rect width="11" height="11" x="15" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-01" data-level="0"></rect>
          <rect width="11" height="11" x="15" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-02" data-level="0"></rect>
          <rect width="11" height="11" x="15" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-03" data-level="0"></rect>
          <rect width="11" height="11" x="15" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-04" data-level="0"></rect>
      </g>
      <g transform="translate(32, 0)">
          <rect width="11" height="11" x="14" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-05" data-level="0"></rect>
          <rect width="11" height="11" x="14" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-06" data-level="0"></rect>
          <rect width="11" height="11" x="14" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-07" data-level="0"></rect>
          <rect width="11" height="11" x="14" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-08" data-level="0"></rect>
          <rect width="11" height="11" x="14" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-09" data-level="0"></rect>
          <rect width="11" height="11" x="14" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-10" data-level="0"></rect>
          <rect width="11" height="11" x="14" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-11" data-level="0"></rect>
      </g>
      <g transform="translate(48, 0)">
          <rect width="11" height="11" x="13" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-12" data-level="0"></rect>
          <rect width="11" height="11" x="13" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-13" data-level="0"></rect>
          <rect width="11" height="11" x="13" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-14" data-level="0"></rect>
          <rect width="11" height="11" x="13" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-15" data-level="0"></rect>
          <rect width="11" height="11" x="13" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-16" data-level="0"></rect>
          <rect width="11" height="11" x="13" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-17" data-level="0"></rect>
          <rect width="11" height="11" x="13" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-18" data-level="0"></rect>
      </g>
      <g transform="translate(64, 0)">
          <rect width="11" height="11" x="12" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-19" data-level="0"></rect>
          <rect width="11" height="11" x="12" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-20" data-level="0"></rect>
          <rect width="11" height="11" x="12" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-21" data-level="0"></rect>
          <rect width="11" height="11" x="12" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-22" data-level="0"></rect>
          <rect width="11" height="11" x="12" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-23" data-level="0"></rect>
          <rect width="11" height="11" x="12" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-24" data-level="0"></rect>
          <rect width="11" height="11" x="12" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-25" data-level="0"></rect>
      </g>
      <g transform="translate(80, 0)">
          <rect width="11" height="11" x="11" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-26" data-level="0"></rect>
          <rect width="11" height="11" x="11" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-27" data-level="0"></rect>
          <rect width="11" height="11" x="11" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-28" data-level="0"></rect>
          <rect width="11" height="11" x="11" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-29" data-level="0"></rect>
          <rect width="11" height="11" x="11" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-30" data-level="0"></rect>
          <rect width="11" height="11" x="11" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-12-31" data-level="0"></rect>
          <rect width="11" height="11" x="11" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-01" data-level="0"></rect>
      </g>
      <g transform="translate(96, 0)">
          <rect width="11" height="11" x="10" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-02" data-level="0"></rect>
          <rect width="11" height="11" x="10" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-03" data-level="0"></rect>
          <rect width="11" height="11" x="10" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-04" data-level="0"></rect>
          <rect width="11" height="11" x="10" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-05" data-level="0"></rect>
          <rect width="11" height="11" x="10" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-06" data-level="0"></rect>
          <rect width="11" height="11" x="10" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-07" data-level="0"></rect>
          <rect width="11" height="11" x="10" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-08" data-level="0"></rect>
      </g>
      <g transform="translate(112, 0)">
          <rect width="11" height="11" x="9" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-09" data-level="0"></rect>
          <rect width="11" height="11" x="9" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-10" data-level="0"></rect>
          <rect width="11" height="11" x="9" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-11" data-level="0"></rect>
          <rect width="11" height="11" x="9" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-12" data-level="0"></rect>
          <rect width="11" height="11" x="9" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-13" data-level="0"></rect>
          <rect width="11" height="11" x="9" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-14" data-level="0"></rect>
          <rect width="11" height="11" x="9" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-15" data-level="0"></rect>
      </g>
      <g transform="translate(128, 0)">
          <rect width="11" height="11" x="8" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-16" data-level="0"></rect>
          <rect width="11" height="11" x="8" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-17" data-level="0"></rect>
          <rect width="11" height="11" x="8" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-18" data-level="0"></rect>
          <rect width="11" height="11" x="8" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-19" data-level="0"></rect>
          <rect width="11" height="11" x="8" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-20" data-level="0"></rect>
          <rect width="11" height="11" x="8" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-21" data-level="0"></rect>
          <rect width="11" height="11" x="8" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-22" data-level="0"></rect>
      </g>
      <g transform="translate(144, 0)">
          <rect width="11" height="11" x="7" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-23" data-level="0"></rect>
          <rect width="11" height="11" x="7" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-24" data-level="0"></rect>
          <rect width="11" height="11" x="7" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-25" data-level="0"></rect>
          <rect width="11" height="11" x="7" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-26" data-level="0"></rect>
          <rect width="11" height="11" x="7" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-27" data-level="0"></rect>
          <rect width="11" height="11" x="7" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-28" data-level="0"></rect>
          <rect width="11" height="11" x="7" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-29" data-level="0"></rect>
      </g>
      <g transform="translate(160, 0)">
          <rect width="11" height="11" x="6" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-30" data-level="0"></rect>
          <rect width="11" height="11" x="6" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-01-31" data-level="0"></rect>
          <rect width="11" height="11" x="6" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-01" data-level="0"></rect>
          <rect width="11" height="11" x="6" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-02" data-level="0"></rect>
          <rect width="11" height="11" x="6" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-03" data-level="0"></rect>
          <rect width="11" height="11" x="6" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-04" data-level="0"></rect>
          <rect width="11" height="11" x="6" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-05" data-level="0"></rect>
      </g>
      <g transform="translate(176, 0)">
          <rect width="11" height="11" x="5" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-06" data-level="0"></rect>
          <rect width="11" height="11" x="5" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-07" data-level="0"></rect>
          <rect width="11" height="11" x="5" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-08" data-level="0"></rect>
          <rect width="11" height="11" x="5" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-09" data-level="0"></rect>
          <rect width="11" height="11" x="5" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-10" data-level="0"></rect>
          <rect width="11" height="11" x="5" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-11" data-level="0"></rect>
          <rect width="11" height="11" x="5" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-12" data-level="0"></rect>
      </g>
      <g transform="translate(192, 0)">
          <rect width="11" height="11" x="4" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-13" data-level="0"></rect>
          <rect width="11" height="11" x="4" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-14" data-level="0"></rect>
          <rect width="11" height="11" x="4" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-15" data-level="0"></rect>
          <rect width="11" height="11" x="4" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-02-16" data-level="1"></rect>
          <rect width="11" height="11" x="4" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-17" data-level="0"></rect>
          <rect width="11" height="11" x="4" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-18" data-level="0"></rect>
          <rect width="11" height="11" x="4" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-19" data-level="0"></rect>
      </g>
      <g transform="translate(208, 0)">
          <rect width="11" height="11" x="3" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-20" data-level="0"></rect>
          <rect width="11" height="11" x="3" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-21" data-level="0"></rect>
          <rect width="11" height="11" x="3" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-22" data-level="0"></rect>
          <rect width="11" height="11" x="3" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-23" data-level="0"></rect>
          <rect width="11" height="11" x="3" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-24" data-level="0"></rect>
          <rect width="11" height="11" x="3" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2022-02-25" data-level="1"></rect>
          <rect width="11" height="11" x="3" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-26" data-level="0"></rect>
      </g>
      <g transform="translate(224, 0)">
          <rect width="11" height="11" x="2" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-27" data-level="0"></rect>
          <rect width="11" height="11" x="2" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-02-28" data-level="0"></rect>
          <rect width="11" height="11" x="2" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-03-01" data-level="1"></rect>
          <rect width="11" height="11" x="2" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-03-02" data-level="0"></rect>
          <rect width="11" height="11" x="2" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-03-03" data-level="1"></rect>
          <rect width="11" height="11" x="2" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-03-04" data-level="0"></rect>
          <rect width="11" height="11" x="2" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-03-05" data-level="1"></rect>
      </g>
      <g transform="translate(240, 0)">
          <rect width="11" height="11" x="1" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-03-06" data-level="0"></rect>
          <rect width="11" height="11" x="1" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-03-07" data-level="0"></rect>
          <rect width="11" height="11" x="1" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-03-08" data-level="0"></rect>
          <rect width="11" height="11" x="1" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-03-09" data-level="0"></rect>
          <rect width="11" height="11" x="1" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-03-10" data-level="1"></rect>
          <rect width="11" height="11" x="1" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-03-11" data-level="0"></rect>
          <rect width="11" height="11" x="1" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-03-12" data-level="0"></rect>
      </g>
      <g transform="translate(256, 0)">
          <rect width="11" height="11" x="0" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-03-13" data-level="0"></rect>
          <rect width="11" height="11" x="0" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-03-14" data-level="0"></rect>
          <rect width="11" height="11" x="0" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-03-15" data-level="0"></rect>
          <rect width="11" height="11" x="0" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-03-16" data-level="0"></rect>
          <rect width="11" height="11" x="0" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-03-17" data-level="0"></rect>
          <rect width="11" height="11" x="0" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="5" data-date="2022-03-18" data-level="1"></rect>
          <rect width="11" height="11" x="0" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-03-19" data-level="0"></rect>
      </g>
      <g transform="translate(272, 0)">
          <rect width="11" height="11" x="-1" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-03-20" data-level="0"></rect>
          <rect width="11" height="11" x="-1" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-03-21" data-level="0"></rect>
          <rect width="11" height="11" x="-1" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="16" data-date="2022-03-22" data-level="3"></rect>
          <rect width="11" height="11" x="-1" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="23" data-date="2022-03-23" data-level="4"></rect>
          <rect width="11" height="11" x="-1" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-03-24" data-level="0"></rect>
          <rect width="11" height="11" x="-1" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-03-25" data-level="0"></rect>
          <rect width="11" height="11" x="-1" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="18" data-date="2022-03-26" data-level="3"></rect>
      </g>
      <g transform="translate(288, 0)">
          <rect width="11" height="11" x="-2" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="4" data-date="2022-03-27" data-level="1"></rect>
          <rect width="11" height="11" x="-2" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="16" data-date="2022-03-28" data-level="3"></rect>
          <rect width="11" height="11" x="-2" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="5" data-date="2022-03-29" data-level="1"></rect>
          <rect width="11" height="11" x="-2" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="11" data-date="2022-03-30" data-level="2"></rect>
          <rect width="11" height="11" x="-2" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-03-31" data-level="0"></rect>
          <rect width="11" height="11" x="-2" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="10" data-date="2022-04-01" data-level="2"></rect>
          <rect width="11" height="11" x="-2" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="6" data-date="2022-04-02" data-level="1"></rect>
      </g>
      <g transform="translate(304, 0)">
          <rect width="11" height="11" x="-3" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-04-03" data-level="0"></rect>
          <rect width="11" height="11" x="-3" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-04-04" data-level="0"></rect>
          <rect width="11" height="11" x="-3" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-04-05" data-level="0"></rect>
          <rect width="11" height="11" x="-3" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-04-06" data-level="0"></rect>
          <rect width="11" height="11" x="-3" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-04-07" data-level="1"></rect>
          <rect width="11" height="11" x="-3" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-04-08" data-level="0"></rect>
          <rect width="11" height="11" x="-3" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-04-09" data-level="0"></rect>
      </g>
      <g transform="translate(320, 0)">
          <rect width="11" height="11" x="-4" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-04-10" data-level="0"></rect>
          <rect width="11" height="11" x="-4" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2022-04-11" data-level="1"></rect>
          <rect width="11" height="11" x="-4" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-04-12" data-level="1"></rect>
          <rect width="11" height="11" x="-4" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-04-13" data-level="0"></rect>
          <rect width="11" height="11" x="-4" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-04-14" data-level="0"></rect>
          <rect width="11" height="11" x="-4" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2022-04-15" data-level="1"></rect>
          <rect width="11" height="11" x="-4" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-04-16" data-level="0"></rect>
      </g>
      <g transform="translate(336, 0)">
          <rect width="11" height="11" x="-5" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-04-17" data-level="0"></rect>
          <rect width="11" height="11" x="-5" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-04-18" data-level="0"></rect>
          <rect width="11" height="11" x="-5" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-04-19" data-level="0"></rect>
          <rect width="11" height="11" x="-5" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-04-20" data-level="0"></rect>
          <rect width="11" height="11" x="-5" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="8" data-date="2022-04-21" data-level="2"></rect>
          <rect width="11" height="11" x="-5" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-04-22" data-level="1"></rect>
          <rect width="11" height="11" x="-5" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-04-23" data-level="0"></rect>
      </g>
      <g transform="translate(352, 0)">
          <rect width="11" height="11" x="-6" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="23" data-date="2022-04-24" data-level="4"></rect>
          <rect width="11" height="11" x="-6" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="56" data-date="2022-04-25" data-level="4"></rect>
          <rect width="11" height="11" x="-6" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="3" data-date="2022-04-26" data-level="1"></rect>
          <rect width="11" height="11" x="-6" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-04-27" data-level="0"></rect>
          <rect width="11" height="11" x="-6" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="13" data-date="2022-04-28" data-level="3"></rect>
          <rect width="11" height="11" x="-6" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-04-29" data-level="0"></rect>
          <rect width="11" height="11" x="-6" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="45" data-date="2022-04-30" data-level="4"></rect>
      </g>
      <g transform="translate(368, 0)">
          <rect width="11" height="11" x="-7" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="11" data-date="2022-05-01" data-level="2"></rect>
          <rect width="11" height="11" x="-7" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="7" data-date="2022-05-02" data-level="2"></rect>
          <rect width="11" height="11" x="-7" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-05-03" data-level="0"></rect>
          <rect width="11" height="11" x="-7" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-05-04" data-level="0"></rect>
          <rect width="11" height="11" x="-7" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="24" data-date="2022-05-05" data-level="4"></rect>
          <rect width="11" height="11" x="-7" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-05-06" data-level="0"></rect>
          <rect width="11" height="11" x="-7" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-05-07" data-level="0"></rect>
      </g>
      <g transform="translate(384, 0)">
          <rect width="11" height="11" x="-8" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-05-08" data-level="0"></rect>
          <rect width="11" height="11" x="-8" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="14" data-date="2022-05-09" data-level="3"></rect>
          <rect width="11" height="11" x="-8" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-05-10" data-level="0"></rect>
          <rect width="11" height="11" x="-8" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-05-11" data-level="0"></rect>
          <rect width="11" height="11" x="-8" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="3" data-date="2022-05-12" data-level="1"></rect>
          <rect width="11" height="11" x="-8" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-05-13" data-level="1"></rect>
          <rect width="11" height="11" x="-8" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-05-14" data-level="0"></rect>
      </g>
      <g transform="translate(400, 0)">
          <rect width="11" height="11" x="-9" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-05-15" data-level="0"></rect>
          <rect width="11" height="11" x="-9" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-05-16" data-level="0"></rect>
          <rect width="11" height="11" x="-9" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-05-17" data-level="0"></rect>
          <rect width="11" height="11" x="-9" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="13" data-date="2022-05-18" data-level="3"></rect>
          <rect width="11" height="11" x="-9" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2022-05-19" data-level="1"></rect>
          <rect width="11" height="11" x="-9" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-05-20" data-level="1"></rect>
          <rect width="11" height="11" x="-9" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-05-21" data-level="0"></rect>
      </g>
      <g transform="translate(416, 0)">
          <rect width="11" height="11" x="-10" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-05-22" data-level="0"></rect>
          <rect width="11" height="11" x="-10" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-05-23" data-level="0"></rect>
          <rect width="11" height="11" x="-10" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-05-24" data-level="0"></rect>
          <rect width="11" height="11" x="-10" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-05-25" data-level="0"></rect>
          <rect width="11" height="11" x="-10" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-05-26" data-level="0"></rect>
          <rect width="11" height="11" x="-10" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-05-27" data-level="0"></rect>
          <rect width="11" height="11" x="-10" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2022-05-28" data-level="1"></rect>
      </g>
      <g transform="translate(432, 0)">
          <rect width="11" height="11" x="-11" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-05-29" data-level="0"></rect>
          <rect width="11" height="11" x="-11" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="4" data-date="2022-05-30" data-level="1"></rect>
          <rect width="11" height="11" x="-11" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-05-31" data-level="0"></rect>
          <rect width="11" height="11" x="-11" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-06-01" data-level="0"></rect>
          <rect width="11" height="11" x="-11" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="5" data-date="2022-06-02" data-level="1"></rect>
          <rect width="11" height="11" x="-11" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-06-03" data-level="0"></rect>
          <rect width="11" height="11" x="-11" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="6" data-date="2022-06-04" data-level="1"></rect>
      </g>
      <g transform="translate(448, 0)">
          <rect width="11" height="11" x="-12" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="7" data-date="2022-06-05" data-level="2"></rect>
          <rect width="11" height="11" x="-12" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-06-06" data-level="0"></rect>
          <rect width="11" height="11" x="-12" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="3" data-date="2022-06-07" data-level="1"></rect>
          <rect width="11" height="11" x="-12" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="19" data-date="2022-06-08" data-level="4"></rect>
          <rect width="11" height="11" x="-12" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="8" data-date="2022-06-09" data-level="2"></rect>
          <rect width="11" height="11" x="-12" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-06-10" data-level="0"></rect>
          <rect width="11" height="11" x="-12" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-06-11" data-level="0"></rect>
      </g>
      <g transform="translate(464, 0)">
          <rect width="11" height="11" x="-13" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-06-12" data-level="1"></rect>
          <rect width="11" height="11" x="-13" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="8" data-date="2022-06-13" data-level="2"></rect>
          <rect width="11" height="11" x="-13" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-06-14" data-level="1"></rect>
          <rect width="11" height="11" x="-13" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="7" data-date="2022-06-15" data-level="2"></rect>
          <rect width="11" height="11" x="-13" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="11" data-date="2022-06-16" data-level="2"></rect>
          <rect width="11" height="11" x="-13" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-06-17" data-level="1"></rect>
          <rect width="11" height="11" x="-13" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-06-18" data-level="0"></rect>
      </g>
      <g transform="translate(480, 0)">
          <rect width="11" height="11" x="-14" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-06-19" data-level="0"></rect>
          <rect width="11" height="11" x="-14" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="7" data-date="2022-06-20" data-level="2"></rect>
          <rect width="11" height="11" x="-14" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="5" data-date="2022-06-21" data-level="1"></rect>
          <rect width="11" height="11" x="-14" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-06-22" data-level="0"></rect>
          <rect width="11" height="11" x="-14" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-06-23" data-level="0"></rect>
          <rect width="11" height="11" x="-14" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-06-24" data-level="0"></rect>
          <rect width="11" height="11" x="-14" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2022-06-25" data-level="1"></rect>
      </g>
      <g transform="translate(496, 0)">
          <rect width="11" height="11" x="-15" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="13" data-date="2022-06-26" data-level="3"></rect>
          <rect width="11" height="11" x="-15" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="3" data-date="2022-06-27" data-level="1"></rect>
          <rect width="11" height="11" x="-15" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2022-06-28" data-level="1"></rect>
          <rect width="11" height="11" x="-15" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="6" data-date="2022-06-29" data-level="1"></rect>
          <rect width="11" height="11" x="-15" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2022-06-30" data-level="1"></rect>
          <rect width="11" height="11" x="-15" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-07-01" data-level="0"></rect>
          <rect width="11" height="11" x="-15" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-07-02" data-level="0"></rect>
      </g>
      <g transform="translate(512, 0)">
          <rect width="11" height="11" x="-16" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-07-03" data-level="0"></rect>
          <rect width="11" height="11" x="-16" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2022-07-04" data-level="1"></rect>
          <rect width="11" height="11" x="-16" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="4" data-date="2022-07-05" data-level="1"></rect>
          <rect width="11" height="11" x="-16" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="4" data-date="2022-07-06" data-level="1"></rect>
          <rect width="11" height="11" x="-16" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-07-07" data-level="0"></rect>
          <rect width="11" height="11" x="-16" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-07-08" data-level="0"></rect>
          <rect width="11" height="11" x="-16" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-07-09" data-level="0"></rect>
      </g>
      <g transform="translate(528, 0)">
          <rect width="11" height="11" x="-17" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="4" data-date="2022-07-10" data-level="1"></rect>
          <rect width="11" height="11" x="-17" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-07-11" data-level="0"></rect>
          <rect width="11" height="11" x="-17" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-07-12" data-level="0"></rect>
          <rect width="11" height="11" x="-17" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2022-07-13" data-level="1"></rect>
          <rect width="11" height="11" x="-17" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-07-14" data-level="0"></rect>
          <rect width="11" height="11" x="-17" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-07-15" data-level="1"></rect>
          <rect width="11" height="11" x="-17" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-07-16" data-level="0"></rect>
      </g>
      <g transform="translate(544, 0)">
          <rect width="11" height="11" x="-18" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-07-17" data-level="0"></rect>
          <rect width="11" height="11" x="-18" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-07-18" data-level="0"></rect>
          <rect width="11" height="11" x="-18" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-07-19" data-level="0"></rect>
          <rect width="11" height="11" x="-18" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-07-20" data-level="1"></rect>
          <rect width="11" height="11" x="-18" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-07-21" data-level="0"></rect>
          <rect width="11" height="11" x="-18" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-07-22" data-level="0"></rect>
          <rect width="11" height="11" x="-18" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-07-23" data-level="0"></rect>
      </g>
      <g transform="translate(560, 0)">
          <rect width="11" height="11" x="-19" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-07-24" data-level="0"></rect>
          <rect width="11" height="11" x="-19" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-07-25" data-level="0"></rect>
          <rect width="11" height="11" x="-19" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-07-26" data-level="0"></rect>
          <rect width="11" height="11" x="-19" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-07-27" data-level="0"></rect>
          <rect width="11" height="11" x="-19" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2022-07-28" data-level="1"></rect>
          <rect width="11" height="11" x="-19" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-07-29" data-level="0"></rect>
          <rect width="11" height="11" x="-19" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-07-30" data-level="0"></rect>
      </g>
      <g transform="translate(576, 0)">
          <rect width="11" height="11" x="-20" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-07-31" data-level="0"></rect>
          <rect width="11" height="11" x="-20" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-08-01" data-level="0"></rect>
          <rect width="11" height="11" x="-20" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="6" data-date="2022-08-02" data-level="1"></rect>
          <rect width="11" height="11" x="-20" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-08-03" data-level="0"></rect>
          <rect width="11" height="11" x="-20" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-08-04" data-level="0"></rect>
          <rect width="11" height="11" x="-20" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-08-05" data-level="0"></rect>
          <rect width="11" height="11" x="-20" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-08-06" data-level="0"></rect>
      </g>
      <g transform="translate(592, 0)">
          <rect width="11" height="11" x="-21" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="6" data-date="2022-08-07" data-level="1"></rect>
          <rect width="11" height="11" x="-21" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-08-08" data-level="1"></rect>
          <rect width="11" height="11" x="-21" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-08-09" data-level="1"></rect>
          <rect width="11" height="11" x="-21" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="4" data-date="2022-08-10" data-level="1"></rect>
          <rect width="11" height="11" x="-21" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-08-11" data-level="0"></rect>
          <rect width="11" height="11" x="-21" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-08-12" data-level="0"></rect>
          <rect width="11" height="11" x="-21" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-08-13" data-level="0"></rect>
      </g>
      <g transform="translate(608, 0)">
          <rect width="11" height="11" x="-22" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-08-14" data-level="0"></rect>
          <rect width="11" height="11" x="-22" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-08-15" data-level="1"></rect>
          <rect width="11" height="11" x="-22" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-08-16" data-level="0"></rect>
          <rect width="11" height="11" x="-22" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-08-17" data-level="1"></rect>
          <rect width="11" height="11" x="-22" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-08-18" data-level="0"></rect>
          <rect width="11" height="11" x="-22" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-08-19" data-level="0"></rect>
          <rect width="11" height="11" x="-22" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-08-20" data-level="0"></rect>
      </g>
      <g transform="translate(624, 0)">
          <rect width="11" height="11" x="-23" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-08-21" data-level="1"></rect>
          <rect width="11" height="11" x="-23" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-08-22" data-level="0"></rect>
          <rect width="11" height="11" x="-23" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-08-23" data-level="0"></rect>
          <rect width="11" height="11" x="-23" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="3" data-date="2022-08-24" data-level="1"></rect>
          <rect width="11" height="11" x="-23" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="3" data-date="2022-08-25" data-level="1"></rect>
          <rect width="11" height="11" x="-23" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-08-26" data-level="0"></rect>
          <rect width="11" height="11" x="-23" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-08-27" data-level="0"></rect>
      </g>
      <g transform="translate(640, 0)">
          <rect width="11" height="11" x="-24" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-08-28" data-level="0"></rect>
          <rect width="11" height="11" x="-24" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-08-29" data-level="0"></rect>
          <rect width="11" height="11" x="-24" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-08-30" data-level="0"></rect>
          <rect width="11" height="11" x="-24" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-08-31" data-level="0"></rect>
          <rect width="11" height="11" x="-24" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-09-01" data-level="0"></rect>
          <rect width="11" height="11" x="-24" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-09-02" data-level="0"></rect>
          <rect width="11" height="11" x="-24" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-09-03" data-level="0"></rect>
      </g>
      <g transform="translate(656, 0)">
          <rect width="11" height="11" x="-25" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-09-04" data-level="0"></rect>
          <rect width="11" height="11" x="-25" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="3" data-date="2022-09-05" data-level="1"></rect>
          <rect width="11" height="11" x="-25" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="3" data-date="2022-09-06" data-level="1"></rect>
          <rect width="11" height="11" x="-25" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-09-07" data-level="0"></rect>
          <rect width="11" height="11" x="-25" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-09-08" data-level="1"></rect>
          <rect width="11" height="11" x="-25" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-09-09" data-level="0"></rect>
          <rect width="11" height="11" x="-25" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-09-10" data-level="0"></rect>
      </g>
      <g transform="translate(672, 0)">
          <rect width="11" height="11" x="-26" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="4" data-date="2022-09-11" data-level="1"></rect>
          <rect width="11" height="11" x="-26" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-09-12" data-level="0"></rect>
          <rect width="11" height="11" x="-26" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="4" data-date="2022-09-13" data-level="1"></rect>
          <rect width="11" height="11" x="-26" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-09-14" data-level="0"></rect>
          <rect width="11" height="11" x="-26" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-09-15" data-level="0"></rect>
          <rect width="11" height="11" x="-26" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="5" data-date="2022-09-16" data-level="1"></rect>
          <rect width="11" height="11" x="-26" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-09-17" data-level="0"></rect>
      </g>
      <g transform="translate(688, 0)">
          <rect width="11" height="11" x="-27" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="4" data-date="2022-09-18" data-level="1"></rect>
          <rect width="11" height="11" x="-27" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-09-19" data-level="0"></rect>
          <rect width="11" height="11" x="-27" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2022-09-20" data-level="1"></rect>
          <rect width="11" height="11" x="-27" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2022-09-21" data-level="1"></rect>
          <rect width="11" height="11" x="-27" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2022-09-22" data-level="1"></rect>
          <rect width="11" height="11" x="-27" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-09-23" data-level="1"></rect>
          <rect width="11" height="11" x="-27" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-09-24" data-level="0"></rect>
      </g>
      <g transform="translate(704, 0)">
          <rect width="11" height="11" x="-28" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-09-25" data-level="0"></rect>
          <rect width="11" height="11" x="-28" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="3" data-date="2022-09-26" data-level="1"></rect>
          <rect width="11" height="11" x="-28" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-09-27" data-level="1"></rect>
          <rect width="11" height="11" x="-28" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-09-28" data-level="0"></rect>
          <rect width="11" height="11" x="-28" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="16" data-date="2022-09-29" data-level="3"></rect>
          <rect width="11" height="11" x="-28" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-09-30" data-level="0"></rect>
          <rect width="11" height="11" x="-28" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-10-01" data-level="0"></rect>
      </g>
      <g transform="translate(720, 0)">
          <rect width="11" height="11" x="-29" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-10-02" data-level="0"></rect>
          <rect width="11" height="11" x="-29" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-10-03" data-level="0"></rect>
          <rect width="11" height="11" x="-29" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-10-04" data-level="0"></rect>
          <rect width="11" height="11" x="-29" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2022-10-05" data-level="1"></rect>
          <rect width="11" height="11" x="-29" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-10-06" data-level="0"></rect>
          <rect width="11" height="11" x="-29" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-10-07" data-level="0"></rect>
          <rect width="11" height="11" x="-29" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-10-08" data-level="0"></rect>
      </g>
      <g transform="translate(736, 0)">
          <rect width="11" height="11" x="-30" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="4" data-date="2022-10-09" data-level="1"></rect>
          <rect width="11" height="11" x="-30" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2022-10-10" data-level="1"></rect>
          <rect width="11" height="11" x="-30" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-10-11" data-level="1"></rect>
          <rect width="11" height="11" x="-30" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-10-12" data-level="0"></rect>
          <rect width="11" height="11" x="-30" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-10-13" data-level="0"></rect>
          <rect width="11" height="11" x="-30" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-10-14" data-level="0"></rect>
          <rect width="11" height="11" x="-30" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-10-15" data-level="0"></rect>
      </g>
      <g transform="translate(752, 0)">
          <rect width="11" height="11" x="-31" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2022-10-16" data-level="1"></rect>
          <rect width="11" height="11" x="-31" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="3" data-date="2022-10-17" data-level="1"></rect>
          <rect width="11" height="11" x="-31" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="4" data-date="2022-10-18" data-level="1"></rect>
          <rect width="11" height="11" x="-31" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-10-19" data-level="0"></rect>
          <rect width="11" height="11" x="-31" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-10-20" data-level="0"></rect>
          <rect width="11" height="11" x="-31" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-10-21" data-level="0"></rect>
          <rect width="11" height="11" x="-31" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-10-22" data-level="0"></rect>
      </g>
      <g transform="translate(768, 0)">
          <rect width="11" height="11" x="-32" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-10-23" data-level="0"></rect>
          <rect width="11" height="11" x="-32" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-10-24" data-level="0"></rect>
          <rect width="11" height="11" x="-32" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-10-25" data-level="0"></rect>
          <rect width="11" height="11" x="-32" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2022-10-26" data-level="1"></rect>
          <rect width="11" height="11" x="-32" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-10-27" data-level="0"></rect>
          <rect width="11" height="11" x="-32" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-10-28" data-level="0"></rect>
          <rect width="11" height="11" x="-32" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-10-29" data-level="0"></rect>
      </g>
      <g transform="translate(784, 0)">
          <rect width="11" height="11" x="-33" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-10-30" data-level="0"></rect>
          <rect width="11" height="11" x="-33" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-10-31" data-level="0"></rect>
          <rect width="11" height="11" x="-33" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-11-01" data-level="1"></rect>
          <rect width="11" height="11" x="-33" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2022-11-02" data-level="1"></rect>
          <rect width="11" height="11" x="-33" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-11-03" data-level="0"></rect>
          <rect width="11" height="11" x="-33" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-11-04" data-level="0"></rect>
          <rect width="11" height="11" x="-33" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-11-05" data-level="0"></rect>
      </g>
      <g transform="translate(800, 0)">
          <rect width="11" height="11" x="-34" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-11-06" data-level="0"></rect>
          <rect width="11" height="11" x="-34" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-11-07" data-level="0"></rect>
          <rect width="11" height="11" x="-34" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-11-08" data-level="0"></rect>
          <rect width="11" height="11" x="-34" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-11-09" data-level="0"></rect>
          <rect width="11" height="11" x="-34" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-11-10" data-level="0"></rect>
          <rect width="11" height="11" x="-34" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-11-11" data-level="0"></rect>
          <rect width="11" height="11" x="-34" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-11-12" data-level="0"></rect>
      </g>
      <g transform="translate(816, 0)">
          <rect width="11" height="11" x="-35" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-11-13" data-level="0"></rect>
          <rect width="11" height="11" x="-35" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-11-14" data-level="0"></rect>
          <rect width="11" height="11" x="-35" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-11-15" data-level="0"></rect>
          <rect width="11" height="11" x="-35" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-11-16" data-level="0"></rect>
          <rect width="11" height="11" x="-35" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-11-17" data-level="0"></rect>
          <rect width="11" height="11" x="-35" y="75" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-11-18" data-level="0"></rect>
          <rect width="11" height="11" x="-35" y="90" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-11-19" data-level="0"></rect>
      </g>
      <g transform="translate(832, 0)">
          <rect width="11" height="11" x="-36" y="0" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-11-20" data-level="0"></rect>
          <rect width="11" height="11" x="-36" y="15" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-11-21" data-level="0"></rect>
          <rect width="11" height="11" x="-36" y="30" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-11-22" data-level="0"></rect>
          <rect width="11" height="11" x="-36" y="45" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-11-23" data-level="0"></rect>
          <rect width="11" height="11" x="-36" y="60" className="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2022-11-24" data-level="0"></rect>
      </g>
      <text x="16" y="-8" className="ContributionCalendar-label">Nov</text>
      <text x="46" y="-8" className="ContributionCalendar-label">Dec</text>
      <text x="106" y="-8" className="ContributionCalendar-label">Jan</text>
      <text x="181" y="-8" className="ContributionCalendar-label">Feb</text>
      <text x="241" y="-8" className="ContributionCalendar-label">Mar</text>
      <text x="301" y="-8" className="ContributionCalendar-label">Apr</text>
      <text x="361" y="-8" className="ContributionCalendar-label">May</text>
      <text x="436" y="-8" className="ContributionCalendar-label">Jun</text>
      <text x="496" y="-8" className="ContributionCalendar-label">Jul</text>
      <text x="571" y="-8" className="ContributionCalendar-label">Aug</text>
      <text x="631" y="-8" className="ContributionCalendar-label">Sep</text>
      <text x="691" y="-8" className="ContributionCalendar-label">Oct</text>
      <text x="766" y="-8" className="ContributionCalendar-label">Nov</text>
    <text text-anchor="start" className="ContributionCalendar-label" dx="-15" dy="8" style={{display: "none"}}>Sun</text>
    <text text-anchor="start" className="ContributionCalendar-label" dx="-15" dy="25">Mon</text>
    <text text-anchor="start" className="ContributionCalendar-label" dx="-15" dy="32" style={{display: "none"}}>Tue</text>
    <text text-anchor="start" className="ContributionCalendar-label" dx="-15" dy="56">Wed</text>
    <text text-anchor="start" className="ContributionCalendar-label" dx="-15" dy="57" style={{display: "none"}}>Thu</text>
    <text text-anchor="start" className="ContributionCalendar-label" dx="-15" dy="85">Fri</text>
    <text text-anchor="start" className="ContributionCalendar-label" dx="-15" dy="81" style={{display: "none"}}>Sat</text>
</g></svg>

        <div className="width-full f6 px-0 px-md-5 py-1">
          <div className="float-left">


            <a href="" className="Link--muted">
              Learn how we count contributions</a>
          </div>
          <div className="float-right color-fg-muted" title="A summary of pull requests, issues opened, and commits to the default and gh-pages branches.">
            Less
              <svg width="10" height="10" className="d-inline-block">
                <rect width="10" height="10" className="ContributionCalendar-day" rx="2" ry="2" data-level="0"></rect>
              </svg>
              <svg width="10" height="10" className="d-inline-block">
                <rect width="10" height="10" className="ContributionCalendar-day" rx="2" ry="2" data-level="1"></rect>
              </svg>
              <svg width="10" height="10" className="d-inline-block">
                <rect width="10" height="10" className="ContributionCalendar-day" rx="2" ry="2" data-level="2"></rect>
              </svg>
              <svg width="10" height="10" className="d-inline-block">
                <rect width="10" height="10" className="ContributionCalendar-day" rx="2" ry="2" data-level="3"></rect>
              </svg>
              <svg width="10" height="10" className="d-inline-block">
                <rect width="10" height="10" className="ContributionCalendar-day" rx="2" ry="2" data-level="4"></rect>
              </svg>
            More
          </div>
        </div>
      </div>

    </div> 
           
      
      <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
        
        <div className="bg-gray-600 shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
          <h3 className="text-xl leading-none font-bold text-white mb-10">
            Acquisition Overview
          </h3>
          <div className="block w-full overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                    Top Channels
                  </th>
                  <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                    Users
                  </th>
                  <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="text-gray-200">
                  <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                    Organic Search
                  </th>
                  <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-200 whitespace-nowrap p-4">
                    5,649
                  </td>
                  <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2 text-xs font-medium">30%</span>
                      <div className="relative w-full">
                        <div className="w-full bg-gray-200 rounded-sm h-2">
                          <div
                            className="bg-cyan-600 h-2 rounded-sm"
                            style={{ width: "30%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                
                
                <tr className="text-gray-200">
                  <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                    Other
                  </th>
                  <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-200 whitespace-nowrap p-4">
                    734
                  </td>
                  <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2 text-xs font-medium">9%</span>
                      <div className="relative w-full">
                        <div className="w-full bg-gray-200 rounded-sm h-2">
                          <div
                            className="bg-indigo-600 h-2 rounded-sm"
                            style={{ width: "9%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="text-gray-200">
                  <th className="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">
                    Email
                  </th>
                  <td className="border-t-0 align-middle text-xs font-medium text-gray-200 whitespace-nowrap p-4 pb-0">
                    456
                  </td>
                  <td className="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                    <div className="flex items-center">
                      <span className="mr-2 text-xs font-medium">7%</span>
                      <div className="relative w-full">
                        <div className="w-full bg-gray-200 rounded-sm h-2">
                          <div
                            className="bg-purple-500 h-2 rounded-sm"
                            style={{ width: "7%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='player-wrapper gap-8'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=KUWn_TJTrnU'
          width='100%'
          height='100% '
        />
      </div>
      </div>
      
      <footer className="bg-white md:flex mb-6 md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
        <ul className="flex items-center flex-wrap mb-6 md:mb-0">
          <li>
            <a
              href="#"
              className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
            >
              Terms and conditions
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
            >
              Licensing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
            >
              Cookie Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-normal text-gray-500 hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
        
        <div className="flex sm:justify-center space-x-6">
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;

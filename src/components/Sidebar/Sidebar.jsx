import Link from "next/link";
import React from "react";

export default function Sidebar() {
   
  return (
    <>
      {/* component */}
      {/* This is an example component */}
      <div className="max-w-2xl hidden lg:block z-50">
        <aside className="w-64" aria-label="Sidebar">
          <div className="px-3 py-4 overflow-y-auto rounded  dark:bg-gray-800">
            <ul className="space-y-2">
              <li>
                <Link
                  href=""
                  className="flex items-center p-2 text-lg font-normal text-[#4C4D4F] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="ml-3">Overview</span>
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="flex items-center p-2 text-lg font-normal text-[#4C4D4F] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="ml-3">Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="flex items-center p-2 text-lg font-normal text-[#4C4D4F] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="ml-3">Appointments</span>
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="flex items-center p-2 text-lg font-normal text-[#4C4D4F] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="ml-3">History</span>
                </Link>
                <ul className=" ml-3 ">
                  <li>
                    <Link
                      href=""
                      className="flex items-center p-2 text-sm font-normal text-[#4C4D4F] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <span className="ml-3">Videos</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="flex items-center p-2 text-sm font-normal text-[#4C4D4F] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <span className="ml-3">Videos Library</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href=""
                  className="flex items-center p-2 text-lg font-normal text-[#4C4D4F] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="ml-3">Messages</span>
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="flex items-center p-2 text-lg font-normal text-[#4C4D4F] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="ml-3">Support</span>
                </Link>
                <ul className=" ml-3 ">
                  <li>
                    <Link
                      href=""
                      className="flex items-center p-2 text-sm font-normal text-[#4C4D4F] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <span className="ml-3">FAQ</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="flex items-center p-2 text-sm font-normal text-[#4C4D4F] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <span className="ml-3">Procedure Information</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href=""
                  className="flex items-center p-2 text-lg font-normal text-[#4C4D4F] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="ml-3">Aftercare</span>
                </Link>

                <ul className=" ml-3 ">
                  <li>
                    <Link
                      href=""
                      className="flex items-center p-2 text-sm font-normal text-[#4C4D4F] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <span className="ml-3">Quizzes</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="flex items-center p-2 text-sm font-normal text-[#4C4D4F] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <span className="ml-3">Health & Skin Assesment</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href=""
                  className="flex items-center p-2 text-lg font-normal text-[#4C4D4F] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="ml-3">Finances</span>
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="flex items-center p-2 text-lg font-normal text-[#4C4D4F] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="ml-3">Virtual Consultation</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}

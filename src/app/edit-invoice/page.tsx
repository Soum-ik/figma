"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BiCloset, BiSearch, BiWindowClose } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import Edit from "@/src/components/edit/Edit";
import Link from "next/link";
import { invvoic, images } from "@/src/components/data";
import { LuPrinter } from "react-icons/lu";
export default function Page() {
  const [showPayment, setShowPayment] = useState(false);

  return (
    <>
      <div className=" container flex lg:items-start items-center mx-auto justify-between mb-3">
        <div className=" space-y-5">
          <h1 className=" lg:text-3xl">Invoice</h1>
          <h1 className=" lg:text-xl opacity-50">Invoice List</h1>
        </div>
        <div>
          <button
            onClick={() => setShowPayment(!showPayment)}
            className=" bg-black text-white text-sm md:text-lg lg:text-xl rounded-xl lg:px-10 px-5 py-2 lg:py-4"
          >
            Add Dicount
          </button>
        </div>
      </div>
      <div className=" relative grid grid-cols-1 lg:grid-cols-3 ">
        <div className=" lg:col-start-1 lg:col-end-3   lg:absolute   mb-10 ">
          <div className="   container  lg:min-w-[750px] mx-auto bg-white rounded-xl  px-5 py-5">
            <div className=" border-b-2">
              <h1 className="text-xl">Edit Invoice</h1>
              <p className=" text-base opacity-50 my-2">
                custom Invoice layout editing{" "}
              </p>
            </div>
            <div className=" my-20 flex items-center justify-center">
              <div className=" lg:py-8 py-3 px-2 border lg:px-5 rounded-2xl">
                <h1> Preview Invoice</h1>
                <div className=" mt-10">
                  <Image
                    alt="band image"
                    src={"/images/mainlogo.png"}
                    width={120}
                    height={100}
                  />
                </div>
                <div className=" my-10 flex gap-20 font-semibold">
                  <h1>Dr. Vihang</h1>
                  <h1>Jane Doe</h1>
                </div>
                <div className=" flex lg:items-end lg:justify-end rounded-md flex-1 flex-col">
                  <table className=" border rounded-xl">
                    <thead className=" bg-black    text-white ">
                      <tr className=" py-10   rounded-md">
                        <th className=" px-2 py-3  rounded-tl-xl   md:px-5 md:py-3 border-b-2  text-left text-xs font-semibold uppercase tracking-wider">
                          item
                        </th>
                        <th className=" px-2 py-3   md:px-5 md:py-3 border-b-2  text-left text-xs font-semibold uppercase tracking-wider">
                          Rate
                        </th>
                        <th className=" px-2 py-3   md:px-5 md:py-3 border-b-2  text-left text-xs font-semibold uppercase tracking-wider">
                          Qty
                        </th>
                        <th className=" px-2 py-3 rounded-tr-xl  md:px-5 md:py-3 border-b-2  text-left text-xs font-semibold uppercase tracking-wider">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody className=" ">
                      {invvoic.map((data, index) => (
                        <tr key={index}>
                          <td className="lg:px-5 lg:py-3  sm:px-3 sm:py-3 px-2 py-2  border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                              <div className="lg:ml-1">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {data.name}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="lg:px-5 lg:py-3  sm:px-3 sm:py-3 px-2 py-2 border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {data.Rate}
                            </p>
                          </td>
                          <td className="lg:px-5 lg:py-3  sm:px-3 sm:py-3 px-2 py-2  border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {data.Qty}
                            </p>
                          </td>
                          <td className="lg:px-5 lg:py-3  sm:px-3 sm:py-3 px-2 py-2  border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {data.Amount}
                            </p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* perfect */}
                  <div className="flex  my-5 gap-20">
                    <div className=" space-y-2">
                      <h3 className=" text-balance font-semibold">Subtotal</h3>
                      <h3>tax 5%</h3>
                      <h3>Discount 10%</h3>
                    </div>

                    <div className=" space-y-2">
                      <h3 className=" text-balance font-semibold">$147</h3>
                      <h3>$107</h3>
                      <h3>$107</h3>
                    </div>
                  </div>
                  <div className=" hidden lg:block mb-2  text-right bg-black/50 w-full h-[1px]">
                    <h1 className=" my-2">
                      Total <span className=" ml-[140px]"> $500</span>
                    </h1>
                  </div>
                  <div className=" min-w-full lg:px-5 lg:mt-10 py-3 px-2 rounded-md bg-[#F8F8F8]">
                    <h1 className="  font-bold">Notes/Terms</h1>
                    <p className=" opacity-50">
                      Lorem ipsum dolor sit amet. Sit eaque assumenda qui.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className=" lg:col-start-3 lg:min-w-[430px] lg:absolute lg:-left-[22px]">
          <div className=" mx-auto bg-white rounded-xl w-full px-5 py-5">
            <h1>Template Elements</h1>

            <div className=" flex items-center justify-between w-full my-3">
              <div className="">
                <div className=" border flex items-center justify-center px-3 py-2 mt-0 gap-2 rounded-md ">
                  <BiSearch />
                  <input
                    type="text"
                    placeholder=" search by patient name"
                    className=" outline-none"
                  />
                </div>
              </div>
              <div>
                <CgClose />
              </div>
            </div>

            <div className=" grid grid-cols-2 sm:max-w-[400px]   gap-4 place-items-center place-content-center">
              {images.map((image, index) => (
              <div key={index} className="text-center items-center justify-center flex  ">
                  <Image
                    src={image}
                    alt="image"
                    width={200}
                    className=" hover:cursor-pointer"
                    height={200}
                  />
                </div>
              ))}
            </div>
            <div className=" my-3">
              <h1 className=" opacity-50">Signature</h1>
              <textarea className=" w-full border outline-none p-5 rounded-md"></textarea>
            </div>

            <button className=" bg-black px-10 py-3 rounded-3xl text-white text-xl mt-5 ">
              <Link href={"/payment"}>Save</Link>
            </button>
          </div>
        </div>
      </div>
      {showPayment && <Edit onClose={() => setShowPayment(!showPayment)} />}
    </>
  );
}

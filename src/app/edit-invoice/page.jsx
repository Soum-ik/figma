"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BiCloset, BiSearch, BiWindowClose } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import Edit from "@/src/components/edit/Edit";
import Link from "next/link";
export default function Page() {
  const [showPayment, setShowPayment] = useState(false);

  const invvoic = [
    {
      name: "Vitamin A Night Serum",
      Rate: "$50$",
      Qty: "2",
      Amount: "$500",
    },
    {
      name: "Vitamin A Night Serum",
      Rate: "$50$",
      Qty: "2",
      Amount: "$500",
    },
    {
      name: "Vitamin A Night Serum",
      Rate: "$50$",
      Qty: "2",
      Amount: "$500",
    },
    {
      name: "Vitamin A Night Serum",
      Rate: "$50$",
      Qty: "2",
      Amount: "$500",
    },
    {
      name: "Vitamin A Night Serum",
      Rate: "$50$",
      Qty: "2",
      Amount: "$500",
    },
    {
      name: "Vitamin A Night Serum",
      Rate: "$50$",
      Qty: "2",
      Amount: "$500",
    },
  ];
  const images = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
    "/images/image5.png",
    "/images/image6.png",
    "/images/image7.png",
    "/images/image8.png",
  ];
  return (
    <>
      <div className=" container flex lg:items-start items-center mx-auto justify-between mb-3">
        <div>
          <h1 className=" lg:text-2xl">Invoice</h1>
          <h1 className=" lg:text-xl">Invoice List</h1>
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
              <p className=" text-base opacity-50">
                custom Invoice layout editing{" "}
              </p>
            </div>
            <div className=" py-8   px-2 rounded-2xl">
              <div className=" my-10 flex items-center justify-center flex-1 gap-20 font-semibold">
                <h1>Dr. Vihang</h1>
                <h1>Jane Doe</h1>
              </div>
              <div className=" flex items-center justify-center flex-1 flex-col">
                <table>
                  <thead className=" bg-black  rounded-md text-white ">
                    <tr className=" py-10   rounded-md">
                      <th className="px-5 py-3 border-b-2  text-left text-xs font-semibold uppercase tracking-wider">
                        item
                      </th>
                      <th className="px-5 py-3 border-b-2  text-left text-xs font-semibold uppercase tracking-wider">
                        Rate
                      </th>
                      <th className="px-5 py-3 border-b-2  text-left text-xs font-semibold uppercase tracking-wider">
                        Qty
                      </th>
                      <th className="px-5 py-3 border-b-2  text-left text-xs font-semibold uppercase tracking-wider">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" ">
                    {invvoic.map((data, index) => (
                      <tr key={index}>
                        <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="ml-1">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {data.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {data.Rate}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {data.Qty}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {data.Amount}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex items-end justify-end   my-5 gap-20">
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
                <div className=" p-5">
                  <h1 className="  font-bold">Notes/Terms</h1>
                  <p className=" opacity-50">
                    Lorem ipsum dolor sit amet. Sit eaque assumenda qui.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className=" lg:col-start-3 lg:min-w-[430px] lg:absolute lg:-left-[22px]">
          <div className=" mx-auto bg-white rounded-xl w-full px-5 py-5">
            <h1>Template Elements</h1>

            <div className=" flex items-center justify-between w-full my-3 lg:px-4">
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

            <div className=" grid grid-cols-2 gap-4 place-items-start place-content-start">
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="image"
                  width={200}
                  className=" hover:cursor-pointer flex items-center
                 justify-center"
                  height={200}
                />
              ))}
            </div>

            <button className=" bg-black px-10 py-3 rounded-3xl text-white text-xl mt-5 ">
              <Link href={'/payment'}>Save</Link>
            </button>
          </div>
        </div>
      </div>
      {showPayment && <Edit onClose={() => setShowPayment(!showPayment)} />}
    </>
  );
}

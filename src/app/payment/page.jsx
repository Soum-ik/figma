import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiMicrophone } from "react-icons/bi";
import { LuPrinter } from "react-icons/lu";

export default function page() {
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
  return (
    <>
      <div className=" pb-5">
        <h1 className=" text-xl">Invoice</h1>
        <h1 className=" text-base opacity-50">
          Create a invoice for your patients
        </h1>
      </div>
      <div className=" relative grid grid-cols-1 lg:grid-cols-3 ">
        <div className=" lg:col-start-1 lg:col-end-3  lg:absolute -left-2 mb-10 ">
          <div
            className=" container bg-white lg:min-w-[750px] rounded-xl lg:px-6 lg:py-5 px-4 py-5
           space-y-5 lg:space-y-10"
          >
            <h1 className="   text-sm sm:text-sm md:text-lg  lg:text-xl">
              Payment Method
            </h1>

            <div className=" flex  items-center justify-between gap-4">
              <div className=" flex items-center justify-center lg:gap-3">
                <input type="checkbox" placeholder="sd" className=" rounded-" />
                <Link
                  href={"/payment/payment-method"}
                  className=" text-xs lg:text-lg  md:text-sm "
                >
                  Debit Card
                </Link>
              </div>
              <div className=" flex items-center justify-center lg:gap-3 md:gap-2 gap-[2px]">
                <input type="checkbox" placeholder="sd" />
                <h1 className=" text-xs  md:text-sm">Debit Card</h1>
              </div>
              <div className=" flex items-center justify-center lg:gap-3 md:gap-2 gap-[2px]">
                <input type="checkbox" placeholder="sd" />
                <h1 className="  text-xs  md:text-sm">Debit Card</h1>
              </div>
              <div className=" flex items-center justify-center lg:gap-3 md:gap-2 gap-[2px]">
                <input type="checkbox" placeholder="sd" />
                <h1 className=" text-xs  md:text-sm">Debit Card</h1>
              </div>
            </div>

            <div className=" ">
              <h1 className="   text-sm sm:text-sm md:text-lg  lg:text-xl">
                Add Payment Details
              </h1>
              <div className="flex items-start lg:items-center flex-col lg:flex-row mt-3 gap-3 lg:gap-10">
                <div className="">
                  <h1 className=" opacity-50">Enter the name</h1>
                  <input
                    type="text"
                    className="outline-none border lg:px-14 px-4 py-2 rounded-md"
                    name=""
                    id=""
                  />
                </div>
                <div className="">
                  <h1 className=" opacity-50">Card Number</h1>
                  <input
                    type="text"
                    className="outline-none border lg:px-14 px-4 py-2 rounded-md"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="flex items-start lg:items-center flex-col lg:flex-row justify mt-3 gap-3 lg:gap-10">
                <div className="">
                  <h1 className=" opacity-50">Expiry (MM/YY)</h1>
                  <input
                    type="text"
                    className="outline-none border lg:px-14 px-4 py-2 rounded-md"
                    name=""
                    id=""
                  />
                </div>
                <div className="">
                  <h1 className=" opacity-50">CVV Code</h1>
                  <input
                    type="text"
                    className="outline-none border lg:px-14 px-4 py-2 rounded-md"
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>

            <p className=" font-medium  text-sm sm:text-sm md:text-lg  lg:text-xl">
              By Clicking on ‘Confirm Payment’ I agree with the Terms and
              conditions of the Company.
            </p>
            <div className=" flex items-center gap-5">
              <button className=" border-black border lg:px-14 px-5 py-2 lg:py-3  rounded-3xl">
                Save
              </button>
              <Link
                href={"/payment/payment-method"}
                className="  bg-black text-white lg:px-14 px-5 py-2 lg:py-3  rounded-3xl"
              >
                Confirm Payment
              </Link>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className=" lg:col-start-3 lg:absolute lg:-left-[22px]">
          <div className=" container lg:min-w-[450px] mx-auto bg-white rounded-xl  px-5 py-5">
            <div className=" py-8 border px-2 rounded-2xl">
              <div className="  flex items-center justify-between ">
                <h1> Preview Invoice</h1>
                <div className="   p-3 md:p-4 lg:p-5 rounded-2xl bg-[#F8F8F8]">
                  <LuPrinter />
                </div>
              </div>
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
      </div>
    </>
  );
}

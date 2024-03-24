import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuPrinter } from "react-icons/lu";
import { invvoic } from "@/src/components/data";
import { BiPen } from "react-icons/bi";
function Invoic({ data, pen, save }) {
  return (
    <div className=" container lg:min-w-[450px] mx-auto bg-white rounded-xl lg:ml-5 lg:mr-5 px-3 py-3">
      <div className=" lg:py-8 py-3 px-2 border lg:px-5 rounded-2xl">
        <div className="  flex items-center justify-between ">
          <h1> Preview Invoice</h1>
          <div className="flex  gap-10   p-3 md:p-4 lg:p-5 rounded-2xl">
            <LuPrinter />
            {pen && (
              <Link href={"/edit-invoice"} className="bg-[#F8F8F8]">
                <BiPen />
              </Link>
            )}
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
        <div className=" flex items-end justify-end rounded-md flex-1 flex-col">
          <table className="min-w-full border rounded-xl">
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
          <div className=" hidden lg:block my-2 text-right bg-black/50 w-full h-[1px]">
            Total <span className=" ml-[140px]"> $500</span>
          </div>
          <div className=" min-w-full lg:px-5 lg:mt-5 py-3 px-2 rounded-md bg-[#F8F8F8]">
            <h1 className="  font-bold">Notes/Terms</h1>
            <p className=" opacity-50">
              Lorem ipsum dolor sit amet. Sit eaque assumenda qui.
            </p>
          </div>
        </div>
      </div>
      {save ? (
        <div className=" flex items-center gap-5">
          <button className=" flex items-end mt-10 border border-black rounded-xl px-5 py-2  ">
            {save}
          </button>
          <button className=" flex items-end mt-10 bg-black rounded-xl px-5 py-2 text-white ">
            {" "}
            {data}
          </button>
        </div>
      ) : (
        <Link href={"/create-invoice"}>
          <button className=" flex items-end mt-10 bg-black rounded-xl px-5 py-2 text-white ">
            {data}
          </button>
        </Link>
      )}
    </div>
  );
}

export default Invoic;

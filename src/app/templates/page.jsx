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

  const images = [
    "/images/template.png",
    "/images/template.png",
    "/images/template.png",
    "/images/template.png",
  ];

  return (
    <div className=" relative grid grid-cols-1 lg:grid-cols-3 ">
      <div className=" lg:col-start-1 lg:col-end-3  lg:absolute -left-2 mb-10 ">
        <div className=" pb-5">
          <h1 className=" text-xl">Invoice</h1>
          <h1 className=" text-base opacity-50">
            Create a invoice for your patients
          </h1>
          <div className=" flex items-start gap-10 border-b my-5 pb-2">
            <Link href={"/create-invoice"}>Create</Link>
            <Link className="   border-b-black border-b-2" href={"/templates"}>
              Templates
            </Link>
          </div>
        </div>
        <div className=" container bg-white  rounded-xl lg:px-6 lg:py-5 px-4 py space-y-3 lg:space-y-5">
          <div className=" grid  grid-cols-2 lg:grid-cols-3 ">
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`template-${index}`}
                width={270}
                height={300}
              />
            ))}
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
          <div className=" flex items-center gap-5">
            <button className=" flex items-end mt-10 border border-black rounded-xl px-5 py-2  ">
              {" "}
              Save
            </button>
            <button className=" flex items-end mt-10 bg-black rounded-xl px-5 py-2 text-white ">
              {" "}
              Save & Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

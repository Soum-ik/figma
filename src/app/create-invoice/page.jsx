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
    <div className=" relative grid grid-cols-1 lg:grid-cols-3 ">
      <div className=" lg:col-start-1 lg:col-end-3  lg:absolute -left-2 mb-10 ">
        <div className=" pb-5">
          <h1 className=" text-xl">Invoice</h1>
          <h1 className=" text-base opacity-50">
            Create a invoice for your patients
          </h1>
          <div className=" flex items-start gap-10 border-b my-5 pb-2">
            <Link
              className="   border-b-black border-b-2"
              href={"/create-invoice"}
            >
              Create
            </Link>
            <Link href={"/templates"}>Templates</Link>
          </div>
        </div>
        <div className=" container bg-white  rounded-xl lg:px-6 lg:py-5 px-4 py space-y-3 lg:space-y-5">
          <div className=" flex items-center justify-between gap-5">
            <div className="md:min-w-[300px] min-w-[100px] lg:min-w-[350px]">
              <p className=" opacity-50">Select Person</p>
              <input
                type="text"
                className=" rounded-md px-5 w-full py-2 border outline-none "
              />
            </div>
            <div className="md:min-w-[300px] min-w-[100px] lg:min-w-[350px]">
              <p className=" opacity-50">Innvoice Number</p>
              <input
                type="text"
                className="  rounded-md  px-5 w-full py-2 border outline-none "
              />
            </div>
          </div>
          <div className=" flex items-center justify-between gap-5">
            <div className="md:min-w-[300px] min-w-[100px] lg:min-w-[350px]">
              <p className=" opacity-50">Add a Treatment</p>
              <input
                type="text"
                className=" rounded-md px-5 w-full py-2 border outline-none "
              />
            </div>
            <div className="md:min-w-[300px] min-w-[100px] lg:min-w-[350px]">
              <p className=" opacity-50">Select Date</p>
              <input
                type="date"
                className="  rounded-md  px-5 w-full py-2 border outline-none "
              />
            </div>
          </div>
          <div className="border rounded-xl px-5 py-5">
            <div className=" border-b  flex items-center ">
              <h1 className=" text-lg opacity-50">Treatments</h1>
              <h1 className=" text-lg ml-20 opacity-50">Amount</h1>
            </div>
            <div className=" flex py-2 items-center justify-between ">
              <div className="flex gap-3">
                <h1>Anti wrinkle treatment</h1>
                <h1>$1480</h1>
              </div>

              <div className=" flex gap-3">
                <button className=" bg-black text-white lg:px-16 px-6 py-2 text-base md:text-xl rounded-3xl">
                  add
                </button>
                <button className=" border-red-400 border-2 lg:px-7 px-2 py-2 text-base  md:text-xl rounded-3xl">
                  remove
                </button>
              </div>
            </div>
          </div>
          <div className="border rounded-xl px-5 py-5">
            <div className=" border-b  flex items-center  justify-between">
              <h1 className="text-base lg:text-lg opacity-50">Treatments</h1>
              <h1 className="text-base lg:text-lg  opacity-50">Amount</h1>
              <h1 className="text-base lg:text-lg opacity-50">Treatments</h1>
              <h1 className="text-base lg:text-lg  opacity-50">Amount</h1>
            </div>
            <div className=" flex py-2  justify-between flex-col ">
              <div className="flex gap-3 items-start justify-between">
                <h1 className=" text-base">Anti wrinkle treatment</h1>
                <h1 className=" text-base">$1480</h1>
                <h1 className=" text-base">Anti wrinkle treatment</h1>
                <h1 className=" text-base">$1480</h1>
              </div>

              <div className="  items-end justify-end mt-5 flex gap-3">
                <button className=" bg-black text-white lg:px-16 px-6 py-2 text-base md:text-xl rounded-3xl">
                  add
                </button>
                <button className=" border-red-400 border-2 lg:px-7 px-2 py-2 text-base  md:text-xl rounded-3xl">
                  remove
                </button>
              </div>
            </div>
          </div>
          <div className="border rounded-xl px-5 py-5">
            <div className=" border-b  flex items-center  justify-between">
              <h1 className=" text-lg opacity-50">Skincare Items</h1>
              <h1 className=" text-lg  opacity-50">Rate</h1>
              <h1 className=" text-lg opacity-50">Qty</h1>
              <h1 className=" text-lg  opacity-50">Amount</h1>
            </div>
            <div className=" flex py-2  justify-between flex-col ">
              <div className="flex gap-3 items-start justify-between">
                <h1>Anti wrinkle treatment</h1>
                <h1>$1480</h1>
                <h1>Anti wrinkle treatment</h1>
                <h1>$1480</h1>
              </div>

              <div className="  items-end justify-end mt-5 flex gap-3">
                <button className=" bg-black text-white lg:px-16 px-6 py-2 text-base md:text-xl rounded-3xl">
                  add
                </button>
                <button className=" border-red-400 border-2 lg:px-7 px-2 py-2 text-base  md:text-xl rounded-3xl">
                  remove
                </button>
              </div>
            </div>
          </div>

          <div className=" flex  flex-col lg:flex-row  justify-between">
            <div>
              <h1> Add Notes/ Terms</h1>
              <div className=" border flex items-center justify-center rounded-lg px-2">
                <BiMicrophone />{" "}
                <input
                  type="text"
                  className="  outline-none p-2 rounded-lg"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className=" flex flex-1 items-end justify-end gap-10 pt-3">
              <div className=" space-y-5">
                <h1 className=" opacity-50">Subtotal</h1>
                <h1 className=" opacity-50">Transaction Fee 5%</h1>
                <h1 className=" opacity-50">Discount 10%</h1>
                <h1>Total</h1>
              </div>
              <div className=" space-y-5">
                <h1 className=" opacity-50">180</h1>
                <h1 className=" opacity-50">1454</h1>
                <h1 className=" opacity-50">214</h1>
                <h1>21</h1>
              </div>
            </div>
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

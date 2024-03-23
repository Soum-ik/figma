"use client";
import Done from "@/src/components/payment/done";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react"; 
import { LuPrinter } from "react-icons/lu";

export default function Page() {
  const [dot, setDot] = useState(true);
  const [showPayment, setShowPayment] = useState(false);
  function handleDot() {
    setDot(!dot);
  }
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

            <div className=" flex  items-center justify-between lg:gap-4">
              <div className=" flex items-center justify-center lg:gap-3">
                <input type="checkbox" placeholder="sd" className=" rounded-" />
                <Link
                  href={"payment-method"}
                  className=" text-xs lg:text-lg  md:text-sm "
                >
                  Debit Card
                </Link>
              </div>
              <div className=" flex items-center justify-center lg:gap-3 md:gap-2 gap-[2px]">
                <input type="checkbox" placeholder="sd" />
                <h1 className=" text-xs lg:text-lg  md:text-sm">Papel</h1>
              </div>
              <div className=" flex items-center justify-center lg:gap-3 md:gap-2 gap-[2px]">
                <input type="checkbox" placeholder="sd" />
                <h1 className="  text-xs lg:text-lg  md:text-sm">BitCoin </h1>
              </div>
              <div className=" flex items-center justify-center lg:gap-3 md:gap-2 gap-[2px]">
                <input type="checkbox" placeholder="sd" />
                <h1 className=" text-xs lg:text-lg  md:text-sm">Net Bins</h1>
              </div>
            </div>

            <div>
              <h1 className=" text-xl font-medium">Saved Card</h1>
              <div className=" flex justify-between items-center lg:py-5 py-2 px-2 md:py-3 md:px-3 lg:px-5 border my-5 rounded-md">
                <div className=" flex items-center justify-center lg:gap-5">
                  <div
                    onClick={handleDot}
                    className={` size-6 rounded-full lg:block hidden ${
                      dot ? "bg-black" : "border-2 border-black"
                    }`}
                  ></div>
                  <Image
                    src={"/images/image12.png"}
                    width={100}
                    height={200}
                    alt="visa "
                    quality={100}
                    className=" h-[20px] w-[20px ]"
                  />
                </div>
                <div className=" flex items-end justify-center flex-col lg:gap-2">
                  <h1 className="md:text-lg text-xs lg:text-xl">
                    **** **** 64644
                  </h1>
                  <h1 className="md:text-xl text-sm lg:text-2xl">VISA CARD</h1>
                </div>
              </div>
              <div>
                <Image
                  // loader={imageLoader}
                  src="/images/visa.png"
                  alt="Picture of the author"
                  width={800}
                  height={500}
                />
              </div>
            </div>

            <p className=" font-medium  text-sm sm:text-sm md:text-lg  lg:text-xl">
              By Clicking on ‘Confirm Payment’ I agree with the Terms and
              conditions of the Company.
            </p>
            <div className=" flex items-center gap-5">
              <button className=" border-black border lg:px-14 px-3 py-1 lg:py-3  rounded-3xl">
                Save
              </button>
              <button
                onClick={() => setShowPayment(!showPayment)}
                className="  bg-black text-white lg:px-14 px-3 py-1 lg:py-3  rounded-3xl"
              >
                Confirm Payment
              </button>
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

        {showPayment && <Done onClose={() => setShowPayment(!showPayment)} />}
      </div>
    </>
  );
}

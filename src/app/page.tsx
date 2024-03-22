import Image from "next/image";
import Link from "next/link";
import { LuPrinter } from "react-icons/lu";

export default function Home() {
  const data = [
    {
      name: "John Doe",
      time: "09:00 - 10:30",
      date: "22/08/2023",
      money: "$180",
      status: "active",
    },
    {
      name: "John Doe",
      time: "09:00 - 10:30",
      date: "22/08/2023",
      money: "$180",
      status: "In progress",
    },
    {
      name: "John Doe",
      time: "09:00 - 10:30",
      date: "22/08/2023",
      money: "$180",
      status: "active",
    },
    {
      name: "John Doe",
      time: "09:00 - 10:30",
      date: "22/08/2023",
      money: "$180",
      status: "active",
    },
    {
      name: "John Doe",
      time: "09:00 - 10:30",
      date: "22/08/2023",
      money: "$180",
      status: "active",
    },
    {
      name: "John Doe",
      time: "09:00 - 10:30",
      date: "22/08/2023",
      money: "$180",
      status: "active",
    },
    {
      name: "John Doe",
      time: "09:00 - 10:30",
      date: "22/08/2023",
      money: "$180",
      status: "active",
    },
  ];

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
    <div className="container text-[#4C4D4F]  ">
      <div className=" px-7 mb-10">
        <h1 className=" text-xl font-semibold mb-5">Invoice</h1>
        <p>Invoice list</p>
      </div>

      <div className="flex-col lg:flex-row  flex justify-center gap-5 ">
        {/* left part */}
        <div className="container lg:min-w-[700px] mx-auto bg-white rounded-xl lg:ml-5 lg:px-10 md:px-6 px-3 py-5">
          <div className="lg:py-8 grid grid-cols-1 ">
            <div>
              <h2 className="text-2xl font-semibold leading-tight">Users</h2>
            </div>
            <div className="my-2 flex sm:flex-row flex-col md:items-center justify-between">
              {/* this is for input feild */}
              <div className="block relative">
                <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current text-gray-500"
                  >
                    <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                  </svg>
                </span>
                <input
                  placeholder="Search"
                  className="appearance-none rounded-xl block pl-8 pr-6 py-2 w-full bg-[#F8F8F8] text-sm placeholder-gray-400 text-gray-700 focus:border focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                />
              </div>

              <div className="flex items-center  mb-1 sm:mb-0 rounded-xl">
                <div>Select Date:</div>
                <div className="relative ml-10 z-50 border-red-700 border">
                  <select className=" h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option>26aug</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* main user data */}
            <div className="md:-mx-4 sm:-mx-8 md:px-4 sm:px-2 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="lg:px-5 md:px-4 sm:px-3 px-2 lg:py-3 md:py-4 sm:py-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Patient
                      </th>
                      <th className="lg:px-5 md:px-4 sm:px-3 px-2 lg:py-3 md:py-4 sm:py-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Time
                      </th>
                      <th className="lg:px-5 md:px-4 sm:px-3 px-2 lg:py-3 md:py-4 sm:py-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="lg:px-5 md:px-4 sm:px-3 px-2 lg:py-3 md:py-4 sm:py-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Total
                      </th>
                      <th className="lg:px-5 md:px-4 sm:px-3 px-2 lg:py-3 md:py-4 sm:py-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((data, index) => (
                      <tr key={index}>
                        <td className="lg:px-5 md:px-4 sm:px-3 px-1 lg:py-5 border-b border border4bsmorde3-gray-200 bg-white text-xs md:text-sm">
                          <div className="flex items-center">
                            <div className="ml-1">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {data.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="lg:px-5 md:px-4 sm:px-3 px-1 lg:py-5 border-b border border4bsmorde3-gray-200 bg-white text-xs md:text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {data.time}
                          </p>
                        </td>
                        <td className="lg:px-5 md:px-4 sm:px-3 px-1 lg:py-5 border-b border border4bsmorde3-gray-200 bg-white text-xs md:text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {data.date}
                          </p>
                        </td>
                        <td className="lg:px-5 md:px-4 sm:px-3 px-1 lg:py-5 border-b border border4bsmorde3-gray-200 bg-white text-xs md:text-sm">
                          {data.money}
                        </td>
                        <td className="lg:px-5 md:px-4 sm:px-3 px-1 lg:py-5 border-b border border4bsmorde3-gray-200 bg-white text-xs md:text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                            <span className="relative">{data.status}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className=" text-center py-5">See more....</div>
              </div>
            </div>
          </div>
        </div>

        {/* right part */}
        <div>
          <div className=" container lg:min-w-[450px] mx-auto bg-white rounded-xl lg:ml-5 lg:mr-5 px-5 py-5">
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
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="ml-1">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {data.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {data.Rate}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {data.Qty}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {data.Amount}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex items-end justify-end  mr-16 my-5 gap-20">
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
            <Link
              href={"/create-invoice"}
               
            >
              <p className=" flex items-end mt-10 bg-black rounded-full p-4 text-white ">

              Create New Invoice
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

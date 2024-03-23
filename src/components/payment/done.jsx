"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { MdDone } from "react-icons/md";

function Done({ onClose }) {
  const route = useRouter();
  const divRef = useRef();
  const closeModel = (e) => {
    if (divRef.current === e.target) {
      route.push("/");
      onClose();
    }
  };
  return (
    <div
      ref={divRef}
      onClick={closeModel}
      className=" fixed bg-opacity-5 inset-0 bg-black backdrop-blur-sm shadow-lg flex justify-center items-center"
    >
      <div className=" bg-white rounded-xl min-w-[300px] mx-5 md:px-10 md:min-w-[400px] flex flex-col lg:py-10 py-5 lg:px-20 items-center justify-center">
        <div className="  p-3 md:p-4 lg:p-5 rounded-full bg-[#36C490] my-3 text-white">
          <MdDone size={30} />
        </div>
        <h1 className=" text-2xl text-[#36C490]">Payment Successful</h1>
        <p>Order ID #7864</p>

        <div className=" opacity-80 flex items-center justify-between min-w-[280px] md:min-w-[350px] mt-10">
          <div>
            <h1>Payment Type</h1>
            <h1>Moblie</h1>
            <h1>Bank</h1>
            <h1>Mail</h1>
          </div>
          <div className=" flex flex-col items-end">
            <h1>Net Banking</h1>
            <h1>HDFC</h1>
            <h1>444545454 5544</h1>
            <h1>bdebashis182@gmail.com</h1>
          </div>
        </div>
        <div className="  flex items-center justify-between min-w-[280px] md:min-w-[350px] mt-10">
          <div className=" space-y-2 font-medium">
            <h1>Amount Paid</h1>
            <h1>Transaction ID</h1>
          </div>
          <div className=" space-y-2 flex flex-col items-end font-medium">
            <h1>$180.00</h1>
            <h1>#123456789065432</h1>
          </div>
        </div>

        <div className=" flex items-center justify-center gap-2 mx-5 md:gap-5 mt-10">
          <button
            onClick={onClose}
            className=" md:px-[20px] md:py-[10px] py-[6px] shadow-2xl px-[14px] bg-black text-white rounded-lg"
          >
            {" "}
            Send to mail
          </button>
          <button
            onClick={onClose}
            className=" md:px-[20px] md:py-[10px] py-[6px] shadow-2xl px-[14px] bg-black text-white rounded-lg"
          >
            Claim Reward points
          </button>
        </div>
      </div>
    </div>
  );
}

export default Done;

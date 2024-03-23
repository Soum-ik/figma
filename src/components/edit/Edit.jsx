"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { FaGift } from "react-icons/fa";
function Edit({ onClose }) {
  const route = useRouter();
  const divRef = useRef();
  const closeModel = (e) => {
    if (divRef.current === e.target) {
      onClose();
    }
  };

  function handleSubmit() {
    onClose();
    route.push("/");
  }
  const generateInvoice = () => {
    const treatmentsSubtotal = treatments.reduce((total, treatment) => total + treatment.amount, 0);
    const productsSubtotal = products.reduce((total, product) => total + (product.price * product.quantity), 0);
    const total = treatmentsSubtotal + productsSubtotal;

    const invoice = {
      treatments: treatments,
      products: products,
      subtotal: treatmentsSubtotal + productsSubtotal,
      total: total
    };

    console.log("Generated Invoice:", invoice);
  };
  return (
    <div
      ref={divRef}
      onClick={closeModel}
      className=" fixed bg-opacity-5 inset-0 bg-black backdrop-blur-sm shadow-lg flex justify-center items-center"
    >
      <div className=" bg-white rounded-xl min-w-[300px] mx-5 md:px-10 md:min-w-[500px] flex flex-col lg:py-10 py-5 lg:px-20 items-center justify-center">
        <Image
          src={"/images/mainlogo.png"}
          width={300}
          alt="logo"
          height={200}
        />
        <div className=" !mx-5  bg-[#FFF9F1] w-full flex items-center justify-center gap-10 mt-10 rounded-2xl md:py-10 py-5  px-10 md:px-20 ">
          <h1 className=" text-base md:text-xl">Current Reward Points</h1>
          <h1 className=" text-base md:text-xl flex  items-center gap-3"><FaGift size={30}/> 430 Points</h1>
        </div>
        <div className=" mt-10 mx-3 px-2">
          <h1 className="text-sm md:text-lg">
            Enter number of Reward point you want to use for discount in current
            invoice
          </h1>
          <div className=" mt-6 p-3 border">
            <input
              type="text"
              className="outline-none"
              placeholder="Enter number"
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className=" bg-black text-white text-sm md:text-lg lg:text-xl rounded-xl lg:px-10 px-5 py-2 mt-10 lg:py-4"
        >
          Add Dicount
        </button>
      </div>
    </div>
  );
}

export default Edit;

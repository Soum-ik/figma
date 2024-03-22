import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
function Navbar() {
  return (
    <div className=" px-5 md:px-2 lg:px-0 my-2 bg-[##FFFFFF] flex items-center justify-between container">
      <div className=" lg:hidden p-3 md:p-4 lg:p-5 rounded-2xl bg-[#F8F8F8]">
        <CiMenuBurger />
      </div>

      <Image
        src={"/images/mainlogo.png"}
        width={150}
        height={300}
        alt="main logo"
      />

      <div className=" font-normal text-[#4C4D4F] flex items-center justify-center lg:gap-10">
        <div className="lg:flex hidden gap-10">
          <h1>Sunday, 20 August</h1>
          <h1>1:50 PM</h1>
        </div>
        <div className=" p-3 md:p-4 lg:p-5 rounded-2xl bg-[#F8F8F8]">
          <FaRegBell />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import { useState } from "react";
import { FaUser } from "react-icons/fa";
import {Link} from "react-router-dom";


const Myparcels = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="relative flex items-end justify-end mr-[20%] mt-[5%]  font-semibold cursor-pointer">
        <div className="flex items-center text-white" onClick={handleOpen}>
          <FaUser className="mr-[10px]" />
          Alok Mondala
        </div>
        {open && (
          <div className="absolute top-[20px] right-0 h-[200px] w-[250px] bg-white z-[999] shadow-xl">
            <ul className="flex flex-col items-center justify-center mt-[10px] text-[#555]">
             <Link to="/allparcels">
             <li className="hover:text-[#fff] my-[5px] cursor-pointer">
                All parcels 
              </li>
             </Link>
              <li className="hover:text-[#fff] my-[5px] cursor-pointer">
                Statements
              </li>
              <li className="hover:text-[#fff] my-[5px] cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex flex-col ml-[10%]">
        <h2 className="text-[18px] text-[#d9d9d9] p-[20px]">My Parcels</h2>
        <div className="flex justify-between bg-[#d9d9d9] h-[150px] w-[70vw] m-[20px] p-[20px] cursor-pointer ">
          <div>
            <ul>
              <li>From:Mangalore,India</li>
              <li>Weight: 200g</li>
              <li>Date:19/12/2024</li>
              <li>Sender:Sudeep</li>
            </ul>
          </div>
          <div className="flex flex-col ">
            <span>To:hyderbad ,India</span>
            <button className="bg-[#555] text-white w-[100px] cursor-pointer p-[5px]">
              Pending
            </button>
          </div>
        </div>
        <div className="flex justify-between bg-[#d9d9d9] h-[150px] w-[70vw] m-[20px] p-[20px] cursor-pointer ">
          <div>
            <ul>
              <li>From:Mangalore,India</li>
              <li>Weight: 200g</li>
              <li>Date:19/12/2024</li>
              <li>Sender:Sudeep</li>
            </ul>
          </div>
          <div className="flex flex-col ">
            <span>To:hyderbad ,India</span>
            <button className="bg-[#555] text-white w-[100px] cursor-pointer p-[5px]">
              Pending
            </button>
          </div>
        </div>
        <div className="flex justify-between bg-[#d9d9d9] h-[150px] w-[70vw] m-[20px] p-[20px] cursor-pointer ">
          <div>
            <ul>
              <li>From:Mangalore,India</li>
              <li>Weight: 200g</li>
              <li>Date:19/12/2024</li>
              <li>Sender:Sudeep</li>
            </ul>
          </div>
          <div className="flex flex-col ">
            <span>To:hyderbad ,India</span>
            <button className="bg-[#24de07] text-white w-[100px] cursor-pointer p-[5px]">
            Delevered
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myparcels;

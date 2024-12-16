import {
  FaHome,
  FaUser,
  FaBox,
  FaUsers,
  FaClipboard,
  FaElementor,
  FaCog,
  FaHdd,
  FaChartBar,
  FaCalendarAlt,
} from "react-icons/fa"; // Import FaHome and others
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="h-[90vh] shadow-xl">
      <ul className="flex flex-col items-center justify-center mt-[20px]">
        <Link to="/">
          <li className="flex items-center text-[#D7D7D7] text-[20px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
            <FaHome className="mr-[15px]" />{" "}
            {/* Add margin to the right of the icon */}
            Home
          </li>
        </Link>
        <li className="flex items-center text-[#D7D7D7] text-[20px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
          <FaUser className="mr-[15px]" />{" "}
          {/* Add margin to the right of the icon */}
          Profile
        </li>
        <hr className="h-[20px]" />
        <Link to="/parcels">
        <li className="flex items-center text-[#D7D7D7] text-[20px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
          <FaBox className="mr-[15px]" />{" "}
          {/* Add margin to the right of the icon */}
          Parcels
        </li>
        </Link>
      
        <Link to="/Users">
        <li className="flex items-center text-[#D7D7D7] text-[20px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
          <FaUsers className="mr-[15px]" />{" "}
          {/* Add margin to the right of the icon */}
          Users
        </li>
        </Link>
        <li className="flex items-center text-[#D7D7D7] text-[20px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
          <FaClipboard className="mr-[15px]" />{" "}
          {/* Add margin to the right of the icon */}
          Orders
        </li>
        <hr className="h-[20px]" />

        <li className="flex items-center text-[#D7D7D7] text-[20px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
          <FaElementor className="mr-[15px]" />{" "}
          {/* Add margin to the right of the icon */}
          Elements
        </li>

        <li className="flex items-center text-[#D7D7D7] text-[20px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
          <FaCog className="mr-[15px]" />{" "}
          {/* Add margin to the right of the icon */}
          Settings
        </li>

        <li className="flex items-center text-[#D7D7D7] text-[20px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
          <FaHdd className="mr-[15px]" />{" "}
          {/* Add margin to the right of the icon */}
          Backups
        </li>
        <hr className="h-[20px]" />

        <li className="flex items-center text-[#D7D7D7] text-[20px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
          <FaChartBar className="mr-[15px]" />{" "}
          {/* Add margin to the right of the icon */}
          Charts
        </li>
        <li className="flex items-center text-[#D7D7D7] text-[20px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
          <FaClipboard className="mr-[15px]" />{" "}
          {/* Add margin to the right of the icon */}
          All Logs
        </li>
        <li className="flex items-center text-[#D7D7D7] text-[20px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
          <FaCalendarAlt className="mr-[15px]" />{" "}
          {/* Add margin to the right of the icon */}
          Calendar
        </li>
      </ul>
    </div>
  );
};

export default Menu;

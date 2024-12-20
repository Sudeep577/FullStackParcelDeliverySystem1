import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[100px] bg-gradient-to-r from-[#6448E5] to-[#48C6EF] flex items-center justify-between px-10">
      <Link to="/">
      <img
        src="/logo.png"
        alt="Logo"
        height="200px"
        width="200px"
        border="solid black"
        className="rounded-full shadow-b"
        style={{
          backgroundColor: "#E9EB77",
          boxShadow: "0 4px 10px rgba(2, 0, 3, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
        }}
      />
       
      </Link>
      <button className="text-white text-[18px] px-4 py-2 rounded-md bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] shadow-lg hover:shadow-2xl">
        Logout
      </button>
    </div>
  );
};

export default Navbar;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="h-[100px] bg-gradient-to-r from-purple-600 to-blue-500 text-white p-8 flex items-center justify-between px-10 shadow-lg border-b-[4px] border-[#1c6baf] rounded-b-[10px]"
      style={{
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
      }}
    >
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

      <Link to="/login">
        <button
          className="bg-gradient-to-r from-[#c41d8c] to-[#2a5298] p-[10px] text-gray-200 cursor-pointer border-none w-[100px] rounded-lg hover:scale-105 transition-transform duration-300"
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          Login
        </button>
      </Link>
    </div>
  );
};

export default Navbar;

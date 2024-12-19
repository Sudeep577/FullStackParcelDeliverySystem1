// import { useState } from "react";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="h-[80vh] flex items-center justify-evenly p-[50px] text-gray-300">
//         <img src="/hero.png" alt="Hero" className="max-w-[40%] h-auto" />
//         <div className="h-[450px] w-[450px] bg-[#E9EB77] rounded-md shadow-lg flex flex-col items-center justify-center">
//           <input
//             type="text"
//             name="email"
//             placeholder="Enter your email"
//             className="bg-white p-[15px] w-[85%] m-[10px] rounded-md outline-none border border-gray-400"
//           />
//           <div className="relative w-[85%]">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Enter your password"
//               className="bg-white p-[15px] w-full rounded-md outline-none border border-gray-400"
//             />
//             <span
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 right: "10px",
//                 transform: "translateY(-50%)",
//                 cursor: "pointer",
//                 fontSize: "20px",
//               }}
//               onClick={handleTogglePassword}
//             >
//               {showPassword ? "👁️" : "🔒"}
//             </span>
//           </div>
//           <button className="bg-black w-[350px] p-[15px] text-white font-semibold text-[18px] m-[10%]">Login</button>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Login;
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-purple-800 to-blue-900">
      <Navbar />
      <div className="flex flex-row h-[90vh] items-center justify-center">
        {/* Left Section with Image */}
        <div className="flex-1 bg-black-600 flex items-center justify-center relative p-10">
          {/* Hero Image */}
          <img src="/hero.png" alt="Hero" className="max-w-[100%] h-auto" />

          {/* SendIT Text */}
          <div
            className="absolute top-[15%] left-[10%] text-white text-6xl font-bold"
            style={{ letterSpacing: "2px" }}
          >
            SendIT
          </div>
        </div>

        {/* Right Section - Styled Login Form */}
        <div className="flex-1 bg-[#0D0C1D] rounded-lg shadow-2xl p-10 flex flex-col items-center justify-center relative">
          <h1 className="text-4xl text-white font-bold mb-4">Welcome to SendIT</h1>
          <p className="mb-6 text-gray-400">Login in to your account to continue</p>

          <div className="w-[80%]">
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Email"
                className="w-full p-4 rounded-full bg-[#1E1E2E] text-white placeholder-gray-400 border-none outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-4 rounded-full bg-[#1E1E2E] text-white placeholder-gray-400 border-none outline-none focus:ring-2 focus:ring-purple-600"
              />
              <span
                onClick={handleTogglePassword}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              >
                {showPassword ? "👁️" : "🔒"}
              </span>
            </div>
          </div>

          <a href="#" className="text-purple-400 mb-6 text-sm hover:text-purple-300">
            Forgot your password?
          </a>

          <button className="w-[80%] p-4 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all shadow-lg">
            LOG IN
          </button>

          <p className="text-gray-400 mt-4">
            Don’t have an account?{" "}
            <a href="#" className="text-purple-400 font-semibold hover:text-purple-300">
              Sign up
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

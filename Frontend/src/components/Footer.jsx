// const Footer = () => {
//   return (
//     <div className="h-[300px] bg-[#E9EB77] flex items-center justify-between p-[30px]">
//       <div className="flex flex-col">
//         <img src="/logo.png" alt="" height="200px" width="200px" />
//         <span className="w-[70%]">
       
//           We understand that your parcels carry more than just items— they carry
//           your trust. Committed to excellence,
//         </span>
//         <span>+15432332727 </span>
//         <span>info@SendIT </span>
       
//       </div>
//       <div className="flex flex-col">
//       <span>Design by sudxxp K.c </span>
//       <span>&copy; copyright 2024</span>
//       </div>
//     </div>
//   );
// };

// export default Footer;
const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-8 shadow-2xl relative">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center pb-6 border-b border-gray-400">
        <div className="relative">
          <h2 className="text-2xl font-semibold mb-2 drop-shadow-lg">
            We understand that your parcels carry more than just items — they carry your trust.
          </h2>
          <p className="text-gray-200 drop-shadow-md">Committed to excellence.</p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <button
            aria-label="Sign up for free"
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition shadow-md transform hover:-translate-y-1"
          >
            Sign up free →
          </button>
          <button
            aria-label="Contact sales"
            className="bg-white text-gray-800 px-6 py-2 rounded-full hover:bg-gray-200 transition shadow-lg transform hover:-translate-y-1"
          >
            Contact sales →
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6">
        {/* Box Icon */}
        <div className="flex-shrink-0">
          <img
            src="/logo.png"
            alt="SendIT Company Logo"
            height="200"
            width="200"
            className="rounded-full shadow-md"
            style={{
              backgroundColor: "#E9EB77",
              boxShadow: "0 4px 10px rgba(2, 0, 3, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        {/* Footer Text */}
        <div className="flex flex-col text-gray-200 mt-4 md:mt-0 text-center md:text-left drop-shadow-lg">
          <span>+15432332727</span>
          <span>info@SendIT.com</span>
          <span>Design by Sudxxp K.c</span>
          <span>&copy; 2024 SendIT. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

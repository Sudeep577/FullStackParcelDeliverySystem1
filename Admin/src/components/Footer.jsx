const Footer = () => {
  return (
    <div className="h-[200px] bg-gradient-to-r from-purple-500 to-blue-500 text-white flex flex-col items-center justify-center">
     
    
      <div className="flex space-x-4 mt-4">
       
      </div>
      <div className="mt-8 flex flex-col items-center">
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
        <p className="text-xs mt-1">&copy; 2024 SendIT. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

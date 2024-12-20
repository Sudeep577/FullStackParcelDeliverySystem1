import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { publicRequest } from "../requestMethods";

const NewParcel = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleAddParcel = async (e) => {
    try {
      await publicRequest.post("/parcels", inputs);

      toast.success("parcel has been added successfully in database")
    } catch (e) {
      console.log(error);
    }
  };

  return (
    <div className="m-[30px] bg-white p-[20px]">
      <h2 className="font-semibold text-lg">New Parcel</h2>
      <div className="flex flex-wrap">
        {/* Left Section */}
        <div className="m-[20px]">
          <div className="flex flex-col my-[20px]">
            <label htmlFor="from">From</label>
            <input
              type="text"
              name="from"
              onChange={handleChange}
              placeholder="Ontario USA"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="to">To</label>
            <input
              type="text"
              name="to"
              onChange={handleChange}
              placeholder="Michigan, USA"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="senderName">Sender Name</label>
            <input
              type="text"
              name="sendername"
              onChange={handleChange}
              placeholder="James Doe"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="recipientName">Recipient Name</label>
            <input
              type="text"
              name="recipientname"
              onChange={handleChange}
              placeholder="Sudeep"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="senderEmail">Sender Email</label>
            <input
              type="email"
              name="senderemail"
              onChange={handleChange}
              placeholder="James@example.com"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="recipientEmail">Recipient Email</label>
            <input
              type="email"
              name="recipientemail"
              onChange={handleChange}
              placeholder="Sudeep@example.com"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="m-[20px]">
          <div className="flex flex-col my-[20px]">
            <label htmlFor="weight">Weight</label>
            <input
              type="number"
              name="weight"
              onChange={handleChange}
              placeholder="200g"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="cost">Cost</label>
            <input
              type="number"
              name="cost"
              onChange={handleChange}
              placeholder="$200"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              placeholder="2024-12-30"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="note">Note</label>
            <textarea
              type="text"
              name="text"
              onChange={handleChange}
              placeholder="Perishable goods"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            ></textarea>
          </div>
          <button
            className="bg-[#1e1e1e] hover:bg-[#333] text-white p-[10px] w-[300px]"
            onClick={handleAddParcel}
          >
            Create
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default NewParcel;

import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { publicRequest } from "../requestMethods";

const Parcel = () => {
  const location = useLocation();
  const parcelId = location.pathname.split("/")[2];
  const [parcel, setParcel] = useState({});

  useEffect(() => {
    const getParcel = async () => {
      try {
        const res = await publicRequest.get("/parcels/find/" + parcelId);
        setParcel(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getParcel();
  }, [parcelId]);

  return (
    <div className="flex flex-col items-center justify-center mt-10 mx-5">
      <div className="bg-gray-100 h-auto w-[80vw] rounded-lg shadow-lg p-6">
        <Link to="/myparcels">
          <FaArrowLeft className="text-gray-600 text-[18px] mb-4 cursor-pointer hover:text-gray-800 transition" />
        </Link>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left Section */}
          <div className="flex-1 bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Parcel Details</h2>
            <ul className="space-y-3 text-gray-700">
              <li>From: <span className="font-medium">{parcel.from}</span></li>
              <li>Weight: <span className="font-medium">{parcel.weight} kg</span></li>
              <li>Date: <span className="font-medium">{parcel?.date}</span></li>
              <li>Sender: <span className="font-medium">{parcel.sendername}</span></li>
              <li>To: <span className="font-medium">{parcel.to}</span></li>
              <li>Cost: <span className="font-medium">${parcel.cost}</span></li>
              <li>Receiver: <span className="font-medium">{parcel.recipientname}</span></li>
              <li>Track ID: <span className="font-medium">{parcel._id}</span></li>
              <li>Note: <span className="font-medium">{parcel.note}</span></li>
            </ul>
            <button
              className={`mt-6 px-6 py-2 rounded-full text-white font-medium ${
                parcel.status === 1
                  ? "bg-gray-500 cursor-pointer"
                  : "bg-green-500 cursor-pointer"
              } hover:opacity-90 transition`}
            >
              {parcel.status === 1 ? "Pending" : "Delivered"}
            </button>
          </div>

          {/* Right Section */}
          <div className="flex-1 bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact Information</h2>
            <ul className="space-y-3 text-gray-700">
              <li>Sender Email: <span className="font-medium">{parcel.senderemail}</span></li>
              <li>Recipient Email: <span className="font-medium">{parcel.recipientemail}</span></li>
            </ul>
            <textarea
              cols={50}
              rows={7}
              placeholder="Leave a feedback"
              className="w-full mt-6 p-4 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button className="mt-4 bg-blue-600 text-white px-8 py-2 rounded-full font-medium hover:bg-blue-700 transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parcel;

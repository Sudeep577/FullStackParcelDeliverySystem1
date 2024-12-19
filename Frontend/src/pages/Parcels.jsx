import { FaArrowLeft} from "react-icons/fa";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

const Parcels = () => {

  const rows = [
    {
      id: 1,
      from: "New York",
      to: "Los Angeles",
      sendername: "John Doe",
      recipientname: "Jane Smith",
      note: "Urgent delivery",
      cost: 150,
      _id: "1",
    },
    {
      id: 2,
      from: "San Francisco",
      to: "Chicago",
      sendername: "Alice Johnson",
      recipientname: "Bob Brown",
      note: "Handle with care",
      cost: 200,
      _id: "2",
    },
    {
      id: 3,
      from: "Miami",
      to: "Houston",
      sendername: "Emily Davis",
      recipientname: "Michael Green",
      note: "Gift inside",
      cost: 100,
      _id: "3",
    },
  ];
  
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    { field: "sendername", headerName: "Sender Name", width: 150 },
    { field: "recipientname", headerName: "Recipient Name", width: 130 },
    { field: "from", headerName: "From", width: 130 },
    { field: "to", headerName: "To", width: 150 },
    { field: "cost", headerName: "Cost ($)", type: "number", width: 150 },
   
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-[3%] mr-[5%] ml-[5%]">
      <div className="bg-[#fff] h-auto w-[70vw] rounded-md p-[30px]">
        <Link to="/myparcels">
          <FaArrowLeft className="text-[#444] text-[18px] m-2 cursor-pointer" />
        </Link>

        <div className="flex justify-between p-[10px] ">
        <span className="text-[18px] text-[#444]">
          All Parcels
        </span>
        <span className="font-semibold text-[#444]">
         Alok Mondala
        </span>


        </div>
        <div className="p-3">
        <DataGrid rows={rows} columns={columns} 
          checkboxSelection
        />
        
        </div>
      </div>
    </div>
  );
};

export default Parcels;

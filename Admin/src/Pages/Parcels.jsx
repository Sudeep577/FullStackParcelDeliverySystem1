import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

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
  {
    field: "edit",
    headerName: "Edit",
    width: 150,
    renderCell: (params) => (
      <Link to={`/parcel/${params.row._id}`}>
        <button
          className="bg-teal-300 text-white cursor-pointer w-[70px]"
          aria-label={`Edit parcel with ID ${params.row._id}`}
        >
          Edit
        </button>
      </Link>
    ),
  },
  {
    field: "delete",
    headerName: "Delete",
    width: 150,
    renderCell: (params) => <FaTrash />,
  },
];

const Parcels = () => {
  return (
    <div className="m-[30px] bg-white p-[20px]">
      <div className="flex items-center justify-between">
        <h1 className="m-[20px] text-[20px]">All Parcels</h1>
       <Link to="/newparcel">
       <button className="bg-black text-white p-[10px]">New Parcel</button>
       </Link>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        autoHeight
        disableSelectionOnClick
      />
    </div>
  );
};

export default Parcels;

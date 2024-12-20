import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";

const Users = () => {
  const [data, setData] = useState([]);
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    { field: "fullname", headerName: "Full Name", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "age", headerName: "Age", type: "number", width: 100 },

    { field: "address", headerName: "Address", width: 300 },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => (
        <FaTrash className="text-red-500 cursor-pointer m-2 "onClick={()=>handleDelete(params.row._id)} />
      ),
    },
  ];

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await publicRequest.get("/users");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  });

  const handleDelete = async(id) => {
  try {
 await publicRequest(`/users/${id}`);
 window.location.reload();
  } catch (error) {
 console.log(error)
  }
  }

  return (
    <div className="m-[30px] bg-white p-[20px]">
      <div className="flex items-center justify-between">
        <h1 className="m-[20px] text-[20px]">All Users</h1>
        <Link to="/newuser">
          <button className="bg-black text-white p-[10px]">New User</button>
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row._id}
        checkboxSelection
        autoHeight
        disableSelectionOnClick
      />
    </div>
  );
};

export default Users;

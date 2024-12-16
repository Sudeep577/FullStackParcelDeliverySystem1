import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'fullName', headerName: 'Full Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'age', headerName: 'Age', type: 'number', width: 100 },
  
  { field: 'address', headerName: 'Address', width: 300 },
   {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => <FaTrash />,
    },
  ];


const rows = [
  { id: 1, fullName: 'John Doe', email: 'john.doe@example.com', age: 30, country: 'USA', address: '123 Main St' },
  { id: 2, fullName: 'Alice Brown', email: 'alice.brown@example.com', age: 25, country: 'Canada', address: '456 Maple Ave' },
  { id: 3, fullName: 'Chris Evans', email: 'chris.evans@example.com', age: 35, country: 'UK', address: '789 Oak St' },
  { id: 4, fullName: 'Laura Wilson', email: 'laura.wilson@example.com', age: 28, country: 'USA', address: '321 Pine Rd' },
  { id: 5, fullName: 'Peter Parker', email: 'peter.parker@example.com', age: 22, country: 'USA', address: '101 Web St' },
  { id: 6, fullName: 'Tony Stark', email: 'tony.stark@example.com', age: 48, country: 'USA', address: 'Avengers Tower' },
  { id: 7, fullName: 'Bruce Wayne', email: 'bruce.wayne@example.com', age: 40, country: 'USA', address: 'Wayne Manor' },
  { id: 8, fullName: 'Diana Prince', email: 'diana.prince@example.com', age: 32, country: 'Greece', address: 'Themyscira' },
  { id: 9, fullName: 'Natasha Romanoff', email: 'natasha.romanoff@example.com', age: 29, country: 'Russia', address: 'Red Room' },
  { id: 10, fullName: 'Scott Lang', email: 'scott.lang@example.com', age: 37, country: 'USA', address: '555 Ant Ave' },
];
   
   
const Users = () => {
  return (
    <div className="m-[30px] bg-white p-[20px]">
      <div className="flex items-center justify-between">
        <h1 className="m-[20px] text-[20px]">All Users</h1>
        <button className="bg-black text-white p-[10px]">New User</button>
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

export default Users;

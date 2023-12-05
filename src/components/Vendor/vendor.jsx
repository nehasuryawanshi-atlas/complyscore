import React, { useEffect, useState } from "react";
import { Breadcrumb } from "../Layout/Breadcrumb";
import { Button, Typography } from "@mui/material";
import { variables } from "../Variable";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
const columns = [
  {
    field: "EntityID",
    headerName: "Vendor ID",
    width: 100,
    headerClassName: "bg-neutral-200",
  },
  {
    field: "EntityName",
    headerName: "Vendor Name",
    width: 250,
    headerClassName: "bg-neutral-200 ",
  },
  {
    field: "AliasName",
    headerName: "Alias Name",
    width: 150,
    headerClassName: "bg-neutral-200 ",
  },
  {
    field: "Department",
    headerName: "Department",
    width: 200,
    headerClassName: "bg-neutral-200 ",
  },
  {
    field: "Status",
    headerName: "Status",
    width: 150,
    headerClassName: "bg-neutral-200 ",
  },
];
export const Vendor = () => {
  const [vendorList, setVendorList] = useState([]);

  useEffect(() => {
    console.log("Vendor Component");
    fetch(variables.API_URL + "vendor")
      .then((data) => data.json())
      .then((data) => setVendorList(data));
    // console.log(vendorList);
  }, [vendorList]);

  return (
    <>
      <div className="flex flex-row ">
        <Breadcrumb /> &nbsp;
        <Typography color="primary" fontSize="0.75rem">
          Vendor{" "}
        </Typography>
      </div>
      <div>
       <Button color="primary">All</Button>
       <Button>By Me</Button>
      </div>
      <Box sx={{ height: 450, mt: 5 }}>
        <DataGrid
          sx={{ border: "1px solid gray", boxShadow: "0 0 8px 0 gray" }}
          rows={vendorList}
          columns={columns}
          getRowId={(vendorList) => vendorList.EntityID}
        />
      </Box>
    </>
  );
};

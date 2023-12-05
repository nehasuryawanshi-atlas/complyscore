import React, { useEffect, useState } from "react";
import { variables } from "../Variable";
import { DataGrid } from "@mui/x-data-grid";
import { Breadcrumb } from "../Layout/Breadcrumb";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
const columns = [
  {
    field: "PK_AuditID",
    headerName: "Assessment Id",
    width: 150,
    headerClassName: "bg-neutral-200 ",
  },
  {
    field: "AccountID",
    headerName: "Entity Name",
    width: 150,
    headerClassName: "bg-neutral-200 ",
  },
  {
    field: "Description",
    headerName: "Description",
    width: 200,
    headerClassName: "bg-neutral-200 ",
  },
  {
    field: "AssignedTo",
    headerName: "Assigned To",
    width: 200,
    headerClassName: "bg-neutral-200 ",
  },
  {
    field: "FK_Status",
    headerName: "Status",
    width: 200,
    headerClassName: "bg-neutral-200 ",
  },
  {
    field: "AddedOn",
    headerName: "Creation Date",
    width: 100,
    headerClassName: "bg-neutral-200 ",
  },
];

export const Assessement = () => {
  const [assessmentList, setAssessmentList] = useState([]);
  useEffect(() => {
    console.log("Assessment Component");
    fetch(variables.API_URL + "assessments")
      .then((data) => data.json())
      .then((data) => setAssessmentList(data));
  }, [assessmentList]);
  return (
    <div>
      <div className="flex flex-row ">
        <Breadcrumb /> &nbsp;
        <Typography color="primary" fontSize="0.75rem">
          Assessemnt List{" "}
        </Typography>
      </div>
      <Box sx={{ height: 450, mt: 5, width: 900 }}>
        <DataGrid
          sx={{ border: "1px solid gray", boxShadow: "0 0 8px 0 gray" }}
          rows={assessmentList}
          columns={columns}
          getRowId={(assessmentList) => assessmentList.PK_AuditID}
        />
      </Box>
    </div>
  );
};

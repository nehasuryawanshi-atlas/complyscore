import React, { useEffect } from "react";
import { Breadcrumb } from "../Layout/Breadcrumb";
import { Typography } from "@mui/material";

export const Vendor=()=>{
    useEffect(()=>{
        fetch('/api/Student')
        .then((response)=>console.log(response))
    },[]);
    return(
        <div className="flex flex-row ">
            <Breadcrumb/>  &nbsp;<Typography color="primary" fontSize="0.75rem" >Vendor </Typography>
        </div>
    )
}
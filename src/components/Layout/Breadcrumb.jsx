import { Typography } from "@mui/material";
import React from "react";
import {Link} from 'react-router-dom'

export const Breadcrumb=()=>{
    return(
        <div>
            <Typography color="primary" fontSize="0.75rem"><Link to='/'>Dashboard</Link>&nbsp;&#10187;</Typography>         
        </div>
    )
}
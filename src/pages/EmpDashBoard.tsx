//import React, { useEffect } from "react";
// import mainLogo from "../utils/1.png";
import PersonIcon from "@mui/icons-material/Person";
import "./DasBoard.css";
//import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import DeviceUnknownIcon from "@mui/icons-material/DeviceUnknown";
import {Link} from 'react-router-dom'
//import { CenterFocusStrong } from "@mui/icons-material";
function EmpDashBoard(props:any) {
// var loginUsr=useParams()
// loginUsr=JSON.parse(loginUsr.loggedInUser)
// console.log(loginUsr)
// if(loginUsr.isAdmin===true){
//   return(
//     <>
//     <h1>I am Admin page</h1>
//     </>
//   )
// }
// else{
  return (
    <>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <h2> DashBoard </h2>
      </div>
      <div>
        <Grid container justifyContent="space-around" sx={{ marginTop: 12 }}>
          <div>
            <Link to="/dashboard/profile">
            <Grid
              item
              sx={{
                display: 'flex',
                justifyContent:'center',
                width: "250px",
                height: "244px",
                border: "2px solid black",
                backgroundColor: "#cbcbcb",
              }}
            >
              <PersonIcon
                sx={{
                 
                  width: 100,
                  height: 100,
                  marginTop: 7,
                }}
              ></PersonIcon>
            </Grid>
            </Link>
          </div>
          <Link to="/dashboard/asset">
          <Grid
            item
            sx={{
              width: "250px",
              height: "244px",
              border: "2px solid black",
              backgroundColor: "#cbcbcb",
              display: 'flex',
                justifyContent:'center'
            }}
          >
            <WebAssetIcon
              sx={{
               
                width: 100,
                height: 100,
                marginTop: 7,
              }}
            ></WebAssetIcon>
          </Grid>
          </Link>
          <Link to="/dashboard/request">
          <Grid
            item
            sx={{
              width: "250px",
              height: "244px",
              border: "2px solid black",
              backgroundColor: "#cbcbcb",
              display: 'flex',
                justifyContent:'center'
            }}
          >
            <DeviceUnknownIcon
              sx={{
                width: 100,
                height: 100,
                marginTop: 7,
              }}
            ></DeviceUnknownIcon>
          </Grid>
          </Link>
        </Grid>
      </div>
    </>
  );
}
//}

export default EmpDashBoard;

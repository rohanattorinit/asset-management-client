import { Grid } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";
function EmployeeProfile() {
  return (
    <>
      <div>
        <div>
          <h3>profile</h3>
        </div>
        <Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "250px",
              height: "244px",
              border: "2px solid black",
              backgroundColor: "#cbcbcb",
              alignContent: "center",
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
          <Grid sx={{ marginLeft: "10px" }}>
            <Typography variant="h6">Name:{"ARCHANA"}</Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default EmployeeProfile;

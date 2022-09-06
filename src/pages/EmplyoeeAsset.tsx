import React from "react";
import { Grid } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
//Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Button from "@mui/material";
function EmplyoeeAsset() {
  return (
    <>
      <div>
        <div>
          <h3>Asset</h3>
        </div>
        <Grid container>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "250px",
              height: "244px",
              border: "2px solid black",
              backgroundColor: "#cbcbcb",
              marginLeft: "10px",
            }}
          >
            <Grid>
              <PersonIcon
                sx={{
                  width: 100,
                  height: 100,
                  marginTop: 7,
                  marginLeft: "50px",
                }}
              ></PersonIcon>

              <Typography variant="h6">Employee ID:{"21TCS259"}</Typography>
            </Grid>
          </Grid>
          <Grid sx={{ marginLeft: "10px" }}>Current Asset</Grid>
        </Grid>
      </div>
    </>
  );
}

export default EmplyoeeAsset;

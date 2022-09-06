import React from "react";
import { Grid } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
//Button from "@mui/material/Button";
import { Box } from "@mui/system";

function EmplyoeeAsset() {
  return (
    <>
      <div>
        <div>
          <h3>Asset</h3>
        </div>
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
          <PersonIcon
            sx={{
              width: 100,
              height: 100,
              marginTop: 7,
            }}
          ></PersonIcon>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {/* <Button variant="contained">Edit</Button> */}
          </Box>
        </Grid>
      </div>
    </>
  );
}

export default EmplyoeeAsset;

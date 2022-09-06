import React from 'react'
import PersonIcon from "@mui/icons-material/Person";
import mainLogo from "../utils/1.png";
import "./DasBoard.css"

function Header() {
  return (
    <>
   <div className="header">
        <div className="img">
          <img src={mainLogo} alt="" width="250px" height="60" />
        </div>
        <PersonIcon
          sx={{
            width: 50,
            height: 50,
            position: "absolute",
            right: 6,
            top: 30,
          }}
        ></PersonIcon>
      </div>
   </>
  )
}

export default Header
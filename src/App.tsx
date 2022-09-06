import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
//import BoxSx from "./pages/BoxSx";
import EmpDashBoard from "./pages/EmpDashBoard";
//import EmplyoeeAsset from "./pages/EmplyoeeAsset";
//import EmployeeProfile from "./pages/EmployeeProfile";
//import EmpServRequest from "./pages/EmpServRequest";
import Header from "./component/Header";
//import SideBar from "./component/SideBar";
//import { Route} from "react-router-dom";
import Playground from "./pages/PlayGround";
import { Route, Routes } from "react-router-dom";
function App() {
  /*State Declaration Section*/
  const [isLoginSuccessful, setLoginStatus] = useState(false);
  // const [isUserAdmin, setAdminStatus] = useState(null)
  //   if (!isLoginSuccessful) {
  //     return (
  //       <>
  //         <Login setLoginStatus={setLoginStatus} setAdminStatus={setAdminStatus}/>
  //       </>
  //     );
  //   } else {
  //     if (isUserAdmin) {
  //       return (
  //         <>
  // <h1>Hi i am admin</h1>
  //         </>
  //       )
  //     }
  //     else {
  return (
    <>
      {/* {isLoginSuccessful?<Header/>:""} */}
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dash/:loggedInUser"
          element={<EmpDashBoard setLoginStatus={setLoginStatus} />}
        />

        <Route path="/dashboard/:option" element={<Playground />} />
      </Routes>
    </>
  );
  //   }
  // }
}

export default App;
 
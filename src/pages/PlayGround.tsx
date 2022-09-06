import {useParams} from 'react-router-dom'
import SideBar from '../component/SideBar'
import EmployeeProfile from './EmployeeProfile'
import EmployeeAsset from './EmplyoeeAsset'
import EmpServRequest from './EmpServRequest'
import { Grid } from '@mui/material'
function Playground(){
    var navMenu=useParams()
   if(navMenu.option==="profile"){
    return(
        <>
        <Grid container>
        <Grid sx={{display: "flex", height : "650px", width:"20%" ,backgroundColor: "#cbcbcb"}}>
        <SideBar navMenuOption={navMenu.option}/>
        </Grid>
        <Grid justifyContent="space-around" >
         <EmployeeProfile/> 
        </Grid>
        </Grid>
        </>
    )
   }
   else if(navMenu.option==="asset"){
    return(
        <>
        <Grid container>
        <Grid sx={{display: "flex", height : "650px", width:"20%" ,backgroundColor: "#cbcbcb"}}>
        <SideBar navMenuOption={navMenu.option}/>
        </Grid>
        <Grid justifyContent="space-around">
        <EmployeeAsset/>
        </Grid>
        </Grid>
        </>
    )
   }
   else{
    return(
        <>
        <Grid container>
        <Grid sx={{display: "flex", height : "650px", width:"20%" ,backgroundColor: "#cbcbcb"}}>
        <SideBar navMenuOption={navMenu.option}/>
        </Grid>
        <Grid>
        <EmpServRequest/>
        </Grid>
        </Grid>
        </>
    )
   }
}
export default Playground
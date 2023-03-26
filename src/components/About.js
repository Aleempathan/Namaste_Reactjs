// import { Outlet } from "react-router-dom"
import Profile from "./Profile"
import Profilefun from "./profilefunct"

const About = () => {
return (
    <>
    <h1>About Us</h1>
    {/* <Outlet /> */}
    <Profile name={"Aleem Nasiyathulla class Component"} xyz="abc"/>

    {/* <Profilefun name={"Aleem Nasiyathulla functional Component"}/> */}
    </>
    

)

}

export default About;
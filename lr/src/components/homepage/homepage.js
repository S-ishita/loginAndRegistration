import React from "react";
import "./homepage.css"
import {useNavigate} from "react-router-dom"

const Homepage=()=>{
    const navigate=useNavigate()
    return (
        <div className="homepage">
            <h1>hello homepage</h1>
    <div className="button" onClick={()=>navigate("/")}>Logout</div>
           
    </div>
    )
}
 
export default Homepage
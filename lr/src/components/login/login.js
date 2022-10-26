import React,{useState} from "react";
import "./login.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Login=()=>{

    const navigate=useNavigate()
    const [ user, setUser] = useState({
        email:"",
        password:"",
     
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    } 

    const login = () => {
        const {email, password} = user
        if(email && password){
            axios.post("http://localhost:9002/register", user)
            .then( res =>console.log(res))
        } else {
            alert("invlid input")
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={()=>navigate("/home")}>Login</div>
            <div>or</div>
            <div className="button" onClick={()=>navigate("/register")}>Register</div>
        </div>
    )
}
 
export default Login
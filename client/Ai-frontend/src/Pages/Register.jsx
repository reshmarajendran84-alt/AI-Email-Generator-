import { useState } from "react";
import api from "../Services/api";
import { useNavigate } from "react-router-dom";
function Register(){
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]= useState("");
    const navigate =useNavigate();
    const handleSubmit =async(e)=>{
        e.preventDefault();
        try{
           const response =await api.post(
            "/auth/register",
            {username,
            email,
            password
           }
        ); 
        navigate("/login");
        console.log(response.data);
        }catch(error){
            console.log(error.response.data);
        }
    }

return (
    <>
<h1>Register</h1>
<form onSubmit={handleSubmit}>
    <input type="username" placeholder="Enter user name" value={username} onChange={(e)=>setUsername(e.target.value)}/>
    <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button >Sign Up</button>
</form>
    </>
)
}
export default Register;
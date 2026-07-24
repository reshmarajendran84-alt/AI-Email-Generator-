import { Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import GenerateEmail from "./Pages/GenerateEmail";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

function App(){
return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element ={<Register/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path ="/history" element ={<History/>}/>
        <Route path ="/generateEMail" element={<GenerateEmail/>}/>
        <Route path ="/dashboard" element={<Dashboard/>}/>
        <Route path ="/loader" element={<Loader/>}/>
        <Route path="/footer" element ={<Footer/>}/>

    </Routes>
    </>
    
);
}
export default App;
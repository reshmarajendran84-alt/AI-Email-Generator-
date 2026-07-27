import { Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import GenerateEmail from "./Pages/GenerateEmail";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import  History from "./Pages/History";
import Logout from "./Pages/Logout";
function App(){
return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element ={<Register/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path ="/history" element ={<ProtectedRoute>
         <History/> 
           </ProtectedRoute>}/>
        <Route path ="/generate" element={<ProtectedRoute>
           
           <GenerateEmail/>
            </ProtectedRoute>}/>
        <Route path ="/dashboard" 
        element={
        <ProtectedRoute>
            <Dashboard/>
        </ProtectedRoute>
    }/>
        <Route path ="/loader" element={<Loader/>}/>
        <Route path="/footer" element ={<Footer/>}/>
<Route path="/logout" element={<Logout/>}/>
    </Routes>
    </>
    
);
}
export default App;
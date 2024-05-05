import { Outlet,useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import NavBar from "./components/NavBar";

function App() {
 const [isloggedin,setisloggedin]=useState(false);
 const navigate=useNavigate();
 const login=()=>{
  setisloggedin(true);
 }
 const logout=()=>{
  setisloggedin(false);
 }
 useEffect(()=>{
  if(isloggedin){
    navigate("/")
  }else{
    navigate("/login");
  }
 },[isloggedin]);
   return (
    <div className="app">
      {isloggedin?<NavBar logout={logout}/>:<navigate to="{/>login}"/>}
      <Outlet context={login}/>
    </div>
  );
}

export default App;
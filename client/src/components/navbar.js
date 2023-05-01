import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { DefleMode} from "./DefleMode"

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("UserID")
  };
  return (
    <div className="navigate"><div className="desktopflex">
      <div className="logo"><img src={process.env.PUBLIC_URL + '/furn-logo-desk.png'} width="470px" height="60px" alt="Logo" /></div>
      
      {!cookies.access_token ? ( <div>
        <ul className="nav justify-content-end">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/auth">Login/Register</Link></li>
        <li className="nav-item"><DefleMode /></li></ul></div>
      ) : ( <div>
        <ul className="nav justify-content-end">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/create-patch">Add A Patch</Link></li>
        <li className="nav-item"><Link className="nav-link" onClick={logout} to="/auth"> Logout </Link></li>
        <li className="nav-item"><DefleMode /></li></ul></div>
      )} 
    </div></div>
    
  );
};
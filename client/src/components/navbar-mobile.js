import React from "react";
import { useCookies } from "react-cookie";
import { DefleMode} from "./DefleMode"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const NavbarMobile = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("UserID")
  };
  return (
    <div className="navmobile">
      <img className="logomobile" src={process.env.PUBLIC_URL + '/furn-logo.png'} width="60px" height="60px" alt="Logo" />
      
      {!cookies.access_token ? ( <DropdownButton id="dropdown-basic-button" title="Menu">
        <Dropdown.Item href="/">Home</Dropdown.Item>
        <Dropdown.Item className="nav-link" href="/auth">Login/Register</Dropdown.Item>
        </DropdownButton>
      ) : ( <DropdownButton id="dropdown-basic-button" title="Menu">
        <Dropdown.Item href="/">Home</Dropdown.Item>
        <Dropdown.Item href="/create-patch">Add A Patch</Dropdown.Item>
        <Dropdown.Item onClick={logout} to="/auth"> Logout </Dropdown.Item>
        </DropdownButton>
      )} <DefleMode />
    </div>
  );

};
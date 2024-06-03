import React, { useContext } from "react";
import NavBar from "./NavBar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import CartContext from "../ContextApi/CartContext";
import "./Header.css";
const Header = () => {

  const { productList } = useContext(CartContext);

  return (
    <>
      <div className="header-container">
        <div className="header-logoBar flexBox">
          <div className="logo">
            <Link to={'/'}>
              <img className="image" src="./image/amazonlog.png" alt="Amazon Logo" />
            </Link>
          </div>
         
        </div>
        <div className="header-menuBar flexBox">
          <Link to={"/dashboard"} className="dashboard-link">
            <div className="dashboard-button">Dashboard</div>
          </Link>
          <Link to={"/policies"} className="dashboard-link">
            <div className="dashboard-button">Policies</div>
          </Link>
          <Link to={"/CartPage"}>
          </Link>
        </div>
      </div>
      <NavBar />
    </>
  );
};

export default Header;

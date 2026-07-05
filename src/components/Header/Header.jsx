import { Link } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo-container">
        <span className="logo-text">TKD Store</span>
      </Link>
      <NavBar />
    </header>
  );
};

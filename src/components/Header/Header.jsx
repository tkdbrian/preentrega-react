import { Link } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <span className="logo-text">TKD Store</span>
        </Link>
      </div>
      <NavBar />
    </header>
  );
};

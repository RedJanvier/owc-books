import React from "react";
import Header from "../components/Navbar/Navbar";
import "../styles/App.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="App">
      <Header />
      <h1 style={{ color: "white", marginTop: "20rem" }}>
        Opps Page not found. Go back{" "}
        <Link to="/" style={{ color: "yellow", textDecoration: "none" }}>
          Home
        </Link>
      </h1>
    </div>
  );
};

export default NotFoundPage;

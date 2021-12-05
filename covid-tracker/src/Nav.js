import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link style={{ color: "white", textDecoration: "none" }} to="/">
        <div style={{ fontSize: "17px" }}>
        C<i class="bx bxs-virus-block bx-tada"></i>VID TRACKER</div>
      
      </Link>
      <ul className="nav-links">
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginTop: "10px",
            marginRight: "40px",
          }}
          to="/overview"
        >
          <li>Overview</li>
        </Link>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginTop: "10px",
            marginRight: "40px",
          }}
          to="/symptom"
        >
          <li>Symptom</li>
        </Link>
        <Link
         style={{
          color: "white",
          textDecoration: "none",
          marginTop: "10px",
          marginRight: "40px",
        }}
          to="/prevention"
        >
          <li>Prevention</li>
          
        </Link>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginTop: "10px",
            marginRight: "40px",
          }}
          to="/graph"
        >
          <li>Graph</li>
          
        </Link>

      </ul>
    </nav>
  );
}

export default Nav;

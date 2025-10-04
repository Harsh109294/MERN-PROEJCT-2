import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ padding: "50px" }}>
      <h2>Dashboard</h2>
      <Link to="/add-agent">Add Agent</Link>
    </div>
  );
};

export default Dashboard;

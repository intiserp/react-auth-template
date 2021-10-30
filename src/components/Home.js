import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      This is a React Firebase Auth template
      <br />
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default Home;

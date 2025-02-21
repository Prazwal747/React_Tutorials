import React from "react";

const Hello = ({ username }) => {
  return (
    <div>
      <h1>Welcome , {username ? username : "Guest"}!</h1>
    </div>
  );
};

export default Hello;

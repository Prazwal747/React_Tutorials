import React from "react";
import "./Style.css";

const Demo = ({ flag }) => {
  const style = flag ? "primary" : "";
  return (
    <div>
      <h1 className={`${style} font-xl`}>StyleSheet</h1>
    </div>
  );
};

export default Demo;

import { Children } from "react";

const Headercmp = ({ name, children }) => {
  return (
    <div>
      <h1>Hello Welocme {name}</h1>
      {children}
    </div>
  );
};

export default Headercmp;

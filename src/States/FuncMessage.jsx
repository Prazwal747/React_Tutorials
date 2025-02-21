import { useState } from "react";

const FuncMessage = () => {
  const [name, setNameState] = useState("Rudra");

  const handleclick = () => {
    setNameState("Silver Fox");
  };

  return (
    <div>
      <h1>Welcome {name}</h1>
      <button onClick={handleclick}>Daba </button>
    </div>
  );
};

export default FuncMessage;

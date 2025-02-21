import { useState } from "react";

const ButtonValue = () => {
  const company = ["geek", "for", "geeks"];
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % company.length);
  };

  return (
    <div>
      <button onClick={handleClick}>{company[index]}</button>
    </div>
  );
};

export default ButtonValue;

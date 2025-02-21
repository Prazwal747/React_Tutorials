const Child = (props) => {
  return (
    <div>
      <button onClick={() => props.greetHandler("Child Component")}>
        click me for alert
      </button>
    </div>
  );
};

export default Child;

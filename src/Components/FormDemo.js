const FormDemo = () => {
  const onInputChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <form>
        <label>Enter Text</label>
        <input type="text" onChange={onInputChange}></input>
      </form>
    </div>
  );
};

export default FormDemo;

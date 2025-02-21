function EventCheck() {
  function apple() {
    alert("comeom");
  }
  return (
    <div className="test">
      <h1>Hello World click from Function type</h1>
      <button onClick={apple}>Submit</button>
    </div>
  );
}

export default EventCheck;

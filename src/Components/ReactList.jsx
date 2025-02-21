function ReactList() {
  const items = ["apple", "orange", "cherry"];

  return (
    <div>
      <h1>Hello welcome to market</h1>
      <ul>
        {items.map((item, index) => (
          <ul key={index}>{item}</ul>
        ))}
      </ul>
    </div>
  );
}

export default ReactList;

const CondRend = () => {
  const user = [
    { id: 1, name: "geek", age: 31 },
    { id: 2, name: "for", age: 32 },
    { id: 3, name: "geeks", age: 5 },
  ];

  return (
    <div>
      <li>Users conditional rendered</li>
      {user.map((user) =>
        user.age > 31 ? (
          <li>{user.name} is over 30</li>
        ) : (
          <li>{user.name} is under 30</li>
        )
      )}
    </div>
  );
};

export default CondRend;

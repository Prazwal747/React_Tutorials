let users = [
  { id: 1, name: "admi" },
  { id: 2, name: "sali" },
  { id: 3, name: "aja bidle" },
];

const UserList = () => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name + " " + user.id}</li>
      ))}
    </ul>
  );
};

export default UserList;

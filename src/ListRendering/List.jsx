import Person from "./Person";

const PersonList = () => {
  const persons = [
    { id: 1, name: "Prazwal", age: 24 },
    { id: 2, name: "CCAr", age: 24 },
    { id: 3, name: "ravan", age: 24 },
    { id: 4, name: "ssd", age: 24 },
  ];
  let personlist = persons.map((item) => (
    <h1>
      {item.name} is {item.age}
    </h1>
  ));
  return <Person listItem={personlist} />;
};

export default PersonList;

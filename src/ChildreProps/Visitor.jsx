import Headercmp from "./Header";

const Visitor = () => {
  const loggedIn_user = "Guest";

  return (
    <div>
      <Headercmp name={loggedIn_user}>
        {loggedIn_user == "Guest" ? <h1>Guest dont have full access</h1> : null}
      </Headercmp>
    </div>
  );
};

export default Visitor;

import Greet from "./Greetings";
import Meetings from "./Meetings";

const PropsSender = () => {
  return (
    <div>
      <Greet name="prazwal" /> //we send props from this function component
      <Greet name="Ana de armaz">
        <h1>Ana is lob</h1>
      </Greet>
      {/* <Meetings name="Ana de armazzzzzzz" />
      <Meetings name="Ana de armazz" /> */}
    </div>
  );
};

export default PropsSender;

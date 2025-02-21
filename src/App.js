import logo from "./logo.svg";
import "./App.css";
// import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/JsxLearn";
import ReactList from "./Components/ReactList";
import UserList from "./Components/UserList";
import CondRend from "./Components/CondRendering";
import AppClick from "./Components/Handleclick.jsx";
import ButtonValue from "./Components/ButtonValue.jsx";
import FormDemo from "./Components/FormDemo.js";
import Greet from "./Props/Greetings.jsx";
import PropsSender from "./Props/PropsSender.jsx";
import Shukriya from "./PropsWithClassComponent/Shukriya.jsx";
import Message from "./States/Message.jsx";
import FuncMessage from "./States/FuncMessage.jsx";
import CountExample from "./States/CountExample.jsx";
// import Demo from "./DestructuringProps/Demo.jsx";
import ClassDemo from "./DestructuringProps/ClassDemo.jsx";
import Handler from "./EvenTHandling/Handler.jsx";
import EventBinding from "./EventBinding/EventBinding.jsx";
import Parent from "./MethodProps/Parent.jsx";
import ifElse from "./ConditionalRendering/IfElse.jsx";
import Check from "./ConditionalRendering/IfElse.jsx";
import List from "./ListRendering/List.jsx";
import headercmp from "./ChildreProps/Header.jsx";
import Headercmp from "./ChildreProps/Header.jsx";
import Visitor from "./ChildreProps/Visitor.jsx";
import Demo from "./Styling/Demo.jsx";
import Inline from "./Styling/inline.js";
import "./appjs.css";
import styles from "./appJs.module.css";

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <Welcome />
      <Hello />
      <ReactList />
      <UserList />
      <CondRend />
      <AppClick />
      <ButtonValue />
      <FormDemo /> */}
      {/* <PropsSender />
      <Shukriya name="lana del ray" /> */}
      {/* <Message /> */}
      {/* <FuncMessage /> */}
      {/* <CountExample /> */}
      {/* <Demo name="ana de armas" HeroName="Cat"></Demo> */}
      {/* <ClassDemo name="ana de arams" HeroName="Cat" /> */}
      {/* <Handler /> */}
      {/* <EventBinding /> */}
      {/* <Parent /> */}
      {/* <Check /> */}
      {/* <List /> */}
      {/* <Headercmp /> */}
      {/* <Visitor /> */}
      {/* <Demo flag={false} />
      <Inline /> */}
      <h1 className="error">Hello World</h1>
      <h1 className={styles.success}>Hello World</h1>
    </div>
  );
}

export default App;

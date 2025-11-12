import Mood from "./Mood.jsx";
import { useState } from "react";
import "./App.css";
import CreateAccount from './createAccount';

function initalMood() {
  console.log("running...");
  return "Happy";
}

function App() {
  // // const [myMood, setMyMood] = useState(() => initialMood());
  // const [myMood, setMyMood] = useState(() => {
  //   console.log("running...");
  //   return "Happy";
  // });

  // const [count, setCount] = useState(() => {
  //   console.log("running...");
  //   return 0;
  // });

  // const [user, setUser] = useState({ fname: "prasad", age: 24 });
  // fname = user.fname;
  // age = user.age;
  // setUser(...user, user.fname);

  // const isLoggedIn = true;

  // // let someComponent = "";

  // // if (isLoggedIn) {
  // //   someComponent = <Mood mood={myMood} />;
  // // } else {
  // //   someComponent = <P>Hello</P>;
  // // }

  // // const [myMood, setMyMood] = useState({ name:"bharat" });

  // function handleMood() {
  //   setMyMood("sad");

  //   // setMyMood(myMood.name = "bharat", myMood.age);
  //   // console.info(myMood)
  // }

  // function handleCount() {
  //   setCount((prevCount) => prevCount + 1);
  //   setCount((prevCount) => prevCount + 1);
  // }

  return (
    <div>
      {/* conditional rendering without else */}
      {/* {isLoggedIn && <Mood mood={myMood} />}  */}

      {/* <Mood mood={myMood} />

      conditional rendering with else
      {isLoggedIn ? <Mood mood={myMood} /> : <p>Hello</p>}

      {/* {someComponent}
      <button id="update-button" className="btn" onClick={handleMood}>
        Update
      </button>

      {count}
      <button onClick={handleCount}>Update count</button>

      <li></li> */}

      <CreateAccount />

    </div>
  );
}

export default App;

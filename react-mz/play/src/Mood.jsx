import { useContext } from "react";
import { MoodContext } from "./MoodContext";

function Mood() {
  const { mood } = useContext(MoodContext);

  return (
    <div>
      <p>I am {mood}</p>
    </div>
  );
}

export default Mood;

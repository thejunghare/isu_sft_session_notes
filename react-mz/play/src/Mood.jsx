import { useContext } from "react";
import { MoodContext } from "./MoodContext";

function Mood() {
  const { myMood } = useContext(MoodContext);

  return (
    <div>
      <p>I am {myMood}</p>
    </div>
  );
}

export default Mood;

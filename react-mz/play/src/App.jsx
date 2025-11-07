import Mood from "./Mood.jsx";
import { useState, useEffect } from "react";
import "./App.css";
import { MoodContext } from "./MoodContext.jsx";
import SignUp from "./SignUp.jsx";

const songsJson = [
  { id: 1, title: "a", mood: "Happy" },
  { id: 2, title: "b", mood: "sad" },
  { id: 3, title: "c", mood: "Happy" },
  { id: 4, title: "d", mood: "sad" },
];

function App() {
  const [mood, setMood] = useState("Happy");
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("I am first useEffect!");
    // setSongs(songsJson);
    // setFilteredSongs(songsJson);
  }, []);

  useEffect(() => {
    const filtered = songs.filter((song) => song.mood === mood);
    setFilteredSongs(filtered);
  }, [mood, songs]);

  function handleCount() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  return (
    // <MoodContext.Provider value={{ mood, setMood }}>
    //   <Mood />

    //   <button id="update-button" className="btn" onClick={() => setMood("sad")}>
    //     Update Mood
    //   </button>

    //   <p>Count: {count}</p>
    //   <button onClick={handleCount}>Update count</button>

    //   <ul>
    //     {filteredSongs.map((song) => (
    //       <li key={song.id}>{song.title}</li>
    //     ))}
    //   </ul>
    // </MoodContext.Provider>
    //
    <SignUp />
  );
}

export default App;

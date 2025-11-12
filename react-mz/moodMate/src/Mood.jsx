import { MoodContext } from './context/MoodContext';
import { useContext } from 'react';

function Mood() {
  const { mood, setMood } = useContext(MoodContext)
  return (
    <div>
      <p>I am {mood}</p>
      <button onClick={() => setMood("sad")}>update state of mood</button>
    </div>
  )
}

export default Mood;


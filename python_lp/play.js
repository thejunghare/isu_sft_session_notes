import Mood from './Mood.js'
import { useState, useEffect } from 'react'
import './App.css'

function initialMood() {
  console.log('function called')
  return 'Happy'
}

function App() {
  // const [myMood, setMyMood] = useState(() => initialMood());
  const [myMood, setMyMood] = useState(function () {
    console.log('running...')
    return 'Happy'
  })

  const [page, setPage] = useState(1)

  const [todos, setTodos] = useState(function () {
    console.log('running...')
    return []
  })

  const [user, setUser] = useState({ fname: 'prasad', age: 24 })
  const fname = user.fname
  const age = user.age

  function updateAgeByOneYearly() {
    setUser((prev) => ({ ...prev, age: prev.age + 1 }))
    setUser((prev) => ({ ...prev, age: prev.age + 1 }))

    setPage((prev) => prev + 1)
  }

  const isLoggedIn = true

  // let someComponent = "";

  // if (isLoggedIn) {
  //   someComponent = <Mood mood={myMood} />;
  // } else {
  //   someComponent = <P>Hello</P>;
  // }

  // const [myMood, setMyMood] = useState({ name:"bharat" });

  function handleMood() {
    setMyMood('sad')
    // setMyMood(myMood.name = "bharat", myMood.age);
    // console.info(myMood)
  }

  useEffect(() => {
    console.log(user.age)
    fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
      .then((response) => response.json())
      .then((json) => setTodos(json))
  }, [user.age, page])

  return (
    <div>
      {/* conditional rendering without else */}
      {/* {isLoggedIn && <Mood mood={myMood} />}  */}

      <Mood mood={myMood} />

      {/* conditional rendering with else */}
      {isLoggedIn ? <Mood mood={myMood} /> : <p>Hello</p>}

      {/* {someComponent}*/}
      <button id="update-button" className="btn" onClick={handleMood}>
        Update
      </button>
      <div>
        <p> {`my name is ${fname}  and my age is   ${age}`}</p>

        <button onClick={updateAgeByOneYearly}>update age</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App

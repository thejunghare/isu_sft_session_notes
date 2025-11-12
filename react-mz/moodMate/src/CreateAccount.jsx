import { useState } from 'react'

const userData = {
  username: "",
  email: "",
  password: "",
  role: ""
}

function CreateAccount() {
  // const [username, setUsername] = useState('')
  // const [email, setEmail] = useState('')

  const [user, setUser] = useState(userData)

  const handleCreateAccount = () => {
    // console.log(document.getElementById('username').value)
    // console.log(username)
    console.log(`You entered username: ${user.username} email:  ${user.email} password: ${user.password} with role ${user.role}`)
  }

  return (
    <div>
      <form onSubmit={handleCreateAccount}>
        {/* username, email, password, gender, role, subscribe */}

        <input
          required
          type="text"
          placeholder="Enter you username"
          value={user.username}
          onChange={(e) =>
            setUser({ ...user, username: e.target.value })
          }
          id="username"
        />

        <input
          required
          type="text"
          placeholder="Enter you email"
          value={user.email}
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
          id="email"
        />

        <input
          required
          type="password"
          placeholder="Enter you password"
          value={user.password}
          onChange={(e) =>
            setUser({ ...user, password: e.target.value })
          }
          id="password"
        />

        <select
          required
          value={user.role}
          onChange={(e) =>
            setUser({ ...user, role: e.target.value })
          }
        >

          <option value="" disabled>Choose your role</option>
          <option value="Student">Student</option>
          <option value="Teacher">Techaer</option>
        </select>

        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}

export default CreateAccount

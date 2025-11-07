import { useState } from "react";

const signUpFormData = {
  username: "",
  useremail: "play@gmail.com",
  subscribe: true,
  password: "1233",
  role: "",
  gender: "",
};

function SignUp() {
  const [signUpData, setSignUpData] = useState(signUpFormData);

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(
      `${signUpData.username} ${signUpData.useremail} ${signUpData.password} ${signUpData.subscribe} ${signUpData.role}  ${signUpData.gender}`,
    );
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Enter your username"
          value={signUpData.username}
          onChange={(e) =>
            setSignUpData({ ...signUpData, username: e.target.value })
          }
          id="username"
        />

        <input
          required
          type="checkbox"
          checked={signUpData.subscribe}
          onChange={(e) =>
            setSignUpData({ ...signUpData, subscribe: e.target.checked })
          }
        />

        <select
          required
          value={signUpData.role}
          onChange={(e) =>
            setSignUpData({ ...signUpData, role: e.target.value })
          }
        >
          <option value="" disabled>
            Select an Option
          </option>
          <option value="Student">Student</option>
          <option value="Techer">Techer</option>
        </select>

        <div>
          <label>What's your gender </label>
          <label>
            Male
            <input
              required
              type="radio"
              name="gender"
              value="Male"
              checked={signUpData.gender === "Male"}
              onChange={(e) =>
                setSignUpData({ ...signUpData, gender: e.target.value })
              }
            />
          </label>
          Female
          <label>
            <input
              required
              type="radio"
              name="gender"
              value="Female"
              checked={signUpData.gender === "Female"}
              onChange={(e) =>
                setSignUpData({ ...signUpData, gender: e.target.value })
              }
            />
          </label>
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;

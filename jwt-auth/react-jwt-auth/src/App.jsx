import {useState} from "react";
import './index.css'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [authError, setAuthError] = useState(null)
  const [isSecretShown, setIsSecretShown] = useState(false)
  const [secretMessage, setSecretMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = { username, password };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Login failed: ${response.status}`);
      }

      const result = await response.json();
      console.log("Success! Here are your tokens:", result);

      localStorage.setItem("access_token", result.access)
      setAuthError(null)
    } catch (error) {
      setAuthError(error.message);
    } finally {
      setIsSecretShown(true)
      setUsername('')
      setPassword('')
    }
  }

  async function fetchSecretData() {
    const token = localStorage.getItem("access_token");

    console.log("token", token)

    if (!token) {
      setIsSecretShown(false);
      setAuthError("Authentication is required to access hidden resources!")
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/test/auth/', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        const data = await response.json();
        setSecretMessage(data.message + " - Secret: " + data.secret_code);
      } else {
        setSecretMessage("Access Denied! Token might be expired.");
      }

      setIsSecretShown(true);
    } catch(error) {
      console.error("Oops!", error.message);
    }
  }

  return (
    <div>
      <div>
        <h2>
          Form using JWT for Authentication
        </h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="username">Username</label><br/>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Password">Password</label><br/>
            <input
              id="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <span className="error">{authError}</span><br/>
          <button type="submit">Submit</button>
        </form>

      </div>
      <div>
        <h2>Secret Resources Library</h2>
        <section>
          <button onClick={fetchSecretData}>Show hidden resources</button>
          <br/>
          { isSecretShown && <span className="secret">{secretMessage}</span>}
        </section >
      </div>
    </div>
  )
}

export default App

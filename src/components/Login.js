import { useState } from 'react'
import axios from 'axios'
import '../App.css'
import { Navigate } from 'react-router-dom'

export default function Login({ setAuth, isLoggedIn }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (event) => {
    // prevent the default action of the form, which is to make a request
    event.preventDefault()
    // clear errors since we could be re-submitting form data
    setError('')
    // Make an ajax request to the backend's URL for login
    // Use the username and password from state to send in the request body
    const url = 'https://drf-library-api.herokuapp.com/api/auth/token/login'
    axios
      .post(url, {
        username: username,
        password: password,
      })
      .then((res) => {
        setAuth(username, res.data.auth_token)
      })
      .catch((e) => setError(e.message))
  }

  if (isLoggedIn) {
    return <Navigate to="/" replace={true} />
  }

  return (
    <div className="Login container-box">
      <h2 className="title">Log In</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleLogin}>
        <div className="field">
          <label className="label" htmlFor="username">
            Username
          </label>
          <div className="control">
            <input
              type="text"
              id="username"
              className="input"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="password">
            Password
          </label>
          <div className="control">
            <input
              type="password"
              id="password"
              className="input"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <button type="submit" className="button is-primary">
            Log in
          </button>
        </div>
      </form>
    </div>
  )
}

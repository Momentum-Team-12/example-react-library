import useLocalStorageState from 'use-local-storage-state'
import Login from './components/Login'
import { BookList } from './components/BookList'
import { BookDetail } from './components/BookDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import axios from 'axios'

const App = () => {
  //use local storage to keep this token hanging around
  const [token, setToken] = useLocalStorageState('reactLibraryToken', '')
  const [username, setUsername] = useLocalStorageState(
    'reactLibraryUsername',
    ''
  )

  const setAuth = (username, token) => {
    setToken(token)
    setUsername(username)
  }

  const isLoggedIn = username && token

  const handleLogout = () => {
    // log out on the server
    axios
      .post(
        'https://drf-library-api.herokuapp.com/auth/token/logout',
        {},
        {
          headers: { Authorization: `token ${token}` },
        }
      )
      .then((res) => {
        setAuth('', '')
      })
  }

  return (
    <>
      <Router>
        <header className="header container">
          <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        </header>
        <Routes>
          {isLoggedIn ? (
            <Route
              path="/"
              element={<BookList token={token} isLoggedIn={isLoggedIn} />}
            />
          ) : (
            <Route
              path="/login"
              element={<Login setAuth={setAuth} isLoggedIn={isLoggedIn} />}
            />
          )}
          <Route path="/books/:bookPk" element={<BookDetail token={token} />} />
          <Route
            path="/login"
            element={<Login setAuth={setAuth} isLoggedIn={isLoggedIn} />}
          />
        </Routes>
      </Router>

      {/*  */}
    </>
  )
}

export default App

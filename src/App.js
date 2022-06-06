import useLocalStorageState from 'use-local-storage-state'
import Login from './components/Login'
import { BookList } from './components/BookList'
import { BookDetail } from './components/BookDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

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
    setAuth('', '')
  }

  return (
    <>
      <Router>
        <header className="header container">
          <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        </header>
        <Routes>
          <Route path="/" element={<BookList token={token} />} />
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

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import SearchForm from './SearchForm'

const NavBar = ({ handleLogout, isLoggedIn, token }) => {
  const currentLocation = useLocation()

  return (
    <header className="header container">
      <nav
        className="navbar level"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="level-left">
          <div className="is-size-1 has-text-dark py-3 px-3 level-item">
            <Link to="/">
              <span className="icon is-large mr-1">
                <i className="fa-solid fa-book-bookmark"></i>
              </span>
              Books
            </Link>
          </div>
        </div>
        <div className="level-right m-2 ">
          <SearchForm token={token} />
        </div>
        <div className="level-right mr-5">
          {currentLocation.pathname !== '/login' && (
            <div className="buttons level-item">
              {!isLoggedIn ? (
                <>
                  <Link to="register" className="button is-primary">
                    <strong>Sign up</strong>
                  </Link>
                  <Link to="login" className="button is-light">
                    Log in
                  </Link>
                </>
              ) : (
                <Link to="/" className="button is-link" onClick={handleLogout}>
                  Log Out
                </Link>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
export default NavBar

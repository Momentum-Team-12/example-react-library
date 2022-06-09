import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchForm = ({ token }) => {
  const searchInput = useRef()
  const navigate = useNavigate()
  const [results, setResults] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const searchTerm = searchInput.current.value
    axios
      .get('https://drf-library-api.herokuapp.com/api/books', {
        params: { search: searchTerm },
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setResults(res.data)
      })
  }

  useEffect(() => {
    if (results) {
      navigate('/search-results', { state: results })
    }
    const inputRef = searchInput.current
    // Returning a function from a useEffect gives us the ability to "clean up"
    // before the component renders again.
    // https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
    // Here, we use it to clear out the results and the search input
    return () => {
      setResults(null)
      inputRef.value = ''
    }
  }, [navigate, results])

  return (
    <form onSubmit={handleSubmit} className="level">
      <div className="level-item">
        <div className="field has-addons">
          <div className="control">
            <input
              className="input is-info is-small"
              type="text"
              placeholder="🔎 search by title"
              ref={searchInput}
            />
          </div>
          <div className="control">
            <button className="button is-link is-outlined is-small">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default SearchForm

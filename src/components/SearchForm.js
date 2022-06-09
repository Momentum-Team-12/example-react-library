import axios from 'axios'
import { useRef } from 'react'
const SearchForm = ({ token }) => {
  const searchInput = useRef()

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
      .then((res) => {})
  }

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

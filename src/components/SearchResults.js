import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import BackButton from './BackButton'
import { BookCard } from './BookCard'
const SearchResults = () => {
  const { state } = useLocation()
  console.log(state)

  return (
    <>
      <BackButton path="/" />
      <section className="section">
        <h1 className="title">Search Results </h1>
        <div className="book-list container-box">
          {state && state.length > 0 ? (
            state.map((book) => (
              <BookCard
                key={book.pk}
                title={book.title}
                bookId={book.pk}
                featured={book.featured}
              />
            ))
          ) : (
            <div className="empty notification is-warning">No results</div>
          )}
        </div>
      </section>
    </>
  )
}

export default SearchResults

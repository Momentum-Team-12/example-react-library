import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const BookDetail = ({ token }) => {
  const [book, setBook] = useState(null)
  const { bookPk } = useParams()

  useEffect(() => {
    axios
      .get(`https://drf-library-api.herokuapp.com/api/books/${bookPk}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setBook(res.data)
        // slugify res.data.title
        // programmatically change the url here
      })
  }, [bookPk, token])

  return (
    <>
      <div>
        <Link to="/">Go Back</Link>
      </div>
      {book && (
        <>
          <div className="book content container-box" id={book.pk}>
            <h2>{book.title}</h2>
            <div className="details">
              <p>{book.author}</p>
              <p>{book.publication_year}</p>
            </div>
          </div>
        </>
      )}
    </>
  )
}

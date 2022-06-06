import { Link, Navigate } from 'react-router-dom'

export const BookCard = ({ title, bookId, featured, setSelected }) => {
  const handleClick = () => {
    console.log('handleclick in BookCard')
    console.log({ bookId })
    setSelected(bookId)
  }
  return (
    <div className="book card" id={bookId} onClick={handleClick}>
      <div className="card-content">
        <div className="content">
          <p>
            <Link to={`books/${bookId}`}>{title}</Link>
            {featured && (
              <span className="icon">
                <i className="fa-solid fa-feather-pointed"></i>
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

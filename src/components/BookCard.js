import { Link } from 'react-router-dom'

export const BookCard = ({ title, bookId, featured }) => {
  return (
    <div className="book card" id={bookId}>
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

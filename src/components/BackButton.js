import { Link } from 'react-router-dom'
const BackButton = ({ path }) => {
  return (
    <div className="container-box">
      <Link to={path} className="button is-link is-light">
        Go Back
      </Link>
    </div>
  )
}

export default BackButton

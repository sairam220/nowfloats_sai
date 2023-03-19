import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Signup extends Component {
  render() {
    return (
      <div className="container">
        <div className="innerBox">
          <h1 className="heading">Signup</h1>

          <input label="Name" placeholder="Enter your name" />
          <input label="Email" placeholder="Enter email address" />
          <input label="Password" placeholder="Enter password" />

          <div className="footer">
            <Link to="/login">
              <button onClick="handleSubmission">Signup</button>
            </Link>
            <p>
              Already have an account?{' '}
              <span>
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup

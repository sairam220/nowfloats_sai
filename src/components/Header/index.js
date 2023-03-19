import {Component} from 'react'
import Cookies from 'js-cookie'

import {Link, withRouter} from 'react-router-dom'

import './index.css'

class Header extends Component {
  state = {
    showMobileMenu: false,
    searchInput: '',
  }

  onClickHamburgerMenu = () => {
    this.setState(prevState => ({
      showMobileMenu: !prevState.showMobileMenu,
    }))
  }

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  getSearchResults = () => {
    const {searchInput} = this.state
    const {displaySearchResults} = this.props
    displaySearchResults(searchInput)
  }

  getSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    return (
      <header className="header-section">
        <nav className="logo-header-container">
          <div className="link-text">
            <Link to="/">
              <img
                src="data:image/jpeg;base64,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"
                alt="website logo"
                className="image-logo"
              />
            </Link>
            <h1 className="nav-heading">NowFloats</h1>
          </div>
          <div className="search-container">
            <input
              type="search"
              placeholder="search"
              className="search-input"
              onChange={this.getSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              className="search-image"
              alt="seach-btn"
              onClick={this.getSearchResults}
            />
          </div>

          <div className="list-items-section">
            <Link to="/">
              <p className="list-item">Home</p>
            </Link>

            <Link to="/my-profile">
              <p className="list-item">MyProfile</p>
            </Link>

            <button
              type="button"
              className="logout-button"
              onClick={this.onClickLogout}
            >
              Logout
            </button>
          </div>
        </nav>
      </header>
    )
  }
}

export default withRouter(Header)

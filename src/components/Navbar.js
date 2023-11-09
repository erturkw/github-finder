import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export class Navbar extends Component {
  render() {
    return (

      <nav className="navbar navbar-dark navbar-expend-sm bg-dark">
        <div className="container">
          <Link to='/' className="navbar-brand">
            <i className={this.props.icon}></i>{this.props.title}
          </Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item navbar-collapse">
              <Link to="about" className="nav-link">About</Link>
            </li>
          </ul>
        </div>
      </nav>

    )
  }
}

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: ' fab fa-github'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default Navbar

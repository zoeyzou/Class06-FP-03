import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <NavLink className="navbar-brand" to="/">HYFER-CPH</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"> </span>
      </button>
      <div id="navbarNavDropdown" className="navbar-collapse collapse">
        <ul className="navbar-nav mr-auto">
          {/*<li className="nav-item active">*/}
            {/*<NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>*/}
          {/*</li>*/}
          {/*<li className="nav-item">*/}
            {/*<a className="nav-link" href="/">link 1</a>*/}
          {/*</li>*/}
          {/*<li className="nav-item">*/}
            {/*<a className="nav-link" href="/">link 2</a>*/}
          {/*</li>*/}

        </ul>
        <ul className="navbar-nav">
          {/*<li className="nav-item dropdown">*/ }
          {/*<a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink"*/ }
          {/*data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/ }
          {/*Dropdown*/ }
          {/*</a>*/ }
          {/*<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">*/ }
          {/*<a className="dropdown-item" href="#">Action</a>*/ }
          {/*<a className="dropdown-item" href="#">Another action</a>*/ }
          {/*</div>*/ }
          {/*</li>*/ }
          <li className="nav-item">
            <NavLink className="nav-link" to="/mentors/">Mentors</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/classes/">Classes</NavLink>
          </li>
          {/*<li className="nav-item">*/}
            {/*<NavLink className="nav-link" to="/js/">JavaScript</NavLink>*/}
          {/*</li>*/}
        </ul>
      </div>
    </div>
  </nav>

)

export default Navbar

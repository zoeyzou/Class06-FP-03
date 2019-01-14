import React from 'react'
//import Progress from '../layouts/Progress'
//import NavLink from 'react-router-dom/es/NavLink'
//import { Link } from 'react-router-dom'

class Module extends React.Component {
  state = {
    modules: []
  }


  render = () => {

     // console.log(this.props.cllmod)
    //const { mentors } = this.state
    return (
      <div>


                    <a href=" " className="btn btn-info">
                      <i className="fa " aria-hidden="true">
                        {this.props.cllmod.module}
                      </i>
                    </a>




      </div>
    )
  }
}

export default Module

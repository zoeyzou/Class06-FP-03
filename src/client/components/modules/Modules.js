import React from 'react'
import Progress from '../layouts/Progress'
import NavLink from 'react-router-dom/es/NavLink'
import { Link } from 'react-router-dom'

class Modules extends React.Component {
  state = {
    modules: [],
  }

  componentDidMount() {
    fetch('/api/modules')
      .then(res => res.json())
      .then(modules => this.setState({ modules }))
      .catch(console.log)
  }

  render = () => {
    const { modules } = this.state
    return (
      <div className="container">
        <h2>
          Modules{' '}
          <NavLink to="/modules/add" className="btn btn-sm btn-success">
            <i className="fa fa-plus text-white" />
          </NavLink>
        </h2>
        {modules.length === 0 ? (
          <Progress />
        ) : (
          <div className="row">
            {modules.map(module => (
              <div key={modules.moduleid} className="col-md-6">
                <div className="card shadow-sm mb-3">
                  <div className="card-body">
                    <h2 className="card-title">
                      {module.module}
                    </h2>
                    <h5>
                        Description
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {module.description}
                    </h6>
                    <p className="card-text">
                      START : {module.start}
                      <br />
                      length: {module.length}
                    </p>

                    <Link
                      to={`/modules/edit/${module.moduleid}`}
                      className="btn btn-info mr-2 ml-2"
                    >
                      <i className="fa fa-pencil" /> Edit
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deletemodule(module.moduleid)}
                    >
                      <i className="fa fa-trash" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default Modules

import React, { Component } from 'react'
import NavLink from 'react-router-dom/es/NavLink'
import { withRouter } from 'react-router-dom'

class ModuleForm extends Component {
  constructor(props) {
    super(props)
    if (this.props.isEditing) {
      this.state = {
        moduleData: this.props.moduleData,
      }
    } else if (this.props.addtoclass) {
        this.state = {      
               // moduleData: this.props.moduleData,

            //classid=this.props.classid,

          }
    }  else {
      this.state = {
        moduleData: {
          module: '',
          description: '',
          start: '',
          length: '',
        }
      }
    }
  }
  updateField = e => {
    const { name, value } = e.target
    this.setState({
      moduleData: {
        ...this.state.moduleData,
        [name]: value
      }
    })
  }
  changeActive = e => {
    this.setState({ status: 'active' })
  }
  submitForm = e => {
    e.preventDefault()
    let url = '',
      method = ''
    if (this.props.isEditing) {
      url = `/api/modules/${this.props.match.params.id}`
      method = 'PUT'
    } else if(this.props.addtoclass){
        url = `/api/modules/${this.props.match.params.classid}/${this.props.match.params.moduleid}`
        method = 'post'

    }  else {
      url = `/api/modules`
      method = 'POST'
    }
    fetch(url, {
      method,
      body: JSON.stringify(this.state.moduleData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.text())
      .then(response => {
        console.log('Success:', response)
        // TODO redirect to the Modules list page (/Modules)
        console.log('updated....')
        this.props.history.goBack()
      })
      .catch(error => console.error('Error:', error))
  }
  render() {
    return (
      <div className="container">
        <h3>{this.props.isEditing ? 'Edit Module' : ''}
        {this.props.addtoclass ? 'Adding Module to Class' : 'Add Module'}</h3>
        <div className="card shadow-sm p-3 mb-3">
          <form onSubmit={this.submitForm}>
            <div className="row">
              <div className="col-md-6 mb-2">
                <input
                  type="text"
                  className="form-control"
                  name="module"
                  placeholder="Module"
                  defaultValue={this.state.moduleData.module}
                  onChange={this.updateField}
                />
              </div>
              <div className="col-md-6 mb-2">
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  placeholder="Last name"
                  defaultValue={this.state.moduleData.description}
                  onChange={this.updateField}
                />
              </div>

              <div className="col-md-6 mb-2">
                <input
                  type="text"
                  className="form-control"
                  name="start"
                  placeholder="Birth date"
                  defaultValue={this.state.moduleData.start}
                  onChange={this.updateField}
                />
              </div>
              
              <div className="col-md-6 mb-2">
                <input
                  type="text"
                  className="form-control"
                  name="github"
                  placeholder="GitHub url"
                  defaultValue={this.state.moduleData.length}
                  onChange={this.updateField}
                />
              </div>
              
            </div>

            

            <button type="submit" className="btn btn-primary">
              <i className="fa fa-floppy-o" aria-hidden="true" />{' '}
              {this.props.isEditing ? 'Update Module' : ''}
              {this.props.addtoclass ? 'Add To Class' : 'Add Module'}

            </button>
            <NavLink className="btn btn-light ml-3" to="/">
              <i className="fa fa-caret-left" /> back
            </NavLink>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(ModuleForm)
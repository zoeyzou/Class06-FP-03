import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class MentorForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      class: {
        classname:'',
      }
    }
  }
  updateField = e => {
    const { name, value } = e.target
    this.setState({
        class: {
        ...this.state.class,
        [name]: value
      }
    })
  }
  changeActive = e => {
    this.setState({ status: 'active' })
  }
  submitForm = e => {
    e.preventDefault()
    let url = `/api/classes`
    let method = 'POST'
    fetch(url, {
      method,
      body: JSON.stringify(this.state.class),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.text())
      .then(response => {
        console.log('Success:', response)
        // TODO redirect to the Mentors list page (/Mentors)
        console.log('updated....')
        this.props.history.goBack()
      })
      .catch(error => console.error('Error:', error))
  }
  render() {
    return (
      <div className="container">
        <div className="card shadow-sm p-3 mb-3">
          <form onSubmit={this.submitForm}>
            <div className="row">
              <div className="col-md-6 mb-2">
                <input
                  type="text"
                  className="form-control"
                  name="classname"
                  placeholder="First name"
                  onChange={this.updateField}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-2 col-lg-1">Status</div>
              <div className="col-sm-10 col-lg-11">
                <div className="form-check" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fa fa-floppy-o" aria-hidden="true" /> Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default withRouter(MentorForm)

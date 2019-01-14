import React, { Component } from 'react'
import NavLink from 'react-router-dom/es/NavLink'
import { withRouter } from 'react-router-dom'

class UserForm extends Component {
  constructor(props) {
    super(props)
    if (this.props.isEditing)
      this.state = {
        userData: this.props.userData,
        active: false
      }
    else
      this.state = {
        userData: {
          name: '',
          birth_date: '',
          type: 'User',
          slack_nickname: 'ttps://github.com/',
          admission_date: '',
          active: false
        }
      }
  }

  updateField = e => {
    const { name, value } = e.target
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value
      }
    })
  }

  componentWillMount() {
    document.title = this.props.isEditing ? 'Edit User' : 'Add User'
  }

  submitForm = e => {
    e.preventDefault()
    let url = '',
      method = ''
    if (this.props.isEditing) {
      url = `/api/users/${this.props.match.params.id}`
      method = 'PUT'
    } else {
      url = `/api/users`
      method = 'POST'
    }
    fetch(url, {
      method,
      body: JSON.stringify(this.state.userData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.text())

      .then(response => {
        console.log('Success:', response)

        // TODO redirect to the Users list page (/Users)
        console.log('updated....')
        this.props.history.goBack()
      })
      .catch(error => console.error('Error:', error))
  }

  render() {
    return (
      <div className='container'>
        <h3>{this.props.isEditing ? 'Edit User' : 'Add User'}</h3>
        <div className='card shadow-sm p-3 mb-3'>
          <form onSubmit={this.submitForm}>
            <div className='row'>
              <div className='col-md-6 mb-2'>
                <input
                  type='text'
                  className='form-control'
                  name='name'
                  placeholder='First name'
                  defaultValue={this.state.userData.name}
                  onChange={this.updateField}
                />
              </div>

              <div className='col-md-6 mb-2'>
                <input
                  type='date'
                  className='form-control'
                  name='birth_date'
                  placeholder='Birth date'
                  defaultValue={this.state.userData.birth_date}
                  onChange={this.updateField}
                />
              </div>
              <div className='col-md-6 mb-2'>
                <input
                  type='text'
                  className='form-control'
                  name='type'
                  placeholder='type'
                  defaultValue={this.state.userData.type}
                  onChange={this.updateField}
                />
              </div>

              <div className='col-md-6 mb-2'>
                <input
                  type='text'
                  className='form-control'
                  name='slack_nickname'
                  placeholder='GitHub url'
                  defaultValue={this.state.userData.slack_nickname}
                  onChange={this.updateField}
                />
              </div>
              <div className='col-md-6 mb-2'>
                <input
                  type='date'
                  className='form-control'
                  name='admission_date'
                  placeholder='Admission date'
                  defaultValue={this.state.userData.admission_date}
                  onChange={this.updateField}
                />
              </div>
            </div>

            <div className='form-group row'>
              <div className='col-sm-2 col-lg-1'>Status</div>
              <div className='col-sm-10 col-lg-11'>
                <div className='form-check'>
                  <label className='form-check-label' htmlFor='active'>
                    <input
                      type='checkbox'
                      className='form-check-input'
                      name='active'
                      onChange={_ =>
                        this.setState({
                          userData: {
                            ...this.state.userData,
                            active: !this.state.userData.active
                          }
                        })
                      }
                      checked={this.state.userData.active}
                    />{' '}
                    Active
                  </label>
                </div>
              </div>
            </div>

            <button type='submit' className='btn btn-primary'>
              <i className='fa fa-floppy-o' aria-hidden='true' />{' '}
              {this.props.isEditing ? 'Update User' : 'Add User'}
            </button>
            <NavLink className='btn btn-light ml-3' to='/users'>
              <i className='fa fa-caret-left' /> back
            </NavLink>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(UserForm)

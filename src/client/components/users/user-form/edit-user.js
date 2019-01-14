import React, { Component } from 'react'
import UserForm from './user-form'
import axios from 'axios'

// export default (props) => {
//     // Do the fetching, and render the form only when the data is here
//     return (
//         <UserForm {...props} isEditing={true} />
//     )
// }

class EditUser extends Component {
  state = {
    isLoading: true,
    message: 'Hang in there...',
    userData: null
  }
  componentDidMount() {
    const url = '/api/users'
    const id = this.props.match.params.id
    // TODO handle failure (404)
    axios.get(`${url}/${id}`).then(res =>
      this.setState({
        isLoading: false,
        userData: res.data
      })
    )
    // .catch(error => this.setState({
    //     message: error
    // }))
  }
  render() {
    return this.state.isLoading ? (
      <div>{this.state.message}</div>
    ) : (
      <UserForm
        {...this.props}
        userData={this.state.userData}
        id={this.props.match.params.id}
        isEditing={true}
      />
    )
  }
}

export default EditUser

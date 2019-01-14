import React from 'react'
import { getProfileInfo, isLoggedIn } from './login/OAuth-api-calls'
import Container from '../layouts/container'
import axios from 'axios'

class Profile extends React.Component {
  state = {
    auth: false,
    user: {}
  }

  componentDidMount() {
    if (this.props.match !== undefined) {
      axios
        .get(`/api/users/${this.props.match.params.id}`)
        .then(res => this.setState({ user: res.data }))
        .catch(console.error)
      return
    }
    isLoggedIn()
      .then(res => this.setState({ auth: !!res }))
      .then(() => {
        if (this.state.auth)
          getProfileInfo().then(res => this.setState({ user: res.data }))
      })
  }

  render = () => {
    const { user } = this.state
    return (
      <Container>
        <div>
          <img style={{ maxWidth: '30%' }} src={user.avatar} alt={user.name} />
          {Object.keys(user).map(key => (
            <p>
              <strong>{key} </strong>:{user[key]}
            </p>
          ))}
        </div>
      </Container>
    )
  }
}

export default Profile

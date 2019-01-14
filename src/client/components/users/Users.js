import React from 'react'
import Progress from '../layouts/Progress'
import './users.css'
import UserItem from './UserItem'
import { Consumer } from '../../context'

class Users extends React.Component {
  componentWillMount() {
    document.title = 'Users'
  }

  render = () => {
    return (
      <Consumer>
        {value => {
          const { users } = value
          return (
            <div className='container'>
              {/*<h2>*/}
              {/*Users{' '}*/}
              {/*<NavLink to='/users/add' className='btn btn-sm btn-success'>*/}
              {/*<i className='fa fa-plus text-white' />*/}
              {/*</NavLink>*/}
              {/*</h2>*/}
              {value.users.length === 0 ? (
                <Progress />
              ) : (
                <div className='members mb-3'>
                  {users.map(user => (
                    <UserItem key={user.id} user={user} />
                  ))}
                </div>
              )}
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Users

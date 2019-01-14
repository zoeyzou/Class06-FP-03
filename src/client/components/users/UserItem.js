import React from 'react'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { Consumer } from '../../context'

import './user.scss'

class UserItem extends React.Component {
  deleteUser = (id, dispatch) =>
    dispatch({
      type: 'DELETE_USER',
      payload: id
    })

  render() {
    const {
      id,
      avatar,
      github,
      name,
      role,
      summary,
      tags,
      slack_nickname,
      linkedin,
      email,
      type
    } = this.props.user
    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <Paper className='user'>
              <div className='image'>
                {avatar ? (
                  <div className='shine zoomIn1'>
                    <figure>
                      <a href={github}>
                        <img
                          alt={name}
                          src={
                            type === 'alumni'
                              ? '/images/users/' + avatar
                              : avatar
                          }
                        />
                      </a>
                    </figure>
                  </div>
                ) : (
                  <img
                    alt={name}
                    className='defaultPhoto'
                    src={'/images/avatar.png'}
                  />
                )}
              </div>
              <Link className='userName' to={`/users/${id}`}>
                <h3>{name}</h3>
              </Link>
              <span className='userName'>{type}</span>
              {role && <p className='memberRole'>{role}</p>}
              {summary && <p>{summary}</p>}
              {tags && (
                <p>
                  {tags.map(tag => (
                    <span className='tag'>{tag}</span>
                  ))}
                </p>
              )}

              <div className='socialIcons'>
                {slack_nickname && (
                  <IconButton
                    className='btn btn-outline-info mb-2'
                    href={slack_nickname}
                  >
                    <i className='fa fa-github' aria-hidden='true'>
                      {' '}
                    </i>
                  </IconButton>
                )}
                {linkedin && (
                  <IconButton
                    className='btn btn-outline-info mb-2'
                    href={linkedin}
                  >
                    <i className='fa fa-linkedin' aria-hidden='true'>
                      {' '}
                    </i>
                  </IconButton>
                )}
                {email && (
                  <IconButton
                    className='btn btn-outline-info mb-2'
                    href={email}
                  >
                    <i className='fa fa-envelope-o' aria-hidden='true'>
                      {' '}
                    </i>
                  </IconButton>
                )}

                <IconButton component={Link} to={`/users/edit/${id}`}>
                  <EditIcon />
                </IconButton>

                <IconButton
                  onClick={() => this.deleteUser(id, dispatch)}
                  aria-label='Delete'
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </Paper>
          )
        }}
      </Consumer>
    )
  }
}

export default UserItem

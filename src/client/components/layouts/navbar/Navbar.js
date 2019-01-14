import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import UserMenu from './UserMenu'
const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  logo: {
    height: '40px'
  }
}

function Navbar(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color='inherit'
            aria-label='Menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' color='inherit' className={classes.grow}>
            <Button component={Link} to='/' color='inherit'>
              <img
                className={classes.logo}
                src='/images/logo-white.svg'
                alt='HackYourFuture Copenhagen'
              />
            </Button>
          </Typography>

          <Button component={Link} to='/users/' color='inherit'>
            Users
          </Button>
          <Button component={Link} to='/classes/' color='inherit'>
            Classes
          </Button>
          <UserMenu />
        </Toolbar>
      </AppBar>
    </div>
  )
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Navbar)

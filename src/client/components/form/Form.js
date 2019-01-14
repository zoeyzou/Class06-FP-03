import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import Container from '../layouts/container'

const styles = {
  textField: {},
  dropDownList: {
    width: '200px'
  },
  textarea: {
    width: '400px'
  }
}

class Form extends Component {
  state = {
    title: 'title',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad alias dicta magni, neque 
    perspiciatis quaerat repellat. Consequuntur delectus hic nulla perferendis. A, expedita magnam minima 
    minus odio temporibus voluptatibus?`,
    modules: [
      {
        value: 1,
        label: 'Javascript'
      },
      {
        value: 2,
        label: 'HTML'
      },
      {
        value: 3,
        label: 'MySQL'
      }
    ]
  }
  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    })

  submitHandler = event => {
    event.preventDefault()
    // use axios to post/update/add data
  }

  render() {
    const { classes } = this.props
    const { title, description, modules } = this.state
    return (
      <Container>
        <form noValidate autoComplete='off' onSubmit={this.submitHandler}>
          {/*title*/}
          <TextField
            className={classes.textField}
            label='title'
            name='title'
            value={title}
            onChange={this.handleChange}
            margin='normal'
          />
          <br />

          {/*description*/}
          <TextField
            label='description'
            multiline
            rowsMax='4'
            value={description}
            name='description'
            onChange={this.handleChange}
            className={classes.textarea}
            margin='normal'
            // fullWidth
          />
          <br />

          {/*dropDownList*/}
          <TextField
            select
            label='Select'
            value='EUR'
            className={classes.dropDownList}
            // onChange={handleChange('currency')}
            margin='normal'
          >
            {modules.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <br />
          {/*submit form*/}
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.button}
          >
            Primary
          </Button>
        </form>
      </Container>
    )
  }
}

export default withStyles(styles)(Form)

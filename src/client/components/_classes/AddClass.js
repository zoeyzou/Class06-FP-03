import React from 'react'
import Grid from '@material-ui/core/Grid'
import AddIcon from '@material-ui/icons/Add'
import Modal from 'react-responsive-modal'
import Fab from '@material-ui/core/Fab'
import { withRouter } from 'react-router-dom'


class Addclass extends React.Component {
  //status: '',
  // start: '2019-01-01',
  //end: '2019-01-01',
  constructor(props) {
    super(props)
    this.state = {
      class: {
        classname:'',
        active: 1
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
  onOpenModal = () => this.setState({ open: true })
  onCloseModal = () => this.setState({ open: false })
  //handleChange = prop => event => this.setState({ [prop]: event.target.value })
  //formSubmitHandler = e => e.preventDefault()
  formSubmit = e => {
    console.log('submit')
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
      .then(req => console.log(req))
      .then(res => res.text())
      .then(response => {
        console.log('Success Add Class:', response)
        // TODO redirect to the Mentors list page (/Mentors)
        this.props.history.goBack()
      })
      .catch(error => console.error('Error:', error))
  }
  render = () => {
    //const {open} = this.state
    //const {classes} = this.props
    return (
      <>
        <Fab
          color="secondary"
          onClick={this.onOpenModal}
          aria-label="Add"
          // className={classes.floatingBtn}
        >
          <AddIcon />
        </Fab>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <div>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <form onSubmit={this.formSubmit}>
                  {/*Mentors list*/}
                  <input
                  type="text"
                  className="form-control"
                  name="classname"
                  placeholder="First name"
                  onChange={this.updateField}
                />
                  {/*status*/}
                  {/* <TextField
                    id="standard-name"
                    label="status"
                    //className={classes.textField}
                    value={this.state.name}
                    //onChange={this.handleChange('status')}
                    margin="normal"
                    fullWidth={true}
                  />
                  {/*Date*/}
                  {/* <Grid container spacing={24}>
                    {/*start*/}
                  {/*  <Grid item md={6}>
                      <TextField
                        id="date"
                        label="Start"
                        type="date"
                        defaultValue={this.state.start}
                        //className={classes.textField}
                        InputLabelProps={{
                          shrink: true
                        }}
                       // onChange={this.handleChange('start')}
                        fullWidth={true}
                      />
                    </Grid>
                    {/*end*/}
                  {/*  <Grid item md={6}>
                      <TextField
                        id="date"
                        label="End"
                        type="date"
                        defaultValue={this.state.end}
                        //className={classes.textField}
                        InputLabelProps={{
                          shrink: true
                        }}
                        //onChange={this.handleChange('end')}
                        fullWidth={true}
                      />
                    </Grid>
                  </Grid>

                  {/*Submit*/}

                <button type="submit" className="btn btn-primary"
                 onClick={() => {
                    this.onCloseModal()
                    return this.props.onAddItem()

                  }}>
              <i className="fa fa-floppy-o" aria-hidden="true" /> Add
            </button>
                </form>
              </Grid>
            </Grid>
          </div>
        </Modal>
      </>
    )
  }
}

export default withRouter(Addclass)

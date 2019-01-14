import React from 'react'
import 'react-picky/dist/picky.css'
import Picky from 'react-picky'
import 'react-picky/dist/picky.css'
import Class from './Classesveiw'
import { NULL } from 'mysql2/lib/constants/types'
import AddClass from './AddClass';

class Classes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: NULL,
      arrayValue: [],
      bigList: [],
      senddata :[]
    }
    this.selectMultipleOption = this.selectMultipleOption.bind(this)
  }

  selectMultipleOption(value) {
    //select class from list
    console.log('Val', value)
    var result =[]
// all information of selected classes in result 
    value.forEach(element => {
     result.push(this.state.bigList.find(w => w.classname === element))
    });
// names of selected classes
    this.setState({arrayValue: value})
    // classes to be rendered
    this.setState({senddata:result})
    console.log(result)
    console.log(this.state.senddata)

  }
  addItemHandler = () => {
    //const newItem = {
      //id: 1 + this.state.items.reduce((max, value) => value.id > max ? value.id : max, 0),
      //group: item.classname,
      //title: item.status,
      //className: item.status,
     // start: moment(new Date(item.start)),
      //end: moment(new Date(item.end)),
    //}
    //this.setState({bigList:this.state.bigList})
  }
  // fetch classes names
  componentDidMount() {
    fetch('/api/classes')
      .then(res => res.json())
      .then(respons => {
        console.log(respons)
        this.setState({ bigList: respons })
      })
      .catch(console.log)

  }
  render() {
    var send = this.state.senddata
    return (
      <div className="container">
                    <h3>Classes</h3>
            <Picky
              value={this.state.arrayValue}
              onChange={this.selectMultipleOption}
              options={this.state.bigList.map(data => {
                return data.classname
              })}
              open={true}
              valueKey="id"
              labelKey="name"
              multiple={true}
              dropdownHeight={600}
            />
         
          <div className="container">

          {send.map(data => {
            return <Class classdata={data} key={data.classid} />
          })}
            </div>
            <AddClass onAddItem={this.addItemHandler}/>
      </div>
         
    )
  }
}
/* render() {
    const {classes}  = this.state
    console.log(classes)
    return (
      <div className="container">
        <h2>Classes </h2>
        {classes.length === 0 ? (
          <Progress />
        ) : (
          <div>
            {classes.map(classdata => (
              
              <div key={classdata.classid} className="col-md-6">
                 <div className="card shadow-sm mb-3">
                   <div className="card-body" />
                    <Class classdata={classdata} key={classdata.classid} />
                   </div>
                </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}*/

export default Classes

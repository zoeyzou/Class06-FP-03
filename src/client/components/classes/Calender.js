import React, { Component } from 'react'
import moment from 'moment'
import Timeline, { TimelineMarkers, TodayMarker } from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import './style.css'
import itemRender from './itemRender'
import SundaysMarker from './SundaysMarker'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import AddIcon from '@material-ui/icons/Add'
// import groups from './groups'
// import items from './items'
import keys from './keys'
// import AddItemsForm from './AddItemsForm'
import axios from 'axios'
import Progress from '../layouts/Progress'
import Button from '@material-ui/core/es/Button/Button'

export default class Calender extends Component {
  state = {
    keys,
    groups: [],
    items: [],
    y19: new Date('2019/1/1')
  }
  classTitle = title => (
    <div>
      {title}
      <IconButton aria-label='Delete'>
        <EditIcon fontSize='small' />
      </IconButton>
    </div>
  )
  classRightTitle = () => (
    <Button variant='contained' size='small'>
      <AddIcon /> Add module
    </Button>
  )
  componentDidMount() {
    axios.get('/api/classes').then(classes => {
      axios.get(`/api/classesmodules`).then(modules => {
        const endDates = modules.data.map(item => new Date(item.end))
        const startDates = modules.data.map(item => new Date(item.start))
        this.setState({
          groups: classes.data.map(item => ({
            id: item.id,
            title: this.classTitle(item.classname),
            rightTitle: this.classRightTitle()
          })),
          items: modules.data.map((item, index) => ({
            ...item,
            id: index + 1,
            start: moment(new Date(item.start)),
            end: moment(new Date(item.end)),
            className: item.title.replace(/ /g, '_'),
            canMove: true,
            canResize: false,
            canChangeGroup: false
          })),

          defaultTimeStart: moment(new Date(Math.min(...startDates))).add(
            -1,
            'week'
          ),
          defaultTimeEnd: moment(new Date(Math.max(...endDates))).add(1, 'week')
        })
      })
    })
  }

  componentWillMount() {
    document.title = 'Classes'
  }

  toTimestamp = strDate => {
    const d = new Date(strDate)
    return Date.parse(d.toString()) / 1000
  }

  addItemHandler = item => {
    const newItem = {
      id:
        1 +
        this.state.items.reduce(
          (max, value) => (value.id > max ? value.id : max),
          0
        ),
      group: item.mentor,
      title: item.status,
      className: item.status,
      start: moment(new Date(item.start)),
      end: moment(new Date(item.end))
    }

    this.setState(state => ({
      items: [...state.items, newItem]
    }))
  }
  handleItemMove = (itemId, dragTime, newGroupOrder) => {
    const { items, groups } = this.state

    const group = groups[newGroupOrder]

    this.setState({
      items: items.map(item =>
        item.id === itemId
          ? Object.assign({}, item, {
              start: dragTime,
              end: dragTime + (item.end - item.start),
              group: group.id
            })
          : item
      )
    })

    console.log('Moved', itemId, dragTime, newGroupOrder)
  }

  handleItemResize = (itemId, time, edge) => {
    const { items } = this.state

    this.setState({
      items: items.map(item =>
        item.id === itemId
          ? Object.assign({}, item, {
              start: edge === 'left' ? time : item.start,
              end: edge === 'left' ? item.end : time
            })
          : item
      )
    })

    console.log('Resized', itemId, time, edge)
  }

  render() {
    const { keys, groups, items, defaultTimeStart, defaultTimeEnd } = this.state
    return (
      <>
        {groups.length > 0 ? (
          <Timeline
            keys={keys}
            groups={groups}
            // onItemClick={() => alert(1)}
            items={items}
            sidebarContent='Classes'
            rightSidebarWidth={130}
            rightSidebarContent='Skills'
            lineHeight={75}
            itemRenderer={itemRender}
            defaultTimeStart={defaultTimeStart}
            defaultTimeEnd={defaultTimeEnd}
            maxZoom={1.5 * 365.24 * 86400 * 1000}
            minZoom={60 * 60 * 1000*24*7}
            fullUpdate
            itemTouchSendsClick={false}
            stackItems
            itemHeightRatio={0.75}
            showCursorLine
            canMove={true}
            canResize={'both'}
            onItemMove={this.handleItemMove}
            onItemResize={this.handleItemResize}
          >
            <TimelineMarkers>
              <TodayMarker>
                {({ styles, date }) => (
                  <div
                    style={{
                      ...styles,
                      width: '0.5rem',
                      backgroundColor: 'rgba(255,0,0,0.5)'
                    }}
                  />
                )}
              </TodayMarker>
              <SundaysMarker />
            </TimelineMarkers>
          </Timeline>
        ) : (
          <Progress />
        )}
        {/*<AddItemsForm onAddItem={this.addItemHandler} />*/}
      </>
    )
  }
}

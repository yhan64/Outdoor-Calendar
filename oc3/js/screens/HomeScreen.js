import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import {Agenda} from 'react-native-calendars'
import moment from 'moment'

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      date: {}
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.eventsOnDays !== prevProps.eventsOnDays) {
      this.fillEmptyDays(this.state.date)
    }
  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.fillEmptyDays}
        selected={''}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }

  fillEmptyDays = (date) => {
    this.setState({date})
    if(!this.props.eventsOnDays || Object.keys(this.props.eventsOnDays).length < 1) {
      return
    }
   
    let eventsOnDays = this.props.eventsOnDays
    const month = date.month
    const firstDay = moment([date.year, date.month - 1])
    const lastDay = moment(firstDay).endOf('month')
    for( let currDate = firstDay; currDate.diff(lastDay) <= 0; currDate.add(1, 'days')) {
      if(!eventsOnDays[currDate.format('YYYY-MM-DD')]) {
        eventsOnDays[currDate.format('YYYY-MM-DD')] = []
      }
    }
    this.setState({items: eventsOnDays})
  }
  renderItem = (item) => {
    return (
      <View style={[styles.item, {height: item.height}]}>
        <Text>{item.title}</Text>
      </View>
    );
  }

  renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}><Text>No events today</Text></View>
    );
  }

  rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  }

}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});

const mapStateToProps = state => {
  return {
    eventsOnDays: state.app.eventsOnDays
  }
}

export default connect(mapStateToProps)(HomeScreen)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import { Agenda } from 'react-native-calendars'
import moment from 'moment'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome to OC',
  };

  constructor(props) {
    super(props);
    this.state = {
      items: {},
      date: {}
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.eventsOnDays !== prevProps.eventsOnDays || this.state.date !== prevState.date) {
      this.fillEmptyDays(this.state.date)
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.homeContainer}>
        <Agenda
        items={this.state.items}
        loadItemsForMonth={this.setCurrDate}
        selected={''}
        onDayPress={this.setCurrDate}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        />
        <TouchableHighlight 
          style={styles.createEventButton}
          onPress={() => navigate('CreateEventScreen', { date: this.state.date })}
        >
          <Text style={styles.cross}> + </Text>
        </TouchableHighlight>
      </View>
    );
  }

  setCurrDate = (date) => {
    this.setState({date})

  }

  fillEmptyDays = (date) => {
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

const createEventButtonDia = 50
const colors = {
  createPink: '#FFDAB9'
}
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1
  },
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
  },
  createEventButton: {
    flex: 1,
    borderWidth:1,
    borderColor: colors.createPink,
    alignItems: 'center',
    justifyContent: 'center',
    width: createEventButtonDia,
    height: createEventButtonDia,
    backgroundColor: colors.createPink,
    borderRadius: createEventButtonDia,
    position: 'absolute',
    right: 10,
    bottom: 20
  },
  cross: {
    fontSize: 30,
    color: 'white'
  }
});

const mapStateToProps = state => {
  return {
    eventsOnDays: state.app.eventsOnDays
  }
}

export default connect(mapStateToProps)(HomeScreen)

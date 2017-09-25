// @flow
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import { Agenda } from 'react-native-calendars'
import moment from 'moment'
import { fetchAllEvents } from 'oc/js/actions/api-actions'
const apiActions = {
  fetchAllEvents
}
import { showEventDetailsOn } from 'oc/js/actions/app-actions'
const appActions = {
  showEventDetailsOn
}
import TextEntry from 'oc/js/components/text-entry'

class HomeScreen extends React.Component<Object, Object> {
  props: Object
  state: Object
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      date: {}
    };
  }

  componentDidMount() {
    this.props.actions.fetchAllEvents();
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.eventsOnDays !== prevProps.eventsOnDays || this.state.date !== prevState.date) {
      this.fillEmptyDays(this.state.date)
    }
  }

  render() {
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
          onPress={() => {}}
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
    // <TextEntry onPress={() => this.props.actions.showEventDetailsOn(item.date)} />
    // above doesn't work since onPress has 'this', couldn't pass it directly
    // have to define the function before pass it to a child component
    const onPress = () => this.props.actions.showEventDetailsOn(item.date, item.index);
    return (
      <TextEntry bodyText={item.title} onPress={onPress} />
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

function mapStateToProps(state) {
  return {
    eventsOnDays: state.app.eventsOnDays
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...apiActions, ...appActions}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

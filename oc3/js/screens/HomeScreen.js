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
      items: {}
    };
  }

  render() {
    return (
      <Agenda
        items={this.props.eventsOnDays}
        selected={''}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }

  renderItem = (item) => {
    return (
      <View style={[styles.item, {height: item.height}]}>
        <Text>{item.description}</Text>
      </View>
    );
  }

  renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
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

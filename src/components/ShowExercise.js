import React, { Component } from 'react';
import { ListView, View, Text, Image } from 'react-native';
import { BottomNav } from './common';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import { fetchLogs } from '../actions';

const BASE_URL = 'http://localhost:3636';

class ShowExercise extends Component {
  static defaultProps = {
    logs: []
  }

  componentDidMount () {
    this.props.fetchLogs(`${BASE_URL}/api/exercises/${this.props.exercise.id}`)
  }

  renderLog (log) {
    console.log(`${BASE_URL}${log.imageUrl}`);
    return (
      <View>
        <Text>Date: {log.date}</Text>
        <Text>Rep: {log.rep}</Text>
        <Text>Set: {log.set}</Text>
        <Text>Weight: {log.weight}</Text>
        <Text>Note: {log.note}</Text>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: `${BASE_URL}/${log.imageUrl}`}} />
      </View>
    );
  }

  render () {
    console.log(this.props);
    const { exercise, logs } = this.props;
    return (
      <Container>
        <Container style={{flex: 1}}>
          <Text>{exercise.name}</Text>
          <ListView
            dataSource={logs}
            renderRow={this.renderLog}
            enableEmptySections
          >
          </ListView>
        </Container>
        <BottomNav />
      </Container>
    )
  };
}

const ds = new ListView.DataSource({
  rowHasChanged: (r1,r2) => r1 !== r2
});

const mapStateToProps = state => {
  return {
    exercise: state.exercise,
    logs: ds.cloneWithRows(state.showExercise.exercise.log || []),
  };
};

export default connect(mapStateToProps, { fetchLogs })(ShowExercise);

import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { BottomNav, CardSection, Spinner, ErrorMessage } from './common';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import { fetchLogs } from '../actions';
import ShowLog from './ShowLog';

const BASE_URL = 'http://localhost:3636';

class ShowExercise extends Component {
  componentDidMount () {
    this.props.fetchLogs(`${BASE_URL}/api/exercises/${this.props.exercise.id}`)
  }

  renderLog (log) {
    return <ShowLog log={log} />;
  }

  render () {
    console.log(this.props);
    const { exercise, logs, errored, loading } = this.props;
    if (errored) {
      return <ErrorMessage />;
    }
    if (loading) {
      return <Spinner />;
    }
    return (
      <Container>
        <CardSection>
          <Text>{exercise.name}</Text>
        </CardSection>

        <Container style={{flex: 1}}>
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
  const { exercise: { logs }, errored, loading } = state.showExercise;
  return {
    exercise: state.exercise,
    logs: ds.cloneWithRows(logs || []),
    errored,
    loading
  };
};

export default connect(mapStateToProps, { fetchLogs })(ShowExercise);

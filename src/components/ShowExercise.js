import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import { fetchLogs } from '../actions';

class ShowExercise extends Component {
  static defaultProps = {
    logs: []
  }

  componentDidMount () {
    this.props.fetchLogs(`http://localhost:3636/api/exercises/${this.props.exercise.id}`)
  }

  render () {
    const { exercise, logs } = this.props;
    return (
      <View>
        <CardSection>
          <Text>{exercise.name}</Text>
        </CardSection>

        {this.props.logs.map((l, i) => {
          return (
            <View key={`log ${i}`}>
              <Text>Date: {l.date}</Text>
              <Text>Rep: {l.rep}</Text>
              <Text>Set: {l.set}</Text>
              <Text>Weight: {l.weight}</Text>
            </View>
          );
        })}
      </View>
    )
  };
}

const mapStateToProps = state => {
  // console.log(state.showExercise.exercise.log);
  return {
    exercise: state.exercise,
    logs: state.showExercise.exercise.log
  };
};

export default connect(mapStateToProps, { fetchLogs })(ShowExercise);

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class ShowExercise extends Component {
  componentDidMount () {

  }

  render () {
    console.log(this.props.exercise.exercise.name);
    return (
      <View>
        <Text>{this.props.exercise.name}</Text>
        <Text>{this.props.exercise.description}</Text>
        <Text>{this.props.exercise.log}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { exercise: state.exercise };
};

export default connect(mapStateToProps)(ShowExercise);

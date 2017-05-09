import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import { selectExercise } from '../actions';

class ExerciseItem extends Component {
  render () {
    const { id, name } = this.props.exercise;
    const { titleStyle } = styles;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectExercise(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  };
};

const styles = {
  titleStyle: {
    color: '#696969',
    fontSize: 15,
    paddingLeft: 15
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectExercise: exerciseId => dispatch(selectExercise(exerciseId))
  }
}

export default connect(null, mapDispatchToProps)(ExerciseItem);

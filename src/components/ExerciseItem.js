import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import { selectExercise } from '../actions';

class ExerciseItem extends Component {
  render () {
    const { exercise } = this.props;
    const { textStyle } = styles;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectExercise(exercise)}
      >
        <View>
          <CardSection>
            <Text style={textStyle}>
              {exercise.name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  };
};

const styles = {
  textStyle: {
    color: '#696969',
    fontSize: 15,
    paddingLeft: 15
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectExercise: exercise => dispatch(selectExercise(exercise))
  }
}

export default connect(null, mapDispatchToProps)(ExerciseItem);

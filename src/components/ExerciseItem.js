import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Icon } from 'native-base';
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
          <CardSection style={styles.containerStyle}>
            <Text style={textStyle}>
              {exercise.name}
            </Text>
            <Icon name='arrow-forward' style={styles.iconStyle} />
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  };
};

const styles = {
  containerStyle: {
    alignItems: 'center'
  },
  textStyle: {
    color: '#696969',
    fontSize: 15,
    paddingLeft: 5
  },
  iconStyle: {
    paddingRight: 5,
    color: 'gainsboro',
    fontSize: 15
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectExercise: exercise => dispatch(selectExercise(exercise))
  }
}

export default connect(null, mapDispatchToProps)(ExerciseItem);

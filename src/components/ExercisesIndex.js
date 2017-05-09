import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import { fetchExercises } from '../actions';
import ExerciseItem from './ExerciseItem';
import { TopNav, CardSection, Spinner, ErrorMessage, BottomNav } from './common';

class ExercisesIndex extends Component {
  componentDidMount () {
    this.props.fetchExercises('http://localhost:3636/api/exercises');
  }

  renderExercise (exercise) {
    return <ExerciseItem exercise={exercise}/>;
  }

  render () {
    const { exercises = [], exercisesErrored, exercisesLoading } = this.props;
    if (exercisesErrored) {
      return <ErrorMessage />
    }
    if (exercisesLoading) {
      return <Spinner />
    }
    return (
      <Container>
        <Container style={{flex: 1}}>
          <ListView
            dataSource={this.props.exercises}
            renderRow={this.renderExercise}
            enableEmptySections
          />
        </Container>
        <BottomNav />
      </Container>
    );
  }
}

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

const mapStateToProps = state => {
  return {
    exercises: ds.cloneWithRows(state.exercises),
    exercisesErrored: state.exercisesErrored,
    exercisesLoading: state.exercisesLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchExercises: url => dispatch(fetchExercises(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesIndex);

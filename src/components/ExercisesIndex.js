import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

export default class ExercisesIndex extends Component {
  constructor (props) {
    super (props);
    this.state = {
      exercises: []
    }
  }

  getExercises () {
    fetch('http://localhost:3636/api/exercises')
      .then(response => response.json())
      .then(({ exercises }) => this.setState({ exercises }))
      .catch(console.info)
  }

  componentWillMount () {
    return this.getExercises();
  }

  render () {
    return (
      <ScrollView>
        {this.state.exercises.map(e => {
          return <Text key={e.name}>{e.name}</Text>
        })}
      </ScrollView>
    );
  }
}

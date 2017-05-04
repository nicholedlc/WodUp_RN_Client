import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import CardSection from './CardSection';

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

  renderExercises () {
    this.state.exercises.map((e, i) => {
      return (
        <CardSection >
          <Text key={`exercise ${i}`}>
            {e.name}
          </Text>
        </CardSection>
      );
    })
  }

  componentWillMount () {
    return this.getExercises();
  }

  render () {
    return (
      <ScrollView>
        {this.state.exercises.map((e, i) => {
          return (
            <CardSection key={`exercise ${i}`}>
              <Text>
                {e.name}
              </Text>
            </CardSection>
          );
        })}
      </ScrollView>
    );
  }
}

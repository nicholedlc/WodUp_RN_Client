import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { Header } from './common';

export default class ExercisesIndex extends Component {
  constructor (props) {
    super (props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
  }

  getExercises () {
    fetch('http://localhost:3636/api/exercises')
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.exercises)
        });
      })
      .catch(console.info)
  }

  renderExercise (exercise) {
    return (
      <CardSection>
        <Text>{exercise.name}</Text>
      </CardSection>
    );
  }

  componentWillMount () {
    return this.getExercises();
  }

  render () {
    return (
      <View>
        <Header headerText='WODUP!'/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderExercise}
        />
      </View>
    );
  }
}

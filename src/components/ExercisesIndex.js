import React, { Component } from "react";
import { ListView, Text } from "react-native";
import { connect } from "react-redux";
import { Container } from "native-base";
import { getExercises } from "../actions";
import ExerciseItem from "./ExerciseItem";
import {
  BaseContainer,
  TopNav,
  CardSection,
  Spinner,
  ErrorMessage,
  BottomNav
} from "./common";

class ExercisesIndex extends Component {
  componentDidMount() {
    this.props.getExercises();
  }

  renderExercise(exercise) {
    return <ExerciseItem exercise={exercise} />;
  }

  render() {
    const { exercises, errorMessage, loading } = this.props;
    if (errorMessage) {
      return <ErrorMessage />;
    }
    if (loading) {
      return <Spinner />;
    }
    return (
      <Container>
        <BaseContainer>
          <ListView
            dataSource={exercises}
            renderRow={this.renderExercise}
            enableEmptySections
          />
        </BaseContainer>
        {/* <BottomNav /> */}
      </Container>
    );
  }
}

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

const mapStateToProps = state => {
  const { exercises, errorMessage, loading } = state.exercisesIndex;
  return {
    exercises: ds.cloneWithRows(exercises),
    errorMessage,
    loading
  };
};

export default connect(mapStateToProps, { getExercises })(ExercisesIndex);

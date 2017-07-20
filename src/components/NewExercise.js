import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import { Content
} from 'native-base';
import { Card, CardSection, FormField, SubHeader, BottomNav, ButtonPrimary } from './common';
import { inputExercise, createExercise } from '../actions';

class NewExercise extends Component {
  onTextInput (value) {
    this.props.inputExercise(value)
  }

  onSubmit () {
    this.props.createExercise(this.props.text);
  }

  renderButton () {
    if (this.props.loading) {
      return <Spinner />
    }
    return (
      <ButtonPrimary
        title='Submit'
        onPress={() => this.onSubmit()}
      />
    );
  }

  // TODO: validate presence of exercise name

  render () {
    const { text } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <SubHeader>Add New Exercise</SubHeader>
        <Card>
          <CardSection>
            <FormField
              label='Name'
              value={text}
              autoCorrect={false}
              placeholder='e.g. Squat'
              onChangeText={() => this.onTextInput()}
            />
          </CardSection>
        </Card>

        <Content>
          <Content padder />
          {this.renderButton()}
          <Content padder />
        </Content>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { text: state.newExercise.text };
};

export default connect(mapStateToProps, {
  inputExercise,
  createExercise
})(NewExercise);

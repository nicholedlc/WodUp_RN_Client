import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Text } from 'native-base';
import { BottomNav } from './common';
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
      <View style={styles.buttonStyle}>
        <Button
          color='white'
          title='Submit'
          onPress={() => this.onSubmit()}
        />
      </View>
    );
  }

  render () {
    const { text } = this.props;
    return (
      <Container>
        <Content>
          <Form style={styles.formStyle}>
            <Item floatingLabel>
              <Label>Exercise</Label>
              <Input value={text}
                autoCorrect={false}
                onChangeText={() => this.onTextInput()} />
            </Item>
          </Form>
          <Content  padder />

          {/* <Button block info
            style={styles.buttonStyle}
            onPress={() => this.onButtonPress()}
          >
            <Text>
              Submit
            </Text>
          </Button> */}
          {this.renderButton()}
        </Content>

      <BottomNav />
      </Container>
    );
  }
}

const styles = {
  buttonStyle: {
    flex: 0,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#67bec9',
    borderRadius: 5
  },
  formStyle: {
    marginRight: 15
  }
}

const mapStateToProps = state => {
  return { text: state.newExercise.text };
};

export default connect(mapStateToProps, {
  inputExercise,
  createExercise
})(NewExercise);

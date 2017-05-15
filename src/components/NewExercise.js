import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { BottomNav } from './common';
import { inputExercise, createExercise } from '../actions';

class NewExercise extends Component {
  onTextInput (value) {
    this.props.inputExercise(value)
  }

  onButtonPress () {
    this.props.createExercise(this.props.text);
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
                onChangeText={this.onTextInput.bind(this)} />
            </Item>
          </Form>
          <Content  padder />

          <Button block info
            style={styles.buttonStyle}
            onPress={this.onButtonPress.bind(this)}
          >
            <Text>
              Submit
            </Text>
          </Button>
        </Content>

      <BottomNav />
      </Container>
    );
  }
}

const styles = {
  buttonStyle: {
    marginLeft: 15,
    marginRight: 15
  },
  formStyle: {
    marginRight: 15
  }
}

const mapStateToProps = state => {
  return { text: state.newExercise.text };
};

export default connect(mapStateToProps, { inputExercise, createExercise })(NewExercise);

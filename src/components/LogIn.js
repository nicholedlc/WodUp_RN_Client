import React, { Component } from 'react';
import { AsyncStorage, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';
import { inputLogIn, resetLogInForm, submitLogIn, loading } from '../actions';
import { BaseContainer, SubHeader, Card, CardSection, FormField, ButtonPrimary, Spinner } from './common';

// TODO: Add refs prop to FormField and next button on the keyboard

class LogIn extends Component {
  onSubmit () {
    const { email, password, submitLogIn } = this.props;
    return this.props.submitLogIn({ email, password })
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

  render () {
    const { inputLogIn, email, password } = this.props;
    return (
      <BaseContainer>
        <SubHeader>
          <Text>Log In</Text>
        </SubHeader>
        <Card>
          <CardSection>
            <FormField
              // ref='1'
              label='E-mail'
              keyboardType='email-address'
              placeholder='user@gmail.com'
              returnKeyType='next'
              value={email}
              onChangeText={value => inputLogIn({ key: 'email', value })}
              // blurOnSubmit={false}
              // onSubmitEditing={() => this.focusNextField('2')}
            />
          </CardSection>

          <CardSection>
            <FormField
              label='Password'
              secureTextEntry={true}
              placeholder='supersecret'
              returnKeyType='done'
              value={password}
              onChangeText={value => inputLogIn({ key: 'password', value })}
            />
          </CardSection>
        </Card>

        <Container>
          <Content>
            <Content padder />
            {this.renderButton()}
            <Content padder />
          </Content>
          {/* <BottomNav /> */}
        </Container>
      </BaseContainer>
    );
  }
}

const mapStateToProps = state => {
  return { email, password } = state.logIn
}

export default connect(mapStateToProps, { inputLogIn, resetLogInForm, submitLogIn, loading })(LogIn);

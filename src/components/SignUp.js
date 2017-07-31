import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AsyncStorage, Text } from 'react-native';
import { Content } from 'native-base';
import { BaseContainer, SubHeader, Card, CardSection, FormField, ButtonPrimary } from './common';
import { inputUser, createUser, resetSignUpForm } from '../actions';

// TODO: REFACTOR: use the same action for inputText, loading, failure
// TODO: REFACTOR: do not destructure all state variables?

class SignUp extends Component {
  componentDidMount () {
    return this.props.resetSignUpForm();
  };

  onSubmit () {
    const { signUp, createUser } = this.props;
    createUser({ signUp });
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

  // TODO: OAuth

  render () {
    const { signUp: { firstName, lastName, email, password, passwordConfirmation }, inputUser } = this.props;
    return (
      <BaseContainer>
        <SubHeader>
          <Text>Sign Up</Text>
        </SubHeader>
        <Card>
          <CardSection>
            <FormField
              label='First Name'
              placeholder='Ron'
              returnKeyType='next'
              value={firstName}
              onChangeText={val => inputUser({ key: 'firstName', val })}
            />
          </CardSection>

          <CardSection>
            <FormField
              label='Last Name'
              placeholder='Burgundy'
              returnKeyType='next'
              value={lastName}
              onChangeText={val => inputUser({ key: 'lastName', val })}
            />
          </CardSection>

          <CardSection>
            <FormField
              label='E-mail'
              keyboardType='email-address'
              placeholder='user@gmail.com'
              returnKeyType='next'
              value={email}
              onChangeText={val => inputUser({ key: 'email', val })}
            />
          </CardSection>

          <CardSection>
            <FormField
              label='Password'
              secureTextEntry={true}
              placeholder='supersecret'
              returnKeyType='done'
              value={password}
              onChangeText={val => inputUser({ key: 'password', val })}
            />
          </CardSection>

          <CardSection>
            <FormField
              label='Confirm Passowrd'
              secureTextEntry={true}
              placeholder='supersecret'
              returnKeyType='done'
              value={passwordConfirmation}
              onChangeText={val => inputUser({ key: 'passwordConfirmation', val })}
            />
          </CardSection>
        </Card>

        <Content>
          <Content padder />
          {this.renderButton()}
          <Content padder />
        </Content>
      </BaseContainer>
    );
  }
}

const mapStateToProps = state => {
  return { signUp } = state;
}

export default connect(mapStateToProps, { inputUser, createUser, resetSignUpForm })(SignUp);

import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';
import { inputLogIn, resetLogInForm, submitLogIn } from '../actions';
import { Card, CardSection, FormField, ButtonPrimary } from './common';

class LogIn extends Component {
  componentDidMount () {
    return this.props.resetLogInForm();
  }

  onSubmit () {
    const { email, password, submitLogIn } = this.props;
    console.log(email, password);
    return this.props.submitLogIn({ email, password })
  }

  renderButton () {
    // if (this.props.loading) {
    //   return <Spinner />
    // }
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
      <View style={{flex: 1}}>
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
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { email, password } = state.logIn
}

export default connect(mapStateToProps, { inputLogIn, resetLogInForm, submitLogIn })(LogIn);

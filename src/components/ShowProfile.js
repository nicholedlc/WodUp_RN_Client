import React, { Component } from 'react';
import { Dimensions, View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { showProfileInfo } from '../actions';
import { SubHeader, Card, CardSection, Box, StatHeader, Stat, ProfilePic } from './common';

class ShowProfile extends Component {
  componentDidMount () {
    return this.props.showProfileInfo();
  }

  render () {
    const { email, firstName, lastName } = this.props.user;
    return (
      <View style={{flex: 1}}>
        <Image
          style={{ width: Dimensions.get('window').width, height: 250, opacity: 0.5, backgroundColor: '#67BEC9' }}
          source={require('../../assets/images/barbell-1.jpg')} />

        <CardSection style={{height: 70}}>
          <View style={{ alignSelf: 'flex-end', borderRadius: 50, borderWidth: 2, borderColor: 'white', zIndex: 5 }}>
            <ProfilePic
              source={require('../../assets/images/profile-pic.jpg')}
              style={{ borderWidth: 1, borderColor: 'white' }}
            />
          </View>
          <View style={{ flex: 2 }}>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ fontSize: 25, color: '#002C31' }}>{`${firstName} ${lastName}`}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ alignItems: 'flex-end', color: '#696969' }}>{email}</Text>
            </View>
          </View>
        </CardSection>

        <Card>
          <CardSection>
            <Box>
              <StatHeader>Age</StatHeader>
              <Stat>32</Stat>
            </Box>
            <Box>
              <StatHeader>Gender</StatHeader>
              <Stat>F</Stat>
            </Box>
            <Box>
              <StatHeader>Weight</StatHeader>
              <Stat>51</Stat>
            </Box>
            <Box>
              <StatHeader>Height</StatHeader>
              <Stat>155</Stat>
            </Box>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.logIn.user)
  return {
    user: state.logIn.user
  };
}

export default connect(mapStateToProps, { showProfileInfo })(ShowProfile);

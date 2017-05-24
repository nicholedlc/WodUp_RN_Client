import React, { Component } from 'react';
import { AsyncStorage, View, Text } from 'react-native';
import { Card, SubHeader } from './common';

class ShowProfile extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <View style={{flex: 1}}>
        <SubHeader>
          <Text>Athlete Profile</Text>
        </SubHeader>
      </View>
    );
  }
}

export default ShowProfile;

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { createNewLog } from '../actions/types';

class NewLog extends Component {
  render () {
    console.log(this.props);
    return (
      <View>
        <Text>{this.props.something}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    something: `${state.bool}`
  };
};

export default connect(mapStateToProps, { createNewLog })(NewLog);

import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { showLogInfo } from '../actions';

class ShowLog extends Component {
  expandContent () {
    const { log: { rep, set, weight, note, imageUrl }, expanded } = this.props;
    if(expanded) {
      return (
        <CardSection>
          <Text>Rep: {rep}</Text>
          <Text>Set: {set}</Text>
          <Text>Weight: {weight}</Text>
          <Text>Note: {note}</Text>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: `http://localhost:3636${imageUrl}`}} />
        </CardSection>
      );
    }
  }

  render () {
    const { id, date } = this.props.log;
    console.log(this.props);
    return (
      <TouchableHighlight
        onPress={() => this.props.showLogInfo(id)}
      >
        <View>
          <CardSection>
            <Text style={styles.textStyle}>
              Date:{date}
            </Text>
          </CardSection>
          {this.expandContent()}
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = {
  textStyle: {
    color: '#696969',
    fontSize: 15,
    paddingLeft: 15
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.logId === ownProps.log.id;
  console.log(expanded);
  return { expanded }
}

export default connect(mapStateToProps, { showLogInfo })(ShowLog);

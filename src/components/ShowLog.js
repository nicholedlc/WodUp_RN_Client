import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { CardSection } from './common';
import { showLogInfo } from '../actions';


class ShowLog extends Component {
  expandContent () {
    const { log: { rep, set, weight, note, imageUrl }, expanded } = this.props;
    if(expanded) {
      return (
        <CardSection>
          <View>
            <Text>Rep {rep}</Text>
            <Text>Set {set}</Text>
            <Text>Weight {weight}</Text>
            <Text>Note {note}</Text>
            <Text>Image</Text>
            <Image
              style={{width: 100, height: 100}}
              source={{uri: `http://localhost:3636${imageUrl}`}} />
          </View>
        </CardSection>
      );
    }
  }

  render () {
    const { id, date } = this.props.log;
    const exerciseDate = moment(Date.parse(date)).format('ddd, MMMM Do YYYY');
    return (
      <TouchableHighlight
        onPress={() => this.props.showLogInfo(id)}
      >
        <View>
          <CardSection>
            <Text style={styles.listStyle}>
              {exerciseDate}
            </Text>
          </CardSection>
          {this.expandContent()}
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = {
  listStyle: {
    color: '#696969',
    fontSize: 15,
    paddingLeft: 15
  },
  contentStyle: {

  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.logId === ownProps.log.id;
  return { expanded }
}

export default connect(mapStateToProps, { showLogInfo })(ShowLog);

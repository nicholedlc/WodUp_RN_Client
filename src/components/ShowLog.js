import React, { Component } from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
  LayoutAnimation,
  ScrollView,
  Dimensions as D
} from 'react-native';
import { Container, Icon, Thumbnail } from 'native-base';
import { connect } from 'react-redux';
import moment from 'moment';
import { Card, CardSection, Box, StatHeader, Stat } from './common';
import { showLogInfo } from '../actions';


class ShowLog extends Component {
  componentWillUpdate () {
    LayoutAnimation.easeInEaseOut();
  }

  componentDidMount () {
    return this.props.showLogInfo(null);
  }

  toggleView () {
    const { log, expanded, showLogInfo } = this.props;
    return expanded ? showLogInfo(null) : showLogInfo(log.id);
  }

  expandContent () {
    const { log: { note, imageUrl }, expanded } = this.props;
    const { scrollViewStyle,
      imageStyle,
      defaultImageStyle,
      noteLabelStyle,
      noteStyle
    } = styles;
    if(expanded) {
      return (
          <ScrollView
            style={scrollViewStyle}
            horizontal={true}
            directionalLockEnabled={true}
            pagingEnabled={true}
          >
            <View>
              {imageUrl
                ? <Image
                    style={imageStyle}
                    source={{uri: `http://localhost:3636${imageUrl}`}}
                  />
                : <Image
                    style={[imageStyle, defaultImageStyle]}
                    source={require('../../assets/images/dumbell.png')}
                  />
              }
            </View>
            <View style={imageStyle}>
              <Text style={noteLabelStyle}>Notes</Text>
              <Text style={noteStyle}>{note}</Text>
            </View>
          </ScrollView>
      );
    }
  }

  render () {
    const {
      log: {id, date, rep, set, weight, imageUrl },
      expanded
    } = this.props;
    const {
      sectionHeaderStyle,
      thumbnailStyle,
      defaultThumbnailStyle,
      dateStyle,
      iconStyle,
    } = styles;
    const exerciseDate = moment(Date.parse(date)).format('ddd, MMMM Do YYYY');

    console.log('log', date, weight, imageUrl);

    //TODO: Fix arrow icon centering
    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this.toggleView()}>
          <View>
            <Card>
              <CardSection>
                <View style={sectionHeaderStyle}>
                  {imageUrl
                    ? <Thumbnail
                      source={{uri: `http://localhost:3636${imageUrl}`}}
                      style={thumbnailStyle}
                      small
                      square
                      />
                    : <Thumbnail
                      source={require('../../assets/images/dumbell.png')}
                      style={defaultThumbnailStyle}
                      small square
                      />
                  }
                    <Text style={dateStyle}>
                      {exerciseDate}
                    </Text>
                </View>
                <Icon
                  name={expanded
                    ? 'arrow-down'
                    : 'arrow-forward'}
                  style={iconStyle}
                />
              </CardSection>
              <CardSection>
                <Box>
                  <StatHeader>Reps</StatHeader>
                  <Stat>{rep}</Stat>
                </Box>
                <Box>
                  <StatHeader>Sets</StatHeader>
                  <Stat>{set}</Stat>
                </Box>
                <Box>
                  <StatHeader>Weights</StatHeader>
                  <Stat>{weight}</Stat>
                </Box>
              </CardSection>
            </Card>
          </View>
        </TouchableWithoutFeedback>
        {this.expandContent()}
      </View>
    );
  }
}

const styles = {
  sectionHeaderStyle: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 5
  },
  dateStyle: {
    paddingLeft: 10,
    color: '#696969',
    fontSize: 15
  },
  thumbnailStyle: {
    borderRadius: 5
  },
  defaultThumbnailStyle: {
    opacity: 0.5
  },
  scrollViewStyle: {
    backgroundColor: '#f6f5f4',
    marginLeft: 5,
    marginRight: 5,
  },
  imageStyle: {
    height: 300,
    maxHeight: 365,
    width: D.get('window').width - 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderTopWidth: 0,
    // flex: 1,
    // width: null
  },
  defaultImageStyle: {
    opacity: 0.1
  },
  tabStyle: {
    fontSize: 10
  },
  iconStyle: {
    paddingRight: 5,
    fontSize: 15,
    color: 'gainsboro'
  },
  noteLabelStyle: {
    fontSize: 15,
    color: '#1c4951',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  noteStyle: {
    fontSize: 15,
    color: '#696969',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.logId === ownProps.log.id;
  return { expanded }
}

export default connect(mapStateToProps, { showLogInfo })(ShowLog);

import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { showProfileInfo } from "../actions";
import {
  BaseContainer,
  SubHeader,
  Card,
  CardSection,
  Box,
  StatHeader,
  Stat,
  Avatar,
  Spinner,
  ErrorMessage,
  CoverPhoto
} from "./common";
import { COLOR_SECONDARY, BACKGROUND_PRIMARY } from "../styles";

class ShowProfile extends Component {
  componentDidMount() {
    return this.props.showProfileInfo();
  }

  render() {
    const { firstName, lastName, email, loading, errorMessage } = this.props;
    const { age, gender, weight, height } = this.props.profile || {};
    const {
      cardSectionStyle,
      bannerStyle,
      viewStyle,
      nameStyle,
      emailStyle
    } = styles;
    if (errorMessage) {
      return <ErrorMessage />;
    }
    if (loading) {
      return <Spinner />;
    }
    return (
      <BaseContainer>
        <CoverPhoto source={require("../../assets/images/barbell-1.jpg")} />

        <CardSection style={cardSectionStyle}>
          <Avatar
            source={require("../../assets/images/profile-pic.jpg")}
          // TODO: Add ability to upload profile pic
          />
          <View style={bannerStyle}>
            <View style={viewStyle}>
              <Text style={nameStyle}>{`${firstName} ${lastName}`}</Text>
            </View>
            <View style={viewStyle}>
              <Text style={emailStyle}>{email}</Text>
            </View>
          </View>
        </CardSection>

        <Card>
          <CardSection>
            <Box>
              <StatHeader>Age</StatHeader>
              <Stat>{age}</Stat>
            </Box>
            <Box>
              <StatHeader>Gender</StatHeader>
              <Stat>{gender}</Stat>
            </Box>
            <Box>
              <StatHeader>Weight</StatHeader>
              <Stat>{weight}</Stat>
            </Box>
            <Box>
              <StatHeader>Height</StatHeader>
              <Stat>{height}</Stat>
            </Box>
          </CardSection>
        </Card>
      </BaseContainer>
    );
  }
}

const styles = {
  cardSectionStyle: {
    height: 70
  },
  bannerStyle: {
    flex: 2
  },
  viewStyle: {
    alignItems: "flex-end"
  },
  nameStyle: {
    fontSize: 25,
    color: COLOR_SECONDARY
  },
  emailStyle: {
    alignItems: "flex-end",
    color: "#696969"
  }
};

const mapStateToProps = state => {
  const {
    firstName,
    lastName,
    email,
    profile,
    errorMessage,
    loading
  } = state.showProfile.profile;
  return { firstName, lastName, email, profile, loading, errorMessage };
};

export default connect(mapStateToProps, { showProfileInfo })(ShowProfile);

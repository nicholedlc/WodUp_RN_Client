import React, { Component } from "react";
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from "native-base";
import { Actions } from "react-native-router-flux";
const BottomNav = () => {
  return (
    <Container style={{ flex: 0, height: 55.5 }}>
      <Content />
      <Footer>
        <FooterTab>
          <Button
            vertical
            style={{ backgroundColor: "#002c31", borderRadius: 0 }}
            onPress={() => Actions.userProfile()}
          >
            <Icon name="person" style={{ color: "white" }} />
            <Text style={{ color: "white" }}>Profile</Text>
          </Button>
          <Button
            vertical
            style={{ backgroundColor: "#002c31", borderRadius: 0 }}
            onPress={() => Actions.main()}
          >
            <Icon name="speedometer" style={{ color: "white" }} />
            <Text style={{ color: "white" }}>Track</Text>
          </Button>
          <Button
            vertical
            style={{ backgroundColor: "#002c31", borderRadius: 0 }}
          >
            <Icon active name="settings" style={{ color: "white" }} />
            <Text style={{ color: "white" }}>Settings</Text>
          </Button>
          <Button
            vertical
            style={{ backgroundColor: "#002c31", borderRadius: 0 }}
          >
            <Icon name="calculator" style={{ color: "white" }} />
            <Text style={{ color: "white" }}>Tools</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};
export { BottomNav };

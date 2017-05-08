import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
const BottomNav = () => {
  return (
    <Container style={{flex: 0, height: 55.5}}>
        <Content />
        <Footer >
          <FooterTab>
            <Button vertical>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
            <Button vertical>
              <Icon name="speedometer" />
              <Text>Track</Text>
            </Button>
            <Button vertical>
                <Icon active name="settings" />
                <Text>Settings</Text>
            </Button>
            <Button vertical>
              <Icon name="calculator" />
              <Text>Tools</Text>
            </Button>
          </FooterTab>
        </Footer>
    </Container>
  );
}
export { BottomNav };

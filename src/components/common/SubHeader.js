import React, { Component } from 'react';
import { Text } from 'native-base';
import { CardSection } from './CardSection';

const SubHeader = (props) => {
  return (
    <CardSection style={styles.containerStyle}>
      <Text style={styles.textStyle}>
        {props.children}
      </Text>
    </CardSection>
  );
}

const styles = {
  containerStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    color: '#002C31',
    fontSize: 18
  }
}

export { SubHeader };

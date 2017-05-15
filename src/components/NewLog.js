import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DatePickerIOS, View, Image } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import moment from 'moment';
import { CardSection, BottomNav } from './common';
import { inputLog, createLog } from '../actions';
import PickImage from './PickImage';

class NewLog extends Component {
  onButtonPress () {
    const { createLog, id, date, rep, set, weight, note, uri } = this.props;
    createLog({ id, date, rep, set, weight, note, uri });
  }

  renderImage () {
    const { uri } = this.props;
    if (uri !== null) {
      return (
        <View style={styles.imageViewStyle}>
          <Image source={{uri}} style={styles.imageStyle} />
        </View>
      );
    }
  }

  render () {
    const { name, inputLog, date, rep, set, weight, note } = this.props;
    return (
      <Container>
        <CardSection>
          <Text>{name}</Text>
        </CardSection>

        <Content style={{ flex: 1 }}>
          <Form style={styles.formStyle}>
            <Item>
              <Label>Date</Label>
              <Input
                value={`${moment(Date.parse(date)).format('ddd, MMMM Do YYYY')}`}
                editable={false}
              />
            </Item>
            <DatePickerIOS
              date={date}
              mode='date'
              onDateChange={val => inputLog({ key: 'date', val })}
            />

            <Item>
              <Label>Reps</Label>
              <Input
                value={rep}
                keyboardType='numeric'
                onChangeText={val => inputLog({ key: 'rep', val})}
              />
            </Item>

            <Item>
              <Label>Sets</Label>
              <Input
                value={set}
                keyboardType='numeric'
                onChangeText={val => inputLog({ key: 'set', val})}
              />
            </Item>

            <Item>
              <Label>Weights</Label>
              <Input
                value={weight}
                keyboardType='numeric'
                onChangeText={val => inputLog({ key: 'weight', val})}
              />
            </Item>

            <Item>
              <Label>Notes</Label>
              <Input
                style={styles.noteStyle}
                value={note}
                autoCorrect={false}
                multiline={true}
                numberOfLines={4}
                onChangeText={val => inputLog({ key: 'note', val})}
              />
            </Item>
            <Content padder />

            <PickImage />
          </Form>

          <Content padder />
          {this.renderImage()}
          <Content padder />

          <Button block info
            style={styles.buttonStyle}
            onPress={() => this.onButtonPress()}
          >
            <Text>
              Submit
            </Text>
          </Button>
          <Content padder />
        </Content>

        <BottomNav />
      </Container>
    );
  }
}

const styles = {
  buttonStyle: {
    flex: 0,
    marginLeft: 15,
    marginRight: 15
  },
  formStyle: {
    marginRight: 15,
  },
  noteStyle: {
    height: 115,
    paddingTop: 15,
    paddingBottom: 15
  },
  imageViewStyle: {
    marginLeft: 15,
  },
  imageStyle: {
    height: 345,
    width: 345
  }
}

const mapStateToProps = state => {
  const {
    newLog: { date, rep, set, weight, note, uri },
    exercise: { name, id }
  } = state;
  return { name, id, date, rep, set, weight, note, uri };
};

export default connect(mapStateToProps, { inputLog, createLog })(NewLog);

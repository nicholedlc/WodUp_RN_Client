import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DatePickerIOS } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import moment from 'moment';
import { CardSection, BottomNav } from './common';
import { inputLog, createLog } from '../actions';

class NewLog extends Component {
  onButtonPress () {
    const { id, date, rep, set, weight, note } = this.props;
    this.props.createLog({ id, date, rep, set, weight, note });
  }

  render () {
    console.log(this.props);
    const { name, date, rep, set, weight, note, inputLog } = this.props;
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
          </Form>
          <Content padder />

          <Button block info
            style={styles.buttonStyle}
            // onPress={(this.onButtonPress.bind(this))}
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
    marginLeft: 15,
    marginRight: 15
  },
  formStyle: {
    marginRight: 15
  },
  noteStyle: {
    height: 115,
    paddingTop: 15,
    paddingBottom: 15
  }
}

const mapStateToProps = state => {
  console.log(state);
  const {
    newLog: { date, rep, set, weight, note },
    exercise: { name, id }
  } = state;
  // console.log({ name, date, rep, set, weight, note });
  return { name, date, rep, set, weight, note };
};

export default connect(mapStateToProps, { inputLog, createLog })(NewLog);

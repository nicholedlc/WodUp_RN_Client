import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableWithoutFeedback, DatePickerIOS, Modal, View, Image, Button } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Text, Thumbnail } from 'native-base';
import moment from 'moment';
import { Card, CardSection, BottomNav, Spinner, ErrorMessage, SubHeader, FormField } from './common';
import { openModal, inputLog, createLog, resetNewLogForm } from '../actions';
import PickImage from './PickImage';

class NewLog extends Component {
  componentDidMount () {
    return this.props.resetNewLogForm();
  }

  // TODO: resetDate should return the previous input date rather than today's date

  resetDate () {
    const today = this.props.date;
    this.props.inputLog({ key: 'date', val: today });
    return this.props.openModal(false);
  }

  modal () {
    const { modalActive, openModal, date, inputLog } = this.props;
    const { modalViewStyle, modalButtonContainerStyle, datePickerStyle } = styles;
    return (
      <View>
        <Modal
          visible={modalActive || false}
          transparent={true}
          animationType={'slide'}
          >
          <View style={modalViewStyle}>
            <TouchableWithoutFeedback onPress={() => this.props.openModal(false)}>
              <View style={{ flex: 1 }} />
            </TouchableWithoutFeedback>
            <View>
              <View style={modalButtonContainerStyle}>
                <Button
                  color='#67bec9'
                  title='Cancel'
                  onPress={() => this.resetDate()}
                />
                <Button
                  color='#67bec9'
                  title='Done'
                  onPress={() => openModal(false)}
                />
              </View>
              <View style={datePickerStyle}>
                <DatePickerIOS
                  date={date}
                  mode='date'
                  onDateChange={val => inputLog({ key: 'date', val })}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  onSubmit () {
    const {
      createLog, exerciseId, date, rep, set, weight, note, uri
    } = this.props;
    createLog({ exerciseId, date, rep, set, weight, note, uri });
  }

  renderButton () {
    if (this.props.loading) {
      return <Spinner />
    }
    return (
      <View style={styles.buttonStyle}>
        <Button
          color='white'
          title='Submit'
          onPress={() => this.onSubmit()}
        />
      </View>
    );
  }

  render () {
    const {
      exerciseName, openModal, date, inputLog, rep, set, weight, note, uri
    } = this.props;
    console.log('modalActive: ', this.props.modalActive)

    return (
      <View style={{ flex: 1 }}>
        <SubHeader>{exerciseName}</SubHeader>

        <Card style={styles.cardStyle}>
          <TouchableWithoutFeedback
            onPress={() => openModal(true)}
          >
            <View>
              <CardSection>
                <FormField
                  label='Date'
                  value={`${moment(Date.parse(date)).format('ddd, MMMM Do YYYY')}`}
                  editable={false}
                />
              </CardSection>
              {this.modal()}
            </View>
          </TouchableWithoutFeedback>

          <CardSection style={styles.cardSectionStyle}>
            <FormField
              label='Reps'
              value={rep}
              keyboardType='numeric'
              onChangeText={val => inputLog({ key: 'rep', val})}
            />
          </CardSection>

          <CardSection style={styles.cardSectionStyle}>
            <FormField
              label='Sets'
              value={set}
              keyboardType='numeric'
              onChangeText={val => inputLog({ key: 'set', val})}
            />
          </CardSection>

          <CardSection>
            <FormField
              label='Weights'
              value={weight}
              keyboardType='numeric'
              onChangeText={val => inputLog({ key: 'weight', val})}
            />
          </CardSection>

          <CardSection style={{ height: 125 }}>
            <FormField
              label='Notes'
              style={styles.noteStyle}
              value={note}
              autoCorrect={false}
              multiline={true}
              numberOfLines={4}
              maxLength={100}
              onChangeText={val => inputLog({ key: 'note', val})}
            />
          </CardSection>
            <PickImage>
              {uri
                ? <Thumbnail
                  source={{uri}}
                  style={styles.thumbnailStyle}
                  small
                  square
                  />
                : <Text>{' '}</Text>
              }
            </PickImage>
        </Card>


        <Container>
          <Content>
            <Content padder />

          {this.renderButton()}
          <Content padder />
        </Content>

        {/* <BottomNav /> */}
      </Container>
    </View>
    );
  }
}

const styles = {
  buttonStyle: {
    flex: 0,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#67bec9',
    borderRadius: 5
  },
  formStyle: {
    marginRight: 15,
  },
  modalViewStyle: {
    justifyContent: 'flex-end',
    flex: 1
  },
  modalButtonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'whitesmoke'
  },
  modalButtonStyle: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  datePickerStyle: {
    backgroundColor: 'gainsboro'
  },
  noteStyle: {
    height: 100,
    paddingTop: 5,
    paddingBottom: 5
  },
  thumbnailStyle: {
    borderRadius: 5
  },
  cardStyle: {
    borderWidth: 0
  },
  cardSectionStyle: {
    paddingTop: 5,
    paddingBottom: 5
  }
}

const mapStateToProps = state => {
  const {
    exercise: { name, id },
    newLog: { modalActive, date, rep, set, weight, note, uri, loading, errorMessage }
  } = state;
  return {
    exerciseName: name,
    exerciseId: id,
    modalActive, date, rep, set, weight, note, uri, loading, errorMessage
  };
};

export default connect(mapStateToProps, { openModal, inputLog, createLog, resetNewLogForm })(NewLog);

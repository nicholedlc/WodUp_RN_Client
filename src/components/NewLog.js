import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  TouchableWithoutFeedback,
  DatePickerIOS,
  View,
  Text,
  Image
} from 'react-native';
import { Container, Content } from 'native-base';
import moment from 'moment';
import {
  Card,
  CardSection,
  BottomNav,
  Spinner,
  ErrorMessage,
  SubHeader,
  FormField,
  ModalComponent,
  ModalBar,
  ModalBarButton,
  ModalContent,
  ButtonPrimary,
  ThumbnailPrimary
} from './common';
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
    const {
      modalViewStyle, modalButtonContainerStyle, datePickerStyle
    } = styles;
    return (
      <View>
        <ModalComponent
          visible={modalActive}
          transparent={true}
          animationType={'slide'}
          onPress={() => openModal(false)}
          >
          <ModalBar>
            <ModalBarButton
              title='Cancel'
              onPress={() => this.resetDate()}
            />
            <ModalBarButton
              title='Done'
              onPress={() => openModal(false)}
            />
          </ModalBar>
          <ModalContent>
            <DatePickerIOS
              date={date}
              mode='date'
              onDateChange={val => inputLog({ key: 'date', val })}
            />
          </ModalContent>
        </ModalComponent>
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
      <ButtonPrimary
        title='Submit'
        onPress={() => this.onSubmit()}
      />
    );
  }

  render () {
    const {
      exerciseName,
      openModal,
      date,
      inputLog,
      rep,
      set,
      weight,
      note,
      uri,
      modalActive
    } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <SubHeader>{exerciseName}</SubHeader>

        <Card>
          <TouchableWithoutFeedback onPress={() => openModal(true)}>
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

          <CardSection >
            <FormField
              label='Reps'
              value={rep}
              keyboardType='numeric'
              onChangeText={val => inputLog({ key: 'rep', val})}
            />
          </CardSection>

          <CardSection >
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
            {uri ? <ThumbnailPrimary source={{uri}} /> : <Text>{' '}</Text> }
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
  noteStyle: {
    height: 100,
    paddingTop: 5,
    paddingBottom: 5
  }
}

const mapStateToProps = state => {
  const {
    exercise: { name, id },
    newLog: {
      modalActive,
      date,
      rep,
      set,
      weight,
      note,
      uri,
      loading,
      errorMessage }
  } = state;
  return {
    exerciseName: name,
    exerciseId: id,
    modalActive,
    date,
    rep,
    set,
    weight,
    note,
    uri,
    loading,
    errorMessage
  };
};

export default connect(mapStateToProps, {
  openModal,
  inputLog,
  createLog,
  resetNewLogForm
})(NewLog);

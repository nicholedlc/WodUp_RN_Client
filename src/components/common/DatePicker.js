import React from 'React';
import { Modal, DatePickerIOS } from 'react-native';

const DatePicker = () => {
  return (
    <Modal>
      <DatePickerIOS
        date={date}
        mode='date'
        onDateChange={val => inputLog({ key: 'date', val })}
      />
    </Modal>
  );
}

export { DatePicker };

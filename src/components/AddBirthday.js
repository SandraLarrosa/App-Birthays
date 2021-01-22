import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import 'moment/locale/es';

export default function AddBirthday() {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [formData, setFormData] = useState({});
  console.log(formData);

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  const handlerConfirm = (date) => {
    const dateBirth = date;
    dateBirth.setHours(0);
    dateBirth.setMinutes(0);
    dateBirth.setSeconds(0);
    setFormData({...formData, dateBirth});
    hideDatePicker();
  };

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="#969696"
        />
        <TextInput
          style={styles.input}
          placeholder="Apellidos"
          placeholderTextColor="#969696"
        />
        <View style={[styles.input, styles.datePicker]}>
          <Text
            style={{
              color: formData.dateBirth ? 'white' : '#969696',
              fontSize: 18,
            }}
            onPress={showDatePicker}>
            {formData.dateBirth
              ? moment(formData.dateBirth).format('LL')
              : 'Fecha de Nacimiento'}
          </Text>
        </View>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handlerConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    color: 'white',
    width: '80%',
    marginBottom: 25,
    backgroundColor: '#1e3040',
    paddingHorizontal: 20,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#1e3040',
    borderRadius: 50,
  },
  datePicker: {
    justifyContent: 'center',
  },
});

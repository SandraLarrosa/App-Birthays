import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import 'moment/locale/es';
import firebase from '../utils/firebase';
import 'firebase/firestore';

const db = firebase.firestore(firebase);

export default function AddBirthday(props) {
  const {user, setShowList, setReloadData} = props;
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    dateBirth: '',
  });
  const [formError, setFormError] = useState({});

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  const handlerConfirm = (date) => {
    const dateBirth = date;
    dateBirth.setHours(0);
    dateBirth.setMinutes(0);
    dateBirth.setSeconds(0);
    setFormData({...formData, dateBirth});
    hideDatePicker();
  };

  const setFormDataOnChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text});
  };

  const validationFormData = () => {
    let nameIsWrong = !formData.name;
    let lastNameIsWrong = !formData.lastName;
    let dateIsWrong = !formData.dateBirth;

    let errors = {
      name: nameIsWrong,
      lastName: lastNameIsWrong,
      dateBirth: dateIsWrong,
    };

    setFormError(errors);
    addBirthdayDataBase(errors);
  };

  const addBirthdayDataBase = (errors) => {
    if (!errors.name && !errors.lastName && !errors.dateBirth) {
      const data = formData;
      data.dateBirth.setYear(0);
      db.collection(user.uid)
        .add(data)
        .then(() => {
          setReloadData(true);
          setShowList(true);
        })
        .catch(() => {
          setFormError({name: true, lastName: true, dateBirth: true});
        });
    }
  };

  const textInputDatePicker = () => {
    return formData.dateBirth
      ? moment(formData.dateBirth).format('LL')
      : 'Fecha de Nacimiento';
  };

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={[styles.input, formError.name && styles.error]}
          placeholder="Nombre"
          placeholderTextColor="white"
          onChange={(e) => setFormDataOnChange(e, 'name')}
        />
        <TextInput
          style={[styles.input, formError.lastName && styles.error]}
          placeholder="Apellidos"
          placeholderTextColor="white"
          onChange={(e) => setFormDataOnChange(e, 'lastName')}
        />
        <View
          style={[
            styles.input,
            styles.datePicker,
            formError.dateBirth && styles.error,
          ]}>
          <Text
            style={{
              color: formData.dateBirth ? '#200f21' : 'white',
              fontSize: 18,
            }}
            onPress={showDatePicker}>
            {textInputDatePicker()}
          </Text>
        </View>
        <TouchableOpacity onPress={validationFormData}>
          <Text style={styles.addButton}>Crear Cumpleaños</Text>
        </TouchableOpacity>
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
    color: '#200f21',
    width: '80%',
    marginBottom: 25,
    backgroundColor: '#625261',
    paddingHorizontal: 20,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#625261',
    borderRadius: 50,
  },
  datePicker: {
    justifyContent: 'center',
  },
  addButton: {
    fontSize: 18,
    color: 'white',
  },
  error: {
    borderColor: '#8f384d',
    backgroundColor: '#a9294f',
  },
});

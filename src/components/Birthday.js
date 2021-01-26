import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import moment from 'moment';

export default function Birthday(props) {
  const {birthday, deleteBirthday} = props;
  const pasat = birthday.days > 0 ? true : false;

  const dateBirthFormat = moment(birthday.dateBirth).format('L');
  console.log(dateBirthFormat);

  const infoDay = () => {
    if (birthday.days === 0) {
      Alert.alert(`¡¡Hoy es el cumpleaños de ${birthday.name}!!`);
      return (
        <>
          <Text style={styles.days}>¡¡¡Hoy es su cumpleaños!!!</Text>
        </>
      );
    } else {
      const days = -birthday.days;
      return (
        <>
          <View style={styles.textCurrent}>
            <Text style={styles.daysLeft}>
              Faltan: {days} {days === 1 ? 'Día' : 'Días'}
            </Text>
            <Text style={styles.dayBirth}>{dateBirthFormat}</Text>
          </View>
        </>
      );
    }
  };

  return (
    <TouchableOpacity
      onPress={() => deleteBirthday(birthday)}
      style={[
        styles.card,
        pasat
          ? styles.pasat
          : birthday.days === 0
          ? styles.actual
          : styles.current,
      ]}>
      <Text style={styles.name}>
        {birthday.name} {birthday.lastName}
      </Text>
      {pasat ? <Text style={styles.days}>{dateBirthFormat}</Text> : infoDay()}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 15,
  },
  current: {backgroundColor: '#efee9d'},
  pasat: {backgroundColor: '#c060a1'},
  actual: {backgroundColor: '#ffa299'},
  days: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dayBirth: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  daysLeft: {
    color: '#202040',
    fontSize: 16,
    padding: 1,
  },
  textCurrent: {
    backgroundColor: '#f4a548',
    borderRadius: 20,
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

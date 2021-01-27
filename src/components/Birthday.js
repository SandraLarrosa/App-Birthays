import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import moment from 'moment';

export default function Birthday(props) {
  const {birthday, deleteBirthday} = props;
  const pasatBirthday = birthday.days > 0 ? true : false;
  const todayBirthday = birthday.days === 0;
  const dateBirthFormat = moment(birthday.dateBirth).format('L');

  const showDays = () => {
    if (!todayBirthday) {
      const days = -birthday.days;
      return (
        <>
          <View style={styles.textCurrent}>
            <Text style={styles.daysLeft}>
              {days === 1 ? `Falta: ${days} día` : `Faltan: ${days} días`}
            </Text>
            <Text style={styles.dayBirth}>{dateBirthFormat}</Text>
          </View>
        </>
      );
    }
  };

  const printNames = () => {
    return (
      <Text style={[styles.name, todayBirthday && styles.nameBirthday]}>
        {birthday.name} {birthday.lastName}
      </Text>
    );
  };
  const printDateBirthOrDays = () => {
    return pasatBirthday ? (
      <Text style={styles.days}>{dateBirthFormat}</Text>
    ) : (
      showDays()
    );
  };
  const printTodayBirthday = () => {
    return (
      todayBirthday && (
        <>
          <Image
            style={styles.logo}
            source={require('../assets/images/icon-gift.png')}
          />
          <Text style={styles.birthday}>HOY ES EL CUMPLEAÑOS DE:</Text>
        </>
      )
    );
  };

  const styleCardBirthays = () => {
    if (pasatBirthday) {
      return styles.pasat;
    }
    if (todayBirthday) {
      return styles.actual;
    }
    return styles.current;
  };

  return (
    <TouchableOpacity
      onPress={() => deleteBirthday(birthday)}
      style={[styles.card, styleCardBirthays()]}>
      {printTodayBirthday()}
      {printNames()}
      {printDateBirthOrDays()}
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
  current: {backgroundColor: '#a2d0c1'},
  pasat: {backgroundColor: '#c060a1'},
  actual: {
    backgroundColor: '#ffa299',
    height: 150,
    flexDirection: 'column',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    textAlign: 'center',
  },
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
    backgroundColor: '#eff7e1',
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
  nameBirthday: {
    fontSize: 20,
  },
  logo: {
    width: 70,
    height: 70,
  },
  birthday: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import moment from 'moment';

export default function Birthday(props) {
  const {birthday, deleteBirthday} = props;
  const pasatBirthday = birthday.days > 0 ? true : false;
  const todayBirthday = birthday.days === 0;
  const dateBirthFormat = moment(birthday.dateBirth).format('L');

  const infoDay = () => {
    if (todayBirthday) {
      return <Text style={styles.days}>¡CUMPLEAÑOS!</Text>;
    } else {
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

  return (
    <TouchableOpacity
      onPress={() => deleteBirthday(birthday)}
      style={[
        styles.card,
        pasatBirthday
          ? styles.pasat
          : todayBirthday
          ? styles.actual
          : styles.current,
      ]}>
      {todayBirthday ? (
        <Image
          style={styles.logo}
          source={require('../assets/icon-gift.png')}
        />
      ) : (
        console.log('No es su cumpleaños')
      )}
      <Text style={styles.name}>
        {birthday.name} {birthday.lastName}
      </Text>
      {pasatBirthday ? (
        <Text style={styles.days}>{dateBirthFormat}</Text>
      ) : (
        infoDay()
      )}
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
  logo: {
    width: 50,
    height: 50,
  },
});

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Birthday(props) {
  const {birthday} = props;
  const pasat = birthday.days > 0 ? true : false;

  return (
    <TouchableOpacity
      style={[
        styles.card,
        pasat
          ? styles.pasat
          : birthday.days === 0
          ? styles.actual
          : styles.current,
      ]}>
      <Text>
        {birthday.name} {birthday.lastName}
      </Text>
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
  current: {backgroundColor: '#1ae1f2'},
  pasat: {backgroundColor: '#820000'},
  actual: {backgroundColor: '#559204'},
});

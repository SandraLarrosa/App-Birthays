import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ActionBar from './ActionBar';

export default function ListBirthday() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo</Text>
      <ActionBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
  },
});

import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import firebase from '../utils/firebase';

export default function ActionBar(props) {
  const {showList, setShowList} = props;

  const buttonLogOut = () => {
    Alert.alert(
      'Cerrar sesión',
      '¿Quieres cerrar la sesión?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Sí',
          onPress: () => {
            firebase.auth().signOut();
          },
        },
      ],
      {cancelable: false},
    );
  };

  const changeTextButtonAddDate = () => {
    return showList ? 'Nueva Fecha' : 'Cancelar';
  };

  return (
    <View style={styles.viewFooter}>
      <View style={styles.viewClose}>
        <Text style={styles.text} onPress={() => buttonLogOut()}>
          Cerrar Sesión
        </Text>
      </View>
      <View style={styles.viewAdd}>
        <Text style={styles.text} onPress={() => setShowList(!showList)}>
          {changeTextButtonAddDate()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewFooter: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  viewClose: {
    backgroundColor: '#ffba93',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 16,
    color: '#200f21',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  viewAdd: {
    backgroundColor: '#c3aed6',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});

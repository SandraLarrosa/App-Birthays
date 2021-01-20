import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {validateEmail} from '../utils/validation';
import firebase from '../utils/firebase';

export default function LoginForm(props) {
  const {changeForm} = props;

  const login = () => {
    console.log('Iniciando sesión');
  };
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#969696"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#969696"
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={login}>
        <Text style={styles.btnText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <View style={styles.register}>
        <TouchableOpacity onPress={changeForm}>
          <Text style={styles.btnText}>Regístrate</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  btnText: {
    color: 'white',
    fontSize: 18,
  },
  input: {
    height: 50,
    color: 'white',
    width: '80%',
    marginBottom: 25,
    backgroundColor: '#1E3040',
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#1E3040',
  },
  register: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
});

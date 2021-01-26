import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import {validateEmail} from '../utils/validation';
import firebase from '../utils/firebase';

export default function RegisterForm(props) {
  const {changeForm} = props;
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });
  const [formError, setFormError] = useState({});

  const register = () => {
    let emailIsWrong = !formData.email || !validateEmail(formData.email);
    let passwordIsWrong = !formData.password || formData.password.length < 6;
    let passWordsAreWrong =
      !formData.repeatPassword || formData.password !== formData.repeatPassword;

    let errors = {
      email: emailIsWrong,
      password: passwordIsWrong || passWordsAreWrong,
      repeatPassword: passwordIsWrong || passWordsAreWrong,
    };
    setFormError(errors);

    if (!errors.email && !errors.password && !errors.repeatPassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .catch(() => {
          setFormError({
            email: true,
            password: true,
            repeatPassword: true,
          });
        });
    }
  };

  return (
    <>
      <TextInput
        placeholder="Correo electrónico"
        placeholderTextColor="white"
        style={[styles.input, formError.email && styles.error]}
        keyboardType="email-address"
        onChange={(e) => setFormData({...formData, email: e.nativeEvent.text})}
      />
      <TextInput
        style={[styles.input, formError.password && styles.error]}
        placeholder="Contraseña"
        placeholderTextColor="white"
        secureTextEntry={true}
        onChange={(e) =>
          setFormData({...formData, password: e.nativeEvent.text})
        }
      />
      <TextInput
        style={[styles.input, formError.repeatPassword && styles.error]}
        placeholder="Repetir Contraseña"
        placeholderTextColor="white"
        secureTextEntry={true}
        onChange={(e) =>
          setFormData({...formData, repeatPassword: e.nativeEvent.text})
        }
      />
      <TouchableOpacity onPress={register}>
        <Text style={styles.btnText}>Regístrate</Text>
      </TouchableOpacity>

      <View style={styles.login}>
        <TouchableOpacity onPress={changeForm}>
          <Text style={styles.btnText}>Iniciar Sesión</Text>
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
    color: '#200f21',
    width: '80%',
    marginBottom: 25,
    backgroundColor: '#625261',
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#625261',
  },
  error: {
    borderColor: '#8f384d',
    backgroundColor: '#a9294f',
  },
  login: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
});

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {validateEmail} from '../utils/validation';
import firebase from '../utils/firebase';

export default function LoginForm(props) {
  const {changeForm} = props;
  const [formData, setFormData] = useState({email: '', password: ''});
  const [formError, setFormError] = useState({});

  const validationFormData = () => {
    let emailIsWrong = !formData.email || !validateEmail(formData.email);
    let passwordIsWrong = !formData.password;

    let errors = {
      email: emailIsWrong,
      password: passwordIsWrong,
    };
    setFormError(errors);

    if (!errors.email && !errors.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password)
        .catch(() => {
          Alert.alert('Usuario no encontrado');
          setFormError({
            email: true,
            password: true,
          });
        });
    }
  };

  const setFormDataOnChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text});
  };
  return (
    <>
      <TextInput
        style={[styles.input, formError.email && styles.error]}
        placeholder="Correo electrónico"
        placeholderTextColor="white"
        keyboardType="email-address"
        onChange={(e) => setFormDataOnChange(e, 'email')}
      />
      <TextInput
        style={[styles.input, formError.password && styles.error]}
        placeholder="Contraseña"
        placeholderTextColor="white"
        secureTextEntry={true}
        onChange={(e) => setFormDataOnChange(e, 'password')}
      />
      <TouchableOpacity onPress={validationFormData}>
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
  register: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  error: {
    borderColor: '#8f384d',
    backgroundColor: '#a9294f',
  },
});
